const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/

const section = document.createElement("section")
section.id = "planets"
document.body.appendChild(section)
planets.forEach(planet => {
    section.textContent += `${planet} `
})
const planetEl = document.getElementById("planets")

/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/
const section2 = document.createElement("section")
section.id = "planets2"
document.body.appendChild(section2)
const newArray = planets.map(planet => {
    let upperCasePlanet = planet.charAt(0).toUpperCase() + planet.slice(1)
    return `${upperCasePlanet}`
})

newArray.forEach(planet => {
    section2.textContent += " " + planet
})



/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/

const section3 = document.createElement("section")
section.id = "planets3"
document.body.appendChild(section3)
const newArray2 = planets.filter(planet => planet.includes("e"))
    
newArray2.forEach(planet => {
    section3.textContent += " " + planet
})