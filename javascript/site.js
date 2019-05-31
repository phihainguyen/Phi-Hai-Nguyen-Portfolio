$(".hamburger").click(function() {
  $(".hamburger").toggleClass(" is-active");
  $(".bg-text").fadeToggle(1000);
});

document.body.className = "fade";

document.addEventListener("DOMContentLoaded", function(e) {
  document.body.className = "";
});

let i = 0;
let j = 0;
let k = 0;
const txt = "Hello!";
const intro = "I am Phi Hai Nguyen"; /* The text */
const descript = "And I am a Web Developer";
const speed = 80; /* The speed/duration of the effect in milliseconds */
const speed3 = 300;
const speed2 = 60;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("greet").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed3);
  }
  if (i === txt.length - 1) {
    setTimeout(function() {
      writeIntro();
    }, 1300);
  }
}
function writeIntro() {
  if (j < intro.length) {
    document.getElementById("intro").innerHTML += intro.charAt(j);
    j++;
    setTimeout(writeIntro, speed);
  }
  if (j === intro.length - 1) {
    setTimeout(function() {
      writeDescr();
    }, 600);
  }
}
function writeDescr() {
  if (k < descript.length) {
    document.getElementById("descr").innerHTML += descript.charAt(k);
    k++;
    setTimeout(writeDescr, speed2);
  }
}
typeWriter();
