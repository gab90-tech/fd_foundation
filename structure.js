// structure.html (Organizational Structure Page)
// This script demonstrates how to create a simple carousel for the team members
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.team-carousel');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentIndex = 0;
  
    function showTeamMember(index) {
      const teamMembers = carousel.querySelectorAll('.team-member');
      teamMembers.forEach((member, i) => {
        member.style.display = i === index ? 'block' : 'none';
      });
    }
  
    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + teamMembers.length) % teamMembers.length;
      showTeamMember(currentIndex);
    });
  
    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % teamMembers.length;
      showTeamMember(currentIndex);
    });
  
    showTeamMember(currentIndex);
  });