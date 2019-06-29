import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';


const minutes = 60 * 1000;
const hours = 60 * minutes;
const days = 24 * hours;
const mercuryYear = 88 * days;
const venusYear = 225 * days;
const earthYear = 365 * days;
const marsYear = 687 * days;
const jupiterYear = 4332 * days;
const saturnYear = 10759 * days;
const uranusYear = 30688 * days;
const neptuneYear = 60182 * days;

function lifeExpectancy(milliage,planetConstant)
{
  let lifeExp = 80 * earthYear;
  if (lifeExp < milliage) {
    $("#gal-out").append("<br>You should be dead!");
  } else {
    let timeLeft = lifeExp - milliage;
    $("#gal-out").append("<br>You have " + parseFloat(Math.round(timeLeft / planetConstant).toFixed(2)) + " years left to live!");
  }
}

function planetConst(milliage,planet) {
  if (planet === "Mercury") {
    $("#gal-out").html("You are " + parseFloat(Math.round(milliage / mercuryYear).toFixed(2)) + " years old on the planet " + planet);
    lifeExpectancy(milliage,mercuryYear);
  }
  if (planet === "Venus") {
    $("#gal-out").html("You are " + parseFloat(Math.round(milliage / venusYear).toFixed(2)) + " years old on the planet " + planet);
    lifeExpectancy(milliage,venusYear);
  }
  if (planet === "Earth") {
    $("#gal-out").html("You are " + parseFloat(Math.round(milliage / earthYear).toFixed(2)) + " years old on the planet " + planet);
    lifeExpectancy(milliage,earthYear);
  }
  if (planet === "Mars") {
    $("#gal-out").html("You are " + parseFloat(Math.round(milliage / marsYear).toFixed(2)) + " years old on the planet " + planet);
    lifeExpectancy(milliage,marsYear);
  }
  if (planet === "Jupiter") {
    $("#gal-out").html("You are " + parseFloat(Math.round(milliage / jupiterYear).toFixed(2)) + " years old on the planet " + planet);
    lifeExpectancy(milliage,jupiterYear);
  }
  if (planet === "Saturn") {
    $("#gal-out").html("You are " + parseFloat(Math.round(milliage / saturnYear).toFixed(2)) + " years old on the planet " + planet);
    lifeExpectancy(milliage,saturnYear);
  }
  if (planet === "Uranus") {
    $("#gal-out").html("You are " + parseFloat(Math.round(milliage / uranusYear).toFixed(2)) + " years old on the planet " + planet);
    lifeExpectancy(milliage,uranusYear);
  }
  if (planet === "Neptune") {
    $("#gal-out").html("You are " + parseFloat(Math.round(milliage / neptuneYear).toFixed(2)) + " years old on the planet " + planet);
    lifeExpectancy(milliage,neptuneYear);
  }
}


$(function(){


$("#gal-page form").submit(function() {
  event.preventDefault();
  var planet = $("input:radio[name=planet]:checked").val();
  let d = new Date(document.getElementById("born").value);
  let millidob = d.getTime();
  let millicurrent = Date.now();
  let milliage = millicurrent - millidob;
  planetConst(milliage,planet)
  });


});
