function showSkills() {
  var whiteBackground = document.getElementById('white-background');
  var skillBoxAlert = document.getElementById('skillBoxAlert');

  whiteBackground.style.display = "block";
  skillBoxAlert.style.display = "block";

  var winWidth = window.innerWidth;
  var winHeight = window.innerHeight;

  skillBoxAlert.style.left = (winWidth/2) - 480/2 + "px";
  skillBoxAlert.style.top = "150px";
}

function Back() {
  var whiteBackground = document.getElementById('white-background');
  var skillBoxAlert = document.getElementById('skillBoxAlert');

  whiteBackground.style.display = "none";
  skillBoxAlert.style.display = "none";
}
