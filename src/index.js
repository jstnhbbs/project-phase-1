// fetch all data
function getRedWines() {
    fetch("https://api.sampleapis.com/wines/reds")
    .then(res => res.json())
    .then(data => console.log(data))
}

getRedWines();

function getWhiteWines() {
    fetch("https://api.sampleapis.com/wines/whites")
    .then(res => res.json())
    .then(data => console.log(data))
}

getWhiteWines();

function getSparklingWines() {
    fetch("https://api.sampleapis.com/wines/sparkling")
    .then(res => res.json())
    .then(data => console.log(data))
}

getSparklingWines();

function getRoseWines() {
    fetch("https://api.sampleapis.com/wines/rose")
    .then(res => res.json())
    .then(data => console.log(data))
}

getRoseWines();

function getDessertWines() {
    fetch("https://api.sampleapis.com/wines/dessert")
    .then(res => res.json())
    .then(data => console.log(data))
}

getDessertWines();

function getPortWines() {
    fetch("https://api.sampleapis.com/wines/port")
    .then(res => res.json())
    .then(data => console.log(data))
}

getPortWines();

// test wine rendering
function getOnePort() {
    fetch("https://api.sampleapis.com/wines/port/1")
    .then(res => res.json())
    .then(wine => renderOneWine(wine))
}

getOnePort()

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

    deleteButton.textContent = " Unlike "
    favoriteButton.textContent = "Like" 
    wineName.textContent = wine.wine
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