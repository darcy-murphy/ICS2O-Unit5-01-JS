// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register(
    "/ICS2O-Unit5-01-HTML-Slider-Example/sw.js",
    {
      scope: "/ICS2O-Unit5-01-JS/",
    }
  )
}

/**
 * This function displays the slider value.
 */
function myButtonClicked() {
  document.getElementById("slider-value").innerHTML =
    "<p>Value is: " + slider.value + "</p>"
}

const randomNumber = Math.floor(Math.random() * 6) + 1

/**
 * This function updates the slider value.
 */
function updateSliderValue(valueFromSlider) {
  document.getElementById("slider-value").innerHTML = valueFromSlider
  document.getElementById("answer").innerHTML =
    "The answer was, " + randomNumber + "!" + " You got it! Good job."

  // block of code to be executed if conditional is true
  if (valueFromSlider != randomNumber)
    document.getElementById("answer").innerHTML =
      "The answer was, " + randomNumber + " !" + "Nice guess, but try again."
}
