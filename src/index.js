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