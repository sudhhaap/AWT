fetch('http://localhost:3000/api/quotes')
  .then(response => response.json())
  .then(data => {
    const quotesList = document.getElementById('quotesList');
    data.forEach(quote => {
      const li = document.createElement('li');
      li.textContent = `${quote.text} (User ID: ${quote.userId})`;
      quotesList.appendChild(li);
    });
  })
  .catch(error => {
    console.error('Error fetching quotes:', error);
  });
  