document.addEventListener('DOMContentLoaded', () => {
  const menuContainer = document.getElementById('menu');

  if (menuContainer) {
    fetch('/api/menu')
      .then(response => response.json())
      .then(data => {
        data.forEach(item => {
          const menuItem = document.createElement('div');
          menuItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <p>Price: Full $${item.priceFull}, Half $${item.priceHalf}</p>
            <button onclick="order(${item.id}, 'full')">Order Full</button>
            <button onclick="order(${item.id}, 'half')">Order Half</button>
          `;
          menuContainer.appendChild(menuItem);
        });
      });
  }

  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(contactForm);
      const data = {};
      formData.forEach((value, key) => (data[key] = value));

      fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(response => response.json())
        .then(data => {
          alert('Message sent successfully!');
          contactForm.reset();
        })
        .catch(error => {
          alert('An error occurred. Please try again.');
        });
    });
  }
});

function order(itemId, portion) {
  fetch('/api/order', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ itemId, portion })
  })
    .then(response => response.json())
    .then(data => {
      alert('Order placed successfully!');
    });
}
