const cities = [
    {
        name: "Paris",
        country: "FRANCE",
        continent: "Europe",
        food: "Croissant, Macarons",
        place: "Eiffel Tower",
        language: "French",
        number: "01",
        bio: "Paris is one of the most beautiful cities in the world, famous for its art, architecture and romantic atmosphere.",
        image: "Images/paris.jpg"
    },

    {
        name: "Tokyo",
        country: "JAPAN",
        continent: "Asia",
        food: "Sushi, Ramen",
        place: "Tokyo Tower",
        language: "Japanese",
        number: "02",
        bio: "Tokyo is a modern city that combines advanced technology with traditional Japanese culture.",
        image: "Images/tokyo.jpg"
    },

    {
        name: "Rome",
        country: "ITALY",
        continent: "Europe",
        food: "Pizza, Pasta",
        place: "Colosseum",
        language: "Italian",
        number: "03",
        bio: "Rome is famous for its ancient history, beautiful architecture and delicious Italian food.",
        image: "Images/roma.jpg"
    },

    {
        name: "Cairo",
        country: "EGYPT",
        continent: "Africa",
        food: "Koshari, Foul",
        place: "Pyramids",
        language: "Arabic",
        number: "04",
        bio: "Cairo is a historic city known for its ancient Egyptian civilization and famous landmarks.",
        image: "Images/cairo.jpg"
    }
];


const cityName = document.getElementById("CityName");
const country = document.getElementById("Country");
const continent = document.getElementById("Continent");
const food = document.getElementById("Food");
const place = document.getElementById("Place");
const language = document.getElementById("Language");
const cityBio = document.getElementById("CityBio");
const cityImage = document.getElementById("CityImage");
const cityNumber = document.getElementById("CityNumber");
const destNum = document.getElementById("DestNum");



let currentIndex = 0;

// Display city 
function display(index) {

    const city = cities[index];

    cityName.innerHTML = city.name;
    country.innerHTML = city.country;
    continent.innerHTML = city.continent;
    food.innerHTML = city.food;
    place.innerHTML = city.place;
    language.innerHTML = city.language;
    cityBio.innerHTML = city.bio;
    cityNumber.innerHTML = `${city.number} / 04`;
    destNum.innerHTML = city.number;
    cityImage.src = city.image;
}


// Next destination
function nextDestination() {

    currentIndex++;

    if (currentIndex >= cities.length) {
        currentIndex = 0;
    }

    display(currentIndex);
}


// Previous destination
function previousDestination() {

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = cities.length - 1;
    }

    display(currentIndex);
}

display(currentIndex);

// Buttons
document.getElementById("NextButton")
    .addEventListener("click", nextDestination);

document.getElementById("PreButton")
    .addEventListener("click", previousDestination);

document.getElementById("ExploreMore")
    .addEventListener("click", function () {

        const city = cities[currentIndex];

        alert(
            "Discover " + city.name +
            " in " + city.country +
            "!\nFamous Place: " + city.place
        );
    });
