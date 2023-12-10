let ratings = [];

function submitRating() {
    const name = document.getElementById("name").value;
    const taste = parseInt(document.getElementById("taste").value);
    const ambiance = parseInt(document.getElementById("ambiance").value);
    const service = parseInt(document.getElementById("service").value);

    // Calculate overall average rating
    const average = (taste + ambiance + service) / 3;

    // Store ratings
    ratings.push({ name, taste, ambiance, service, average });

    // Display ratings
    document.getElementById("displayName").innerText = name;
    document.getElementById("displayTaste").innerText = taste;
    document.getElementById("displayAmbiance").innerText = ambiance;
    document.getElementById("displayService").innerText = service;
    document.getElementById("displayAverage").innerText = average.toFixed(2);

    // Show the result section
    document.getElementById("result").classList.remove("hidden");
}

function clearAllRatings() {
    // Clear ratings array
    ratings = [];

    // Clear displayed ratings
    document.getElementById("result").classList.add("hidden");
    document.getElementById("name").value = "";
    document.getElementById("taste").value = "";
    document.getElementById("ambiance").value = "";
    document.getElementById("service").value = "";
}