// document.querySelector('.container-items').onmouseover = function() {mouseover()};
// document.querySelector('.container-items').onmouseout = function() {mouseout()};
// function mouseover() {
//     document.querySelector('.container items').style.height = '350px';
//     document.querySelector('.container-items').style.width = '500px';
// }
// function mouseout() {
//     document.querySelector('.container items').style.height = '300px';
//     document.querySelector('.container-items').style.width = '400px';
// }





document.getElementById("picture1").onmouseover = function() {mouseOver()};
document.getElementById("picture1").onmouseout = function() {mouseOut()};
function mouseOver() {
    document.getElementById('picture1').style.height = '350px'
    document.getElementById('picture1').style.width = '450px'
}
function mouseOut() {
    document.getElementById('picture1').style.height = '300px'
    document.getElementById('picture1').style.width = '400px'
}

document.getElementById("picture2").onmouseover = function() {mouseOver2()};
document.getElementById("picture2").onmouseout = function() {mouseOut2()};
function mouseOver2() {
    document.getElementById('picture2').style.height = '350px'
    document.getElementById('picture2').style.width = '450px'
}
function mouseOut2() {
    document.getElementById('picture2').style.height = '300px'
    document.getElementById('picture2').style.width = '400px'
}

document.getElementById("picture3").onmouseover = function() {mouseOver3()};
document.getElementById("picture3").onmouseout = function() {mouseOut3()};
function mouseOver3() {
    document.getElementById('picture3').style.height = '350px'
    document.getElementById('picture3').style.width = '450px'
}
function mouseOut3() {
    document.getElementById('picture3').style.height = '300px'
    document.getElementById('picture3').style.width = '400px'
}

document.getElementById("picture4").onmouseover = function() {mouseOver4()};
document.getElementById("picture4").onmouseout = function() {mouseOut4()};
function mouseOver4() {
    document.getElementById('picture4').style.height = '350px'
    document.getElementById('picture4').style.width = '450px'
}
function mouseOut4() {
    document.getElementById('picture4').style.height = '300px'
    document.getElementById('picture4').style.width = '400px'
}
    document.getElementById('colortitle').onmouseover = function() {changeColor()}
    document.getElementById('colortitle').onmouseout = function() { outChangeColor()}
function changeColor() {
    document.getElementById('colortitle').style.color = 'white'
}
function outChangeColor() {
    document.getElementById('colortitle').style.color = 'black'
}

function myFunction() {
    document.getElementById("colortitle").innerHTML = 'Best Mountains in Switzerland to Visit';
    document.getElementById('text').innerHTML = 'This region is the second most populous of Switzerland’s major regions with a total population of about 1.7 million people. A substantial number of the people in this region are also immigrants to Switzerland, with approximately 30 percent of people claiming non-Swiss nationality.'
}

document.querySelector('#text').onmouseover = function() {bigSize()};
document.querySelector('#text').onmouseout = function() {smallSize()};
function bigSize() {
    document.querySelector('#text').style.color = 'white';
}
function smallSize() {
    document.querySelector('#text').style.color = 'black';
}

const click = document.querySelector('.button');
click.addEventListener('click', () => {
    document.querySelector('#text').innerHTML = 'The final major mountain range in Switzerland, the Jura Mountains are the only substantial range in the country that’s not part of the Alps.'
})

const listChange = document.querySelector('.ul-list');
listChange.addEventListener('mouseover', () => {
    document.querySelector('.ul-list').style.color = 'blue'
})
listChange.addEventListener('mouseout', () => {
    document.querySelector('.ul-list').style. color = 'black'
})

const information = document.querySelector('.information');
information.addEventListener('dblclick', () => {
    document.querySelector('#text').innerHTML = 'The glaciers of the Swiss Alps cover an area of 1,220 square kilometres (470 sq mi) — 3% of the Swiss territory, representing 44% of the total glaciated area in the Alps i.e. 2,800 square kilometres (1,100 sq mi).'
})

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


