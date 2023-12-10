function submitRating() {
    const taste = document.getElementById("taste").value;
    const ambiance = document.getElementById("ambiance").value;
    const service = document.getElementById("service").value;

    // Display ratings
    document.getElementById("displayTaste").innerText = taste;
    document.getElementById("displayAmbiance").innerText = ambiance;
    document.getElementById("displayService").innerText = service;

    // Show the result section
    document.getElementById("result").classList.remove("hidden");
}