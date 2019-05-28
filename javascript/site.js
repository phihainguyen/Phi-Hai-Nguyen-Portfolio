$(".hamburger").click(function() {
  $(".hamburger").toggleClass(" is-active");
  $(".bg-text").fadeToggle(1000);
});

document.body.className = "fade";

document.addEventListener("DOMContentLoaded", function(e) {
  document.body.className = "";
});
