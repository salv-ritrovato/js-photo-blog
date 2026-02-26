// Inizitalizing a variable where my API will go
const endpoint = 'https://lanciweb.github.io/demo/api/pictures/';

// DOM Manipulation on the card container
const cardContainer = document.getElementById('content')

// DOM Manipulation for events
const overlayShowHide = document.querySelector('.overlay');
const btnClose = document.querySelector('.closeBtn');
const imgOver = document.querySelector('.overlayimg')


// Empty variable where our cards will be generated
let photoCards = "";

fetch(endpoint)
    .then(res => res.json())
    .then(pictures => {
        console.log(pictures);
        // Cycling through the array of cards
        for (let i = 0; i < pictures.length; i++) {
            const cards = pictures[i];
            // Deconstructing our array
            const { id, title, date, url } = cards;
            // Generating dynamic HTML for our photos
            const dynamicHTML = `<div class="col-12 col-sm-6 col-md-6 col-lg-4 d-flex justify-content-center mb-3">
                                    <div class="card">
                                    <img src="./assets/img/pin.svg" alt="Pin" class="photopin">
                                    <img src="${url}" class="card-img" alt="${title}">
                                    <span class="caption">${date}</span>
                                        <div class="card-body">
                                        <p class="card-title"><strong>${title.toUpperCase()}</strong></p>
                                        </div>
                                    </div>
                                </div>
                                `
            // Adding our dynamic HTML to the empty variable previously inizialized
            photoCards += dynamicHTML;
            // The cards will be generated all at once inside the container
            cardContainer.innerHTML = photoCards;
        };
        // DOM Manipulation for card images
        const cardImg = document.querySelectorAll('.card-img');
        // Cycling through the images again and adding an event listener to each
        cardImg.forEach(image => {
            image.addEventListener('click', function () {
                overlayShowHide.style.display = 'flex';
                imgOver.src = image.src;
            });
        });
        // Adding event listener to button so it can close the pictures
        btnClose.addEventListener('click', function () {
            overlayShowHide.style.display = 'none';
        });
    });













/* ---------------------------------------------------------------------- */

/* // I'm currently working offline so I have no access to the API, working with an offline array
const photoList = [{
    "id": 1,
    "title": "Skate Park",
    "date": "01-07-2024",
    "url": "https://marcolanci.it/boolean/assets/pictures/1.png"
},
{
    "id": 2,
    "title": "Passeggiata",
    "date": "16-07-2024",
    "url": "https://marcolanci.it/boolean/assets/pictures/2.png"
},
{
    "id": 3,
    "title": "Alpi",
    "date": "01-07-2024",
    "url": "https://marcolanci.it/boolean/assets/pictures/3.png"
},
{
    "id": 4,
    "title": "Sagra",
    "date": "21-08-2024",
    "url": "https://marcolanci.it/boolean/assets/pictures/4.png"
},
{
    "id": 5,
    "title": "Watergun",
    "date": "23-08-2024",
    "url": "https://marcolanci.it/boolean/assets/pictures/5.png"
},
{
    "id": 6,
    "title": "Riviera",
    "date": "30-08-2024",
    "url": "https://marcolanci.it/boolean/assets/pictures/6.png"
},
]; */