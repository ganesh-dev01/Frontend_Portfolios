let menu = document.getElementById("menubar");
let nav_items = document.getElementById("P_nav-items");
let close_icon = document.getElementById("close_icon");
let bar_lines = document.querySelectorAll(".line");
let menu_item = document.querySelectorAll(".menu-item");

menu.addEventListener("click", function () {
    if (nav_items.style.display === "none" || nav_items.style.display === "") {
        nav_items.style.display = "block";
        bar_lines.forEach((line) => line.style.display = "none");
        close_icon.style.display = "block";
    } else {
        nav_items.style.display = "none";
        bar_lines.forEach(line => line.style.display = "block");
        close_icon.style.display = "none";
        window.location.reload();
    }
});
