const reviewForm = document.getElementById('review-form');
const reviewsContainer = document.getElementById('reviews');

reviewForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const shopName = document.getElementById('shop-name').value;
  const tasteRating = document.querySelector('input[name="taste_rating"]:checked').value;
  const serviceRating = document.querySelector('input[name="service_rating"]:checked').value;
  const ambienceRating = document.querySelector('input[name="ambience_rating"]:checked').value;

  // Save the review data (e.g., using localStorage or a backend database)

  createReviewBlock(shopName, tasteRating, serviceRating, ambienceRating);
  reviewForm.reset();
});

function createReviewBlock(shopName, tasteRating, serviceRating, ambienceRating) {
  const reviewBlock = document.createElement('div');
  reviewBlock.classList.add('review-block');

  // Add content to the review block
  reviewBlock.innerHTML = `
    <h2>${shopName}</h2>
    <p>Taste Rating: ${tasteRating}</p>
    <p>Service Rating: ${serviceRating}</p>
    <p>Ambience Rating: ${ambienceRating}</p>
    <button class="clear-button">Clear</button>
  `;

  reviewBlock.querySelector('.clear-button').addEventListener('click', function() {
    reviewBlock.parentNode.removeChild(reviewBlock);
  });

  reviewsContainer.appendChild(reviewBlock);
}