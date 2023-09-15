// script.js
const quoteElement = document.getElementById('quote');
const newQuoteButton = document.getElementById('newQuoteButton');

async function fetchQuote() {
  const response = await fetch('https://api.quotable.io/random');
  const data = await response.json();
  return data;
}

async function updateQuote() {
  const quoteData = await fetchQuote();
  quoteElement.textContent = quoteData.content;
}

newQuoteButton.addEventListener('click', updateQuote);

// Initial quote load
updateQuote();