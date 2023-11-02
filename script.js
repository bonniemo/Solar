//API URL
const url = "https://majazocom.github.io/Data/solaris.json";

// TARGET THE RIGHT PLANET INFO ELEMENT IN HTML
// This is here beacuse it is used in the fetchPlanets function. I want to have the queryselectors together with the functions that are using them. It makes the code easier to read and minimizes the need to scroll up and down. Also avoid having a huge chunck of queryselector at the top, making it difficult to read and know what part of the code it belongs to. 
const planetName = document.querySelector(".name");
const latinName = document.querySelector(".name__latin");
const about = document.querySelector(".about");
const circumf = document.querySelector(".circumf");
const distance = document.querySelector(".distance");
const tempDay = document.querySelector(".temp__day");
const tempNight = document.querySelector(".temp__night");
const moonUl = document.querySelector(".moons");

// FUNCTION FOR FETCHING AND DISTRIBUTING PLANET DATA
// This is at the top because it´s the function for fetching planet data and displaying it in the right place on the page, I call on this function in all my pickPlanet functions below to avoid having to write the same thing over and over again, so it makes sense to have fetchPlanets here.
function fetchPlanets(planets, myPlanet) {
    fetch(planets)
        .then((response) => response.json())
        .then((data) => {
            const planet = data.find((chosenPlanet) => chosenPlanet.name === myPlanet);

            planetName.innerText = planet.name.toUpperCase();
            latinName.innerText = planet.latinName.toUpperCase();
            about.innerText = planet.desc
            circumf.innerText = `${planet.circumference} km`
            distance.innerText = `${planet.distance} km`
            tempDay.innerText = planet.temp.day;
            tempNight.innerText = planet.temp.night;

            moonUl.innerText = "";
            const moons = planet.moons;
            if (moons.length === 0) {
                const li = document.createElement("li");
                li.innerText = "Inga månar";
                moonUl.appendChild(li);
            } else {
                moons.forEach(moon => {
                    const li = document.createElement("li");
                    li.innerText = moon;
                    moonUl.appendChild(li);
            });
        }            
        });
    };

// PICK WHAT PLANET TO DISPLAY WHERE
// I gathered all the pick planet funtions here to make everything easy to overlook. 
// The relevant queryselectors and eventlisteners are here for the resons I mentioned above. 
// This way everything (apart from the reusable fetchPlanets) that is related to user clicking on a planet and displaying modal with right info is here.  

// DISPLAY SUN 
function pickSun() {
    let myPlanet = "Solen";
    fetchPlanets(url, myPlanet);
};
let sun = document.querySelector(".sun");
sun.addEventListener("click", () => {
    pickSun();
    modal.classList.remove("hidden");
});

// DISPLAY MERCURY
function pickMercury() {
    let myPlanet = "Merkurius";
    fetchPlanets(url, myPlanet);
};
let mercury = document.querySelector(".mercury");
mercury.addEventListener("click", () => {
    pickMercury();
    modal.classList.remove("hidden");
});

// DISPLAY VENUS
function pickVenus() {
    let myPlanet = "Venus";
    fetchPlanets(url, myPlanet);
};
let venus = document.querySelector(".venus");
venus.addEventListener("click", () => {
    pickVenus();
    modal.classList.remove("hidden");
});

// DISPLAY EARTH
function pickEarth() {
    let myPlanet = "Jorden";
    fetchPlanets(url, myPlanet);
};
let earth = document.querySelector(".earth");
earth.addEventListener("click", () => {
    pickEarth();
    modal.classList.remove("hidden");
});

// DISPLAY MARS
function pickMars() {
    let myPlanet = "Mars";
    fetchPlanets(url, myPlanet);
};
let mars = document.querySelector(".mars");
mars.addEventListener("click", () => {
    pickMars();
    modal.classList.remove("hidden");
});

// DISPLAY JUPITER
function pickJupiter() {
    let myPlanet = "Jupiter";
    fetchPlanets(url, myPlanet);
};
let jupiter = document.querySelector(".jupiter");
jupiter.addEventListener("click", () => {
    pickJupiter();
    modal.classList.remove("hidden");
});

// DISPLAY SATURN
function pickSaturn() {
    let myPlanet = "Saturnus";
    fetchPlanets(url, myPlanet);
};
let saturn = document.querySelector(".saturn");
saturn.addEventListener("click", () => {
    pickSaturn();
    modal.classList.remove("hidden");
});

// DISPLAY URANUS
function pickUranus() {
    let myPlanet = "Uranus";
    fetchPlanets(url, myPlanet);
};
let uranus = document.querySelector(".uranus");
uranus.addEventListener("click", () => {
    pickUranus();
    modal.classList.remove("hidden");
});

// DISPLAY NEPTUNE
function pickNeptune() {
    let myPlanet = "Neptunus";
    fetchPlanets(url, myPlanet);
};
let neptune = document.querySelector(".neptune");
neptune.addEventListener("click", () => {
    pickNeptune();
    modal.classList.remove("hidden");
});

//CLOSE MODAL WITH CLICK ON X
// Finally I put this last with the same logic for the structure as above. 

const modal = document.querySelector(".modal");
const btnClose = document.querySelector(".fa-x")
btnClose.addEventListener("click", () => {
    modal.classList.add("hidden");
});