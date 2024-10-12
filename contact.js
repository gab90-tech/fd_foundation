// contact.html (Contact Us Page)
// This script handles the form submission and provides basic validation
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
  
    form.addEventListener('submit', function(e) {
      e.preventDefault();
  
      if (nameInput.value.trim() === '') {
        alert('Please enter your name.');
        return;
      }
  
      if (emailInput.value.trim() === '' || !isValidEmail(emailInput.value)) {
        alert('Please enter a valid email address.');
        return;
      }
  
      if (messageInput.value.trim() === '') {
        alert('Please enter a message.');
        return;
      }
  
      // Here, you can add code to handle the form submission, such as sending the data to a server or displaying a success message
  
      alert('Thank you for your message! We will get back to you shortly.');
      form.reset();
    });
  
    function isValidEmail(email) {
      // Simple email validation regex
      return /\S+@\S+\.\S+/.test(email);
    }
  });