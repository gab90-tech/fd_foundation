// join-support.js

// Add smooth scrolling to the "View Job Openings" and "Donate Now" buttons
document.addEventListener('DOMContentLoaded', function() {
    const joinButton = document.querySelector('.join-us .btn');
    const supportButton = document.querySelector('.support-us .btn');
  
    joinButton.addEventListener('click', function(e) {
      e.preventDefault();
      const registrationPage = document.querySelector('a[href="registration.html"]');
      registrationPage.scrollIntoView({ behavior: 'smooth' });
    });
  
    supportButton.addEventListener('click', function(e) {
      e.preventDefault();
      const donationPage = document.querySelector('a[href="donation.html"]');
      donationPage.scrollIntoView({ behavior: 'smooth' });
    });
  });