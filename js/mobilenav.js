function menuFunction() {

    var bar = document.getElementById("topbar");
    var icon = document.getElementById("menu-button");
    var links = document.getElementById("mobile-nav-links");
    if (links.style.display === "block") {
        bar.style.height = "4em";
        links.style.display = "none";
        icon.setAttribute("src", "images/menu-white-18dp.svg");
    } else {
        bar.style.height = "100%";
        links.style.display = "block";
        icon.setAttribute("src", "images/close-white-18dp.svg");
    }
  }