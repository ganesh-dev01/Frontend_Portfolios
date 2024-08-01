document.addEventListener("DOMContentLoaded", function () {

  let display_box = document.getElementById("display_report");

  let no_loaction = document.getElementById("no_loaction");

  let search = document.getElementById("search");
  let locationE = document.getElementById("location");
  let w_c = document.getElementById("w_condition");
  let cel = document.getElementById("cel");
  let fer = document.getElementById("fer");
  let cloud = document.getElementById("cloud");
  let hum = document.getElementById("hum");
  let c_i = document.getElementById("condition_icon")
  let search_btn = document.getElementById("search-btn");



  search_btn.addEventListener("click", () => {
    let s = search.value.trim();



    async function fetchapi() {
      let url = `https://api.weatherapi.com/v1/current.json?key=d78252b62ed04017810135624243007&q=${s}`;

      try {
        let response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        let data = await response.json();
        return data;
      } catch (error) {
        console.error('Error fetching data:', error);
        display_box.style.display = "none";
        no_loaction.style.display = "block"
        return null;
      }
    }

    fetchapi().then((data) => {

      if (data) {
        display_box.style.display = "block";
        no_loaction.style.display = "none";
        locationE.textContent = `${data.location.name} , ${data.location.region} , ${data.location.country}`;
        cel.textContent = `${data.current.temp_c}`;
        fer.textContent = `${data.current.temp_f}`;
        w_c.textContent = `${data.current.condition.text}`;
        cloud.textContent = `${data.current.cloud}`;
        hum.textContent = `${data.current.humidity}`;
        c_i.src = `${data.current.condition.icon}`;
      }
    });

  });

});
