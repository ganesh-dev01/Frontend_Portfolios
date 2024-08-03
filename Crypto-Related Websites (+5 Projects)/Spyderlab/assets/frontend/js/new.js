var osint_row = document.getElementsByClassName('OSINT-service-row')[0];
var crypto_tracking_row = document.getElementsByClassName('crypto-tracking-row')[0];
var dweb_intelligence_row = document.getElementsByClassName('dweb-intelligence-row')[0];

function show_1() {
    osint_row.style.display = "flex";
    crypto_tracking_row.style.display = "none";
    dweb_intelligence_row.style.display = "none";
}

function show_2() {
    crypto_tracking_row.style.display = "flex";
    osint_row.style.display = "none";
    dweb_intelligence_row.style.display = "none";
}

function show_3() {
    dweb_intelligence_row.style.display = "flex";
    osint_row.style.display = "none";
    crypto_tracking_row.style.display = "none";
}
