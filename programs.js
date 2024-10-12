// programs.html (Programs and Initiatives Page)
// This script adds a smooth scrolling effect to the program accordion
document.addEventListener('DOMContentLoaded', function() {
    const programTitles = document.querySelectorAll('.program-title');
  
    programTitles.forEach((title) => {
      title.addEventListener('click', function() {
        this.classList.toggle('active');
        const content = this.nextElementSibling;
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + 'px';
          content.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  });