'use strict'

const body = document.querySelector("body")
const moonIcon = document.getElementById("moon-icon")
const menuIcon = document.getElementById("menu-icon")
const navBar = document.querySelector(".navbar")

menuIcon.addEventListener("click", function() {
    navBar.classList.toggle("active")
    this.classList.toggle("bx-x")
})

moonIcon.addEventListener("click", function() {
    body.classList.toggle("dark")
    this.classList.toggle("bx-sun")
})