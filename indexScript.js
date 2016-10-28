function showSkills() {
  var whiteBackground = document.getElementById('white-background');
  var skillBoxAlert = document.getElementById('skillBoxAlert');

  whiteBackground.style.display = "block";
  skillBoxAlert.style.display = "block";

  var winWidith = window.innerWidth;
  var winHeight = window.innerHeight;

  skillBoxAlert.style.left = (width/2);
  skillBoxAlert.style.top = "150px";
}

function Back() {
  var whiteBackground = document.getElementById('white-background');
  var skillBoxAlert = document.getElementById('skillBoxAlert');

  whiteBackground.style.display = "none";
  skillBoxAlert.style.display = "none";
}
