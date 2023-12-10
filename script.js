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
    displayRatings();

    // Clear form fields
    document.getElementById("name").value = "";
    document.getElementById("taste").value = "";
    document.getElementById("ambiance").value = "";
    document.getElementById("service").value = "";
}

function displayRatings() {
    const ratingsContainer = document.getElementById("ratingsContainer");

    // Clear container
    ratingsContainer.innerHTML = '';

    // Display each set of ratings
    ratings.forEach((rating, index) => {
        const ratingBlock = document.createElement("div");
        ratingBlock.classList.add("rating-block");

        ratingBlock.innerHTML = `
            <h2>${rating.name}</h2>
            <p><strong>Taste:</strong> ${rating.taste}</p>
            <p><strong>Ambiance:</strong> ${rating.ambiance}</p>
            <p><strong>Service:</strong> ${rating.service}</p>
            <p><strong>Overall Average:</strong> ${rating.average.toFixed(2)}</p>
        `;

        ratingsContainer.appendChild(ratingBlock);
    });
}

function clearAllRatings() {
    // Clear ratings array
    ratings = [];

    // Clear displayed ratings
    displayRatings();
}