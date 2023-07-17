import { countries } from '../data/countriesVariables.js';
import { countriesData } from '../data/countriesData.js';



// MAP SETUP

var map = L.map('map', {
	doubleClickZoom: false, 
	closePopupOnClick: false, 
	dragging: false, 
	zoomSnap: false, 
	zoomDelta: false, 
	trackResize: false,
	touchZoom: false,
	scrollWheelZoom: false,
	zoomControl: false
}).setView([57.4712, 9.6236], 4);

const mapBox = L.tileLayer('https://api.mapbox.com/styles/v1/stefanolami/clgamhzzu005t01la5ou5caqh/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic3RlZmFub2xhbWkiLCJhIjoiY2xnYW1mOXllMGR3czNla3BsZmRoN25vNyJ9.407zoRgEVeZMdgGL-uu3Zg', {
	attribution: `© <a href="https://www.mapbox.com/about/maps/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>`
}); 

mapBox.addTo(map)

const geoStyle = {
    weight: 0.4,
    color: "white",
    fillColor: "#399AC299",
    fillOpacity: 1
}

const geoStyleHovered = {
    weight: 0.4,
    color: "white",
    fillColor: "#399AC2",
    fillOpacity: 1
}

const geoStyleSelected = {
    weight: 0.4,
    color: "white",
    fillColor: "#26476C",
    fillOpacity: 1
}

const countriesGroup = L.featureGroup([
    L.geoJson(countries.austria, {style: geoStyle}),
    L.geoJson(countries.belgium, {style: geoStyle}),
    L.geoJson(countries.denmark, {style: geoStyle}),
    L.geoJson(countries.france, {style: geoStyle}),
    L.geoJson(countries.germany, {style: geoStyle}),
    L.geoJson(countries.ireland, {style: geoStyle}),
    L.geoJson(countries.italy, {style: geoStyle}),
    L.geoJson(countries.luxembourg, {style: geoStyle}),
    L.geoJson(countries.netherlands, {style: geoStyle}),
    L.geoJson(countries.norway, {style: geoStyle}),
    L.geoJson(countries.poland, {style: geoStyle}),
    L.geoJson(countries.portugal, {style: geoStyle}),
    L.geoJson(countries.romania, {style: geoStyle}),
    L.geoJson(countries.spain, {style: geoStyle}),
    L.geoJson(countries.sweden, {style: geoStyle}),
    L.geoJson(countries.uk, {style: geoStyle})
])

const countriesGroupHovered = [
    L.geoJson(countries.austria, {style: geoStyleHovered}),
    L.geoJson(countries.belgium, {style: geoStyleHovered}),
    L.geoJson(countries.denmark, {style: geoStyleHovered}),
    L.geoJson(countries.france, {style: geoStyleHovered}),
    L.geoJson(countries.germany, {style: geoStyleHovered}),
    L.geoJson(countries.ireland, {style: geoStyleHovered}),
    L.geoJson(countries.italy, {style: geoStyleHovered}),
    L.geoJson(countries.luxembourg, {style: geoStyleHovered}),
    L.geoJson(countries.netherlands, {style: geoStyleHovered}),
    L.geoJson(countries.norway, {style: geoStyleHovered}),
    L.geoJson(countries.poland, {style: geoStyleHovered}),
    L.geoJson(countries.portugal, {style: geoStyleHovered}),
    L.geoJson(countries.romania, {style: geoStyleHovered}),
    L.geoJson(countries.spain, {style: geoStyleHovered}),
    L.geoJson(countries.sweden, {style: geoStyleHovered}),
    L.geoJson(countries.uk, {style: geoStyleHovered})
]

const countriesGroupSelected = [
    L.geoJson(countries.austria, {style: geoStyleSelected}),
    L.geoJson(countries.belgium, {style: geoStyleSelected}),
    L.geoJson(countries.denmark, {style: geoStyleSelected}),
    L.geoJson(countries.france, {style: geoStyleSelected}),
    L.geoJson(countries.germany, {style: geoStyleSelected}),
    L.geoJson(countries.ireland, {style: geoStyleSelected}),
    L.geoJson(countries.italy, {style: geoStyleSelected}),
    L.geoJson(countries.luxembourg, {style: geoStyleSelected}),
    L.geoJson(countries.netherlands, {style: geoStyleSelected}),
    L.geoJson(countries.norway, {style: geoStyleSelected}),
    L.geoJson(countries.poland, {style: geoStyleSelected}),
    L.geoJson(countries.portugal, {style: geoStyleSelected}),
    L.geoJson(countries.romania, {style: geoStyleSelected}),
    L.geoJson(countries.spain, {style: geoStyleSelected}),
    L.geoJson(countries.sweden, {style: geoStyleSelected}),
    L.geoJson(countries.uk, {style: geoStyleSelected})
]

countriesGroup.addTo(map)



// EVENTS



const mapBtns = Array.from(document.querySelectorAll('.map-btn'));
const mapCard = document.querySelector('#map-card');
const mapCardTitle = document.querySelector('#map-card-title');
const mapCardEducation = document.querySelector('#map-card-education');
const mapCardEase = document.querySelector('#map-card-ease');
const mapCardIndividuals = document.querySelector('#map-card-individuals');
const mapCardCohesion = document.querySelector('#map-card-cohesion');
const mapCardRrf = document.querySelector('#map-card-rrf');
const mapCardClose = document.querySelector('#map-card-close');
const mapBrusselsDiv = document.querySelector('#map-brussels-div');
const mapBrusselsIcon = document.querySelector('#map-brussels-icon');
const mapBrusselsIconHovered = document.querySelector('#map-brussels-icon-hovered');
const mapBrusselsIconSelected = document.querySelector('#map-brussels-icon-selected');



const countriesDataArr = Object.values(countriesData);

let selected;
let hovered;


function fillCard(index) {
    mapCardTitle.textContent = countriesDataArr[index].name;
    mapCardEducation.textContent = countriesDataArr[index].education;
    mapCardEase.textContent = countriesDataArr[index].ease;
    mapCardIndividuals.textContent = countriesDataArr[index].individuals;
    mapCardCohesion.textContent = countriesDataArr[index].cohesion;
    mapCardRrf.textContent = countriesDataArr[index].rrf;
}

function handleSelectedLayer(index) {
    if (selected != undefined && selected != 16) {
        mapBtns[selected].classList.replace('map-btn-selected', 'map-btn')
        map.removeLayer(countriesGroupSelected[selected])
    } else if (selected == 16) {
        mapBrusselsIconSelected.classList.add('hidden');
        mapBrusselsIcon.classList.remove('hidden')       
    }
    mapBtns[index].classList.replace('map-btn', 'map-btn-selected')
    map.addLayer(countriesGroupSelected[index])
    mapCard.classList.remove('hidden')
}

function handleBrussels(event) {
    if (event == 'click') {
        if (selected != undefined && selected != 16) {
            mapBtns[selected].classList.replace('map-btn-selected', 'map-btn')
            map.removeLayer(countriesGroupSelected[selected])
        }
        mapCard.classList.remove('hidden')
        fillCard(16)
        mapBrusselsIcon.classList.add('hidden')
        mapBrusselsIconSelected.classList.remove('hidden');
        selected = 16;
    } else if (event == 'mouseover') {
        mapBrusselsIcon.style.fill = '#399AC2'
    } else if (event == 'mouseout') {
        mapBrusselsIcon.style.fill = '#399AC299'
    }
}


// MAP CLICK LISTENER
mapBtns.forEach((btn, index) => btn.addEventListener('click', () => {
    handleSelectedLayer(index);
    fillCard(index);
    selected = index;
}))

// MAP MOUSOVER LISTENER
mapBtns.forEach((btn, index) => btn.addEventListener('mouseover', () => {
    if (hovered !== undefined) {
        map.removeLayer(countriesGroupHovered[hovered])
    }
    hovered = index;
    if (hovered !== selected) {
        map.addLayer(countriesGroupHovered[hovered])
    }
}))

// MAP MOUSEOUT LISTENER
mapBtns.forEach((btn, index) => btn.addEventListener('mouseout', () => {
    if (hovered !== undefined) {
        map.removeLayer(countriesGroupHovered[hovered])
    }
}))  

// CLOSE MAP CARD
mapCardClose.addEventListener('click', () => {
    mapCard.classList.add('hidden')
})

// BRUSSELS ADMINISTRATED LISTENERS
mapBrusselsDiv.addEventListener('click', () => {
    handleBrussels('click')
})

mapBrusselsDiv.addEventListener('mouseover', () => {
    handleBrussels('mouseover')
})

mapBrusselsDiv.addEventListener('mouseout', () => {
    handleBrussels('mouseout')
})