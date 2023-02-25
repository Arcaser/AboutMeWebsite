function toggleMenu() {
    var button = document.getElementById("menu-button");
    var menu = document.getElementById("menu");
  
    if (menu.style.display === "none") {
      menu.style.display = "block";
    } else {
      menu.style.display = "none";
    }
  }
  
  var button = document.getElementById("menu-button");
  button.addEventListener("click", toggleMenu