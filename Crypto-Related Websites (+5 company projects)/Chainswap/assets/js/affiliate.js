
document.addEventListener("DOMContentLoaded", function() {
    const submenus = document.querySelectorAll(".submenu");
    const upperContainers = document.querySelectorAll(".upper-1, .upper-2");
    const apiHome = document.getElementById("api-home");

    submenus.forEach(submenu => {
        submenu.previousElementSibling.addEventListener("click", function() {
            submenus.forEach(item => {
            
                if (item !== submenu) {
                    item.style.display = "none"; 
                }
            });
            submenu.style.display = (submenu.style.display === "block") ? "none" : "block";
            
            // Display API Home when clicking on API
            if (submenu.style.display === "block") {
                apiHome.style.display = "block";
                // Hide upper containers when clicking on API
                upperContainers.forEach(container => {
                    container.style.display = "none";
                });
            } else {
                apiHome.style.display = "none";
            }
        });
    });

    const submenuItems = document.querySelectorAll(".submenu-item");
    const apiContents = document.querySelectorAll(".api-content");

    submenuItems.forEach(submenuItem => {
        submenuItem.addEventListener("click", function(event) {
            const targetId = event.target.getAttribute("data-target");

            apiContents.forEach(content => {
                if (content.id === targetId) {
                    content.style.display = "block";
                } else {
                    content.style.display = "none";
                }
            });

            // Remove active class from all submenu items
            submenuItems.forEach(item => {
                item.classList.remove("active");
            });

            // Add active class to the clicked submenu item
            event.target.classList.add("active");

            // Show upper containers if Affiliate Program is clicked
            if (targetId === "affiliate-program") {
                upperContainers.forEach(container => {
                    container.style.display = "block";
                });
            } else {
                upperContainers.forEach(container => {
                    container.style.display = "none";
                });
            }
        });
    });
});

//turnover functions-----------------

function updateTurnoverValue() {
    const rangeInput = document.getElementById('turnoverRange');
    const h2Element = document.getElementById('turnoverValue');
    h2Element.textContent = rangeInput.value + ' BTC';
}

function updateFeeValue() {
    const rangeInput = document.getElementById('feeRange');
    let stepSize = 0.001; 
    if (rangeInput.value >= 0.049) {
        rangeInput.value = 0.05; 
        stepSize = 0.01; 
    }
    const feePercentage = rangeInput.value * 100; 
    const h2Element = document.getElementById('feeValue');
    h2Element.textContent = feePercentage.toFixed(1) + '%';
    rangeInput.step = stepSize; 
}



document.getElementById('turnoverRange').addEventListener('input', updateTurnoverValue);
document.getElementById('feeRange').addEventListener('input', updateFeeValue);

function updateEarnValue() {
    const turnoverValue = parseFloat(document.getElementById('turnoverRange').value);
    const feeValue = parseFloat(document.getElementById('feeRange').value);
    const earnValue = turnoverValue - (turnoverValue * feeValue / 100);
    document.getElementById('earnvalue').textContent = earnValue.toFixed(2); 
}


document.getElementById('turnoverRange').addEventListener('input', updateEarnValue);
document.getElementById('feeRange').addEventListener('input', updateEarnValue);


updateEarnValue();

//--------------------- scrolling side nav when reach to footer ---------------

window.addEventListener('scroll', function() {
    var sidenav = document.querySelector('.sidenav');
    var footer = document.querySelector('footer');
    var sidenavHeight = sidenav.offsetHeight;
    var footerOffset = footer.offsetTop;
  
    
    if (window.scrollY + window.innerHeight >= footerOffset) {
      
      sidenav.classList.add('bottom-fixed');
   
      sidenav.style.bottom = (window.scrollY + window.innerHeight - footerOffset) + 'vw';
    } else {
  
      sidenav.classList.remove('bottom-fixed');
      sidenav.style.bottom = 'auto';
    }
  });
