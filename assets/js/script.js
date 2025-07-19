document.addEventListener('DOMContentLoaded', function() {
  // Mobile Menu Toggle
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
      mobileMenu.classList.toggle('show');
    });
  }

  // Contact Form Submission
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const formMessage = document.getElementById('form-message');
      if (formMessage) {
        formMessage.textContent = 'Pesan terkirim! Kami akan membalas dalam 1x24 jam.';
        formMessage.classList.add('show');
        
        // Reset form
        this.reset();
        
        // Hide message after 5 seconds
        setTimeout(() => {
          formMessage.classList.remove('show');
        }, 5000);
      }
    });
  }

  // Search Suggestions
  const destinations = [
    "Gili Trawangan", "Senggigi", "Kuta Lombok", "Mandalika", 
    "Sembalun", "Gili Air", "Gili Meno", "Mataram", 
    "Selong Belanak", "Desa Sade", "Pink Beach", "Air Terjun Sendang Gile",
    "Tiu Kelep", "Pantai Mawun", "Taman Narmada"
  ];

  const searchInput = document.getElementById('tujuan');
  const suggestionList = document.getElementById('suggestion-list');
  
  if (searchInput && suggestionList) {
    searchInput.addEventListener('input', function() {
      const inputValue = this.value.trim().toLowerCase();
      
      if (!inputValue) {
        suggestionList.innerHTML = '';
        suggestionList.style.display = 'none';
        return;
      }
      
      const filteredDestinations = destinations.filter(dest => 
        dest.toLowerCase().includes(inputValue)
      );
      
      if (filteredDestinations.length > 0) {
        suggestionList.innerHTML = filteredDestinations.map(dest => 
          `<li class="px-4 py-2 cursor-pointer hover:bg-blue-100" onclick="selectSuggestion('${dest}')">${dest}</li>`
        ).join('');
        suggestionList.style.display = 'block';
      } else {
        suggestionList.innerHTML = '<li class="px-4 py-2 text-gray-400">Tidak ditemukan</li>';
        suggestionList.style.display = 'block';
      }
    });
    
    // Hide suggestions when clicking outside
    document.addEventListener('click', function(e) {
      if (!e.target.closest('.search-suggestion')) {
        suggestionList.style.display = 'none';
      }
    });
  }
  
  // Smooth Scrolling for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        
        // Close mobile menu if open
        if (mobileMenu && mobileMenu.classList.contains('show')) {
          mobileMenu.classList.remove('show');
          mobileMenu.classList.add('hidden');
        }
      }
    });
  });
});

// Global function for suggestion selection
window.selectSuggestion = function(destination) {
  const searchInput = document.getElementById('tujuan');
  const suggestionList = document.getElementById('suggestion-list');
  
  if (searchInput) {
    searchInput.value = destination;
  }
  
  if (suggestionList) {
    suggestionList.style.display = 'none';
  }
};
