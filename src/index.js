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

function getWines(wineType) {
    console.log(wineType, "here")
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
}

// filter by location
let selectRed = document.querySelector("#select-red");
let selectWhite = document.querySelector("#select-white");
let selectSparkling = document.querySelector("#select-sparkling");
let selectRose = document.querySelector("#select-rose");
let selectDessert = document.querySelector("#select-dessert");
let selectPort = document.querySelector("#select-port");

//randomizer button
let randomButton =