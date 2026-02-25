/* const endpoint = 'https://lanciweb.github.io/demo/api/pictures/'

fetch(endpoint)
    .then(res => res.json())
    .then(pictures => {
        console.log(pictures);
    }) */

// I'm currently working offline so I have no access to the API, working with an offline array
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
];

// DOM Manipulation on the card container
const cardContainer = document.getElementById('content')

// Empty variable where our cards will be generated
let photoCards = "";

// Cycling through the array of cards
for (let i = 0; i < photoList.length; i++) {
    const cards = photoList[i];
    console.log(cards);
    const { id, title, date, url } = cards;
    const dynamicHTML = `<div class="col-12 col-sm-6 col-md-6 col-lg-4 d-flex justify-content-center mb-3">
                            <div class="card">
                                <img src="./assets/img/pin.svg" alt="Photo Pin" class="photopin">
                                <img src="./assets/img/placeholderpicture.png" class="card-img" alt="Photo 1">
                                    <div class="card-body text-center">
                                        <p class="card-title">Lorem ipsum dolor sit amet.</p>
                                    </div>
                            </div>
                        </div>
                        `
    photoCards += dynamicHTML;
};

// The cards will be generated all at once inside the container
cardContainer.innerHTML = photoCards;