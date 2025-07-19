// Contact form fake submit
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('form-message').classList.remove('hidden');
  setTimeout(() => document.getElementById('form-message').classList.add('hidden'), 5000);
  this.reset();
});

// Mobile Menu Toggle
document.getElementById('mobile-menu-button').addEventListener('click', function() {
  const mobileMenu = document.getElementById('mobile-menu');
  mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when a link is clicked (optional, but good UX)
document.querySelectorAll('#mobile-menu a').forEach(item => {
  item.addEventListener('click', () => {
    document.getElementById('mobile-menu').classList.add('hidden');
  });
});

// Search Suggestion for "Tujuan" input
const destinations = [
  "Gili Trawangan", "Senggigi", "Kuta Lombok", "Mandalika", "Sembalun", "Gili Air", "Gili Meno", "Mataram", "Selong Belanak", "Desa Sade"
];

function showSuggestions(val) {
  const list = document.getElementById('suggestion-list');
  if (!val.trim()) {
    list.innerHTML = '';
    list.style.display = 'none';
    return;
  }
  let filtered = destinations.filter(dest => dest.toLowerCase().includes(val.toLowerCase()));
  if (filtered.length > 0) {
    list.innerHTML = filtered.map(d => `<li class="px-4 py-2 cursor-pointer hover:bg-blue-100" onclick="selectSuggestion('${d}')">${d}</li>`).join('');
    list.style.display = 'block';
  } else {
    list.innerHTML = '<li class="px-4 py-2 text-gray-400">Tidak ditemukan</li>';
    list.style.display = 'block';
  }
}

function selectSuggestion(txt) {
  document.getElementById('tujuan').value = txt;
  document.getElementById('suggestion-list').style.display = 'none';
}

// Hide suggestion on clicking outside
document.addEventListener('click', function(e) {
  if (!e.target.closest('.search-suggestion')) {
    document.getElementById('suggestion-list').style.display = 'none';
  }
});
