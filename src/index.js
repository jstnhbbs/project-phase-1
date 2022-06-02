// let selectRed = document.querySelector("#select-red");
// let selectWhite = document.querySelector("#select-white");
// let selectSparkling = document.querySelector("#select-sparkling");
// let selectRose = document.querySelector("#select-rose");
// let selectDessert = document.querySelector("#select-dessert");
// let selectPort = document.querySelector("#select-port");
// lists all wine types of a certain color
const redWineButton = document.querySelector("#red-wine-btn")
const whiteWineButton = document.getElementById("white-wine-btn")
const sparklingWineButton = document.getElementById("sparkling-wine-btn")
const roseWineButton = document.getElementById("rose-wine-btn")
const portWineButton = document.getElementById("port-wine-btn")

redWineButton.addEventListener("click", () => getWines("reds"));
whiteWineButton.addEventListener("click", () => getWines("whites"));
sparklingWineButton.addEventListener("click", () => getWines("sparkling"));
roseWineButton.addEventListener("click", () => getWines("rose"));
portWineButton.addEventListener("click", () => getWines("port"));

// render wines and fetch
function getWines(wineType) {
    document.querySelector("#scrolling-results-box").innerHTML = ""
    fetch(`https://api.sampleapis.com/wines/${wineType}`)
    .then(res => res.json())
    .then(data => data.forEach(renderOneWine))
}

//lists the wine (name and rating Only)
function renderWineName(wine) {
    const resultsSection = document.querySelector("#scrolling-results-box")
   const wineCard = document.createElement('div')
   const wineName = document.createElement('h5')
   const rating = document.createElement('h6')


   wineName.textContent = wine.wine
   rating.textContent = wine.rating.average

   wineCard.append(wineName,rating)
    resultsSection.appendChild(wineCard)

}

// renders one wine
function renderOneWine(wine) {
    //console.log("sex")
   const resultsSection = document.querySelector("#scrolling-results-box")
   const wineCard = document.createElement('div')
   const wineName = document.createElement('h5')
   const winery = document.createElement('h6')
   const location = document.createElement('h6')
   const rating = document.createElement('h6')
   const image = document.createElement('img')
   const favoriteButton = document.createElement("button")
   const deleteButton = document.createElement("button")
   
   image.className = "wine-image"
   wineCard.className = "wine-card"

    deleteButton.textContent = "Unlike"
    favoriteButton.textContent = "Like" 
    wineName.textContent = wine.wine
    wineName.setAttribute("class", "wineNameTrun")
    winery.textContent = wine.winery
    rating.textContent = wine.rating.average
    image.src = wine.image
    location.textContent = wine.location

    wineCard.append(wineName,image,winery,location,rating,favoriteButton,deleteButton)
    resultsSection.appendChild(wineCard)
    
    favoriteButton.addEventListener("click", () => {
        const favoriteList = document.querySelector("#favorites-list");

        favoriteList.append(wineCard)
    })

    deleteButton.addEventListener("click", () => {
        resultsSection.append(wineCard)
    })
    //console.log("poop")
}

// global variables needed for the location filter to work
let wineTypes = document.querySelector("#filterTypes");
let results;

// more variables needed (from the select/dropdown menu)
wineTypes.addEventListener('change', function() {
    console.log('You selected: ', this.value);
    results = this.value;
    return this.value;
  });

let locationValue;
let newArray = [];
let filterFormSubmit = document.querySelector("#filter-form");

// filter by location event listener (functionality)
filterFormSubmit.addEventListener("submit", (e)=> {
    e.preventDefault();
    console.log(e);
    console.log(e.target[0]);
    locationValue = e.target["search-location"].value;
    let wineType = results;

    if (results === "red") {
        console.log("hello");
        fetch(`https://api.sampleapis.com/wines/reds`)
        .then(res => res.json())
        .then(data => data.forEach(pushArray))
    } else if (results === "white") {
        fetch("https://api.sampleapis.com/wines/whites")
        .then(res => res.json())
        .then(data => data.forEach(pushArray))
    } else if (results === "dessert") {
        fetch("https://api.sampleapis.com/wines/dessert")
        .then(res => res.json())
        .then(data => data.forEach(pushArray))
    } else if (results === "port") {
        fetch("https://api.sampleapis.com/wines/port")
        .then(res => res.json())
        .then(data => data.forEach(pushArray))
    } else if (results === "sparkling") {
        fetch("https://api.sampleapis.com/wines/sparkling")
        .then(res => res.json())
        .then(data => data.forEach(pushArray))
    } else if (results === "rose") {
        fetch("https://api.sampleapis.com/wines/rose")
        .then(res => res.json())
        .then(data => data.forEach(pushArray))
    }
    console.log(newArray)
    // newArray.forEach(wine => renderOneWine(wine))
    //THIS IS WHERE I AM TRIPPING UP
    
});

// callback function used to add results to the new array
function pushArray(wine) {
    let location = wine.location;
    if (location.includes(`${locationValue}`)) {
        console.log("if dfdsf")
        newArray.push(wine)
        renderOneWine(wine);
    }
    
}

//randomizer buttons
let randomRed = document.querySelector("#randomize-red");
let randomWhite = document.querySelector("#randomize-white");
let randomSparkling = document.querySelector("#randomize-sparkling");
let randomDessert = document.querySelector("#randomize-dessert");
let randomPort = document.querySelector("#randomize-port");
let randomRose = document.querySelector("#randomize-rose");

//adds functionality to randomizer buttons
randomRed.onclick = function() {
    getWineNamesArray("reds");
}

randomWhite.onclick = function() {
    getWineNamesArray("whites");
}

randomSparkling.onclick = function() {
    getWineNamesArray("sparkling")
}

randomDessert.onclick = function() {
    getWineNamesArray("dessert")
}

randomPort.onclick = function() {
    getWineNamesArray("port")
}

randomRose.onclick = function() {
    getWineNamesArray("rose")
}

// main callback function to randomizer buttons
function getWineNamesArray(wineType) {
    fetch(`https://api.sampleapis.com/wines/${wineType}`)
    .then(response => response.json())
    .then(data => data[Math.floor(Math.random() * data.length)])
    .then(wine => renderOneWine(wine))
}

// clear results (out of search results and favorits)
let clearResults = document.querySelector("#clearResults")
clearResults.onclick = () => {
    let allResults = document.querySelectorAll(".wine-card")
    allResults.forEach(result => result.remove());
}