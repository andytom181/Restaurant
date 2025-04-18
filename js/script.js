// You can add interactivity here
document.addEventListener('DOMContentLoaded', () => {
    console.log('Website Loaded');
});
  
document.getElementById("foodMenu").onclick = function () {
  location.href = "../assets/food.html";
};

fetch("/navbar.html")
.then(response => response.text())
.then(data => {
  document.getElementById("navbar-placeholder").innerHTML = data;
});