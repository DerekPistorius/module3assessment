let message2 = document.querySelector('form#m2')

message2.addEventListener('submit', message)

function message() {
	alert ("Derek will respond to your message as soon as possible")
}

let color = document.querySelector('button#color')

color.addEventListener('click', colorMessage)

function colorMessage () {
    alert ("Derek's favorite color is Blue")
}

let place = document.querySelector('button#place')

place.addEventListener('click', placeMessage)

function placeMessage () {
    alert ("Derek's favorite place is Las Vegas")
}

let ritual = document.querySelector('button#ritual')

ritual.addEventListener('click', ritualMessage)

function ritualMessage () {
    alert ("Derek's favorite ritual is working out!")
}

color.classList.add("button")
place.classList.add("button")
ritual.classList.add("button")

let name = document.querySelector("h1")
name.classList.add("name")

let title = document.querySelector('form')
title.classList.add("title")

let flex = document.querySelector('div')
flex.classList.add("flex")

