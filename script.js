
const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];

//fetching api from unsplash
const count = 10;
const apiKey = 'qszVSv-fk4QZ0c08nXHhmWUv60pfGugoRO6PEf6_72c';
const apiUrl =`https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;

//displying to dom

function displayPhotos() {
    photosArray.forEach((photo)=>{
       // creating <a> tag
        const item = document.createElement('a');
       item.setAttribute('href', photo.links.html);
       item.setAttribute('target','_blank');

       //creating img
        const img = document.createElement('img');
        img.setAttribute('src',photo.urls.regular);
        img.setAttribute('alt', photo.alt_description);
        img.setAttribute('title', photo.alt_description);

        //setting <img> to <a>
        item.appendChild(img);
        imageContainer.appendChild(item);
    });
}


async function getPhotos() {
    try{
        let response = await fetch(apiUrl);
        photosArray = await response.json();
        displayPhotos();
    }catch (error) {
        console.log(error);
    }
}

//on load
getPhotos();
