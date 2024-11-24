// script.js

// Set the date we're counting down to
var countDownDate = new Date("oct 24, 2024 23:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes, and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="countdown"
  document.getElementById("countdown").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);








const slides = document.querySelectorAll('.slides img')
let slidesIndex = 0
let IntervalId = null

document.addEventListener('DOMContentLoaded', initializeSlider)

function initializeSlider () {
  if ( slides.length > 0 ) {
    slides[slidesIndex].classList.add('displaySlide')
    IntervalId = setInterval(nextSlide, 5000)
  }
}

function showSlide( index ) {
  if ( index >= slides.length ) {
    slidesIndex = 0
  } else if ( index < 0 ) {
    slidesIndex = slides.length - 1
  }

  slides.forEach(slide => {
    slide.classList.remove('displaySlide')
  })

  slides[slidesIndex].classList.add('displaySlide')
}

function prevSlide () {
  clearInterval(IntervalId)
  slidesIndex = slidesIndex - 1
  showSlide(slidesIndex)
}


function nextSlide () {
  slidesIndex++
  showSlide(slidesIndex)
}

const nextButton = document.querySelector('.slider .next')
const prevButton = document.querySelector('.slider .prev')

nextButton.addEventListener('click', nextSlide)
prevButton.addEventListener('click', prevSlide)








const container = document.querySelector('.container-video')
const video = document.getElementById('lala')
const playButton = document.getElementById('play')
const closeButton = document.getElementById('closeButton')

playButton.addEventListener('click', function(){
  video.removeAttribute('muted')
  video.currentTime = 0
  video.play()
  container.classList.remove('display-none')
  video.muted = false
})

closeButton.addEventListener("click", function () {
  container.classList.add("display-none");
  video.pause(); // Berhenti memutar video
  video.muted = true; // Muted video
});
