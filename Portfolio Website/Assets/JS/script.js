let menu = document.getElementById("menubar");
let nav_items = document.getElementById("P_nav-items");
let close_icon = document.getElementById("close_icon");

let bar_lines = document.getElementsByClassName("line");

menu.addEventListener("click", function () {
    if (nav_items.classList.contains("show")) {
        nav_items.classList.remove("show");
        setTimeout(() => {
            nav_items.style.display = "none";
            for (let i = 0; i < bar_lines.length; i++) {
                bar_lines[i].style.display = "block";
            }
        }, 500);
        close_icon.style.display = "none";
    } else {
        nav_items.style.display = "block";
        setTimeout(() => nav_items.classList.add("show"), 0);
        close_icon.style.display = "block";
        for (let i = 0; i < bar_lines.length; i++) {
            bar_lines[i].style.display = "none";
        }
    }
});
