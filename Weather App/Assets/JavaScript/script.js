document.addEventListener("DOMContentLoaded", function () {
  

  let search = document.getElementById("search");
  let location = document.getElementById("location");
  let w_condition = document.getElementById("w_condition");
  let cel = document.getElementById("cel");
  let fer = document.getElementById("fer");
  let cloud = document.getElementById("cloud");
  let hum = document.getElementById("hum");
  let search_btn = document.getElementById("search-btn");

  
  cel.textContent = "100"; 

  
  search_btn.addEventListener("click", () => {
    location.textContent = search.value.trim();
})






});
