const mobileMenu = document.getElementById("mobile-menu");
const navMenu = document.querySelector(".nav-menu");
const dropdowns = document.querySelectorAll(".dropdown");

// Toggle menu mobile
mobileMenu.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  mobileMenu.classList.toggle("active");
});

// Toggle submenu pada dropdown
dropdowns.forEach((dropdown) => {
  dropdown.addEventListener("click", (event) => {
    event.stopPropagation(); // Mencegah event bubbling
    dropdown.classList.toggle("active");
    const submenu = dropdown.querySelector(".submenu");
    submenu.classList.toggle("active");
  });
});

// Menutup submenu saat mengklik di luar
document.addEventListener("click", () => {
  dropdowns.forEach((dropdown) => {
    dropdown.classList.remove("active");
    const submenu = dropdown.querySelector(".submenu");
    submenu.classList.remove("active");
  });
});

// tambahkan event listener pada menu "About Me"
document.querySelector('.nav-link[href="#about"]').addEventListener('click', function(event) {
  event.preventDefault();
  // ambil section yang ingin dituju
  var section = document.querySelector('#about');
  // scroll ke section yang ingin dituju dengan animasi
  section.scrollIntoView({ behavior: 'smooth' });
});

// tambahkan event listener pada menu "Home"
document.querySelector('.nav-link[href="#home"]').addEventListener('click', function(event) {
  event.preventDefault();
  // ambil section yang ingin dituju
  var section = document.querySelector('#home');
  // scroll ke section yang ingin dituju dengan animasi
  section.scrollIntoView({ behavior: 'smooth' });
});

// tambahkan event listener pada menu "Services"
document.querySelector('.nav-link[href="#services"]').addEventListener('click', function(event) {
  event.preventDefault();
  // ambil section yang ingin dituju
  var section = document.querySelector('#services');
  // scroll ke section yang ingin dituju dengan animasi
  section.scrollIntoView({ behavior: 'smooth' });
});

// tambahkan event listener pada menu "Contact"
document.querySelector('.nav-link[href="#contact"]').addEventListener('click', function(event) {
  event.preventDefault();
  // ambil section yang ingin dituju
  var section = document.querySelector('#contact');
  // scroll ke section yang ingin dituju dengan animasi
  section.scrollIntoView({ behavior: 'smooth' });
});

const downloadCVButton = document.getElementById('download-cv');

  downloadCVButton.addEventListener('click', () => {
    const link = document.createElement('a');
    link.href = 'documents/cv.pdf';
    link.download = 'documents/cv.pdf';
    link.click();
  });