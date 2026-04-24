const sections = document.querySelectorAll('main section');
const navLinks = document.querySelectorAll('nav a');

const backBtn = document.createElement('button');
backBtn.id = 'back-btn';
backBtn.textContent = '← Back';
document.body.appendChild(backBtn);

document.body.classList.add('is-home');

navLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').replace('#', '');

    sections.forEach(function (section) {
      section.classList.remove('active');
    });

    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.classList.add('active');
    }

    document.body.classList.remove('is-home');
    document.body.classList.add('is-viewing');
    window.scrollTo(0, 0);
  });
});

backBtn.addEventListener('click', function () {
  sections.forEach(function (section) {
    section.classList.remove('active');
  });

  document.body.classList.remove('is-viewing');
  document.body.classList.add('is-home');
  window.scrollTo(0, 0);
});