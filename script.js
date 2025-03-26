
function calculateValue() {
  const royalties = parseFloat(document.getElementById("royalties").value);
  const reviews = parseInt(document.getElementById("reviews").value);
  const rating = parseFloat(document.getElementById("rating").value);
  const genre = document.getElementById("genre").value.toLowerCase();
  const rank = parseInt(document.getElementById("rank").value);
  const age = parseInt(document.getElementById("age").value);

  let multiplier = 1.5;

  const highDemandGenres = ['romance', 'thriller', 'mystery', 'sci-fi', 'fantasy'];
  if (highDemandGenres.includes(genre)) multiplier += 0.3;
  else multiplier -= 0.1;

  if (reviews > 200) multiplier += 0.3;
  else if (reviews > 100) multiplier += 0.2;
  else if (reviews > 50) multiplier += 0.1;
  else if (reviews < 10) multiplier -= 0.2;

  if (rating >= 4.5) multiplier += 0.2;
  else if (rating >= 4.0) multiplier += 0.1;
  else if (rating < 3.5) multiplier -= 0.2;

  if (rank < 5000) multiplier += 0.3;
  else if (rank < 20000) multiplier += 0.1;
  else if (rank > 100000) multiplier -= 0.2;

  if (age >= 24) multiplier += 0.1;
  else if (age < 6) multiplier -= 0.2;

  const value = royalties * 12 * multiplier;
  document.getElementById("result").innerText = `Estimated Book Value: $${value.toFixed(2)} (Multiplier: ${multiplier.toFixed(2)})`;
}
