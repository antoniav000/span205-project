"use strict";
console.log("Welcome to My Website!");
document.addEventListener("DOMContentLoaded", () => {
    console.log("Mexican Art Showcase is ready!");
});
document.addEventListener("DOMContentLoaded", () => {
    // Get all the images on the page
    const images = document.querySelectorAll("img");
    // Loop through the images and add the fade-in class
    images.forEach((image) => {
        image.classList.add("fade-in");
    });
});
