
document.querySelectorAll('a[href^="#"]').forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    var targetId = this.getAttribute('href');
    var target = document.querySelector(targetId);

    if (!target) return;

    var nav = document.getElementById('main-nav');
    var navHeight = nav ? nav.offsetHeight : 0;
    var offset = 20;

    var scrollTo = target.getBoundingClientRect().top + window.scrollY - navHeight - offset;

    window.scrollTo({
      top: scrollTo,
      behavior: 'smooth'
    });
  });
});

// ACTIVE NAV HIGHLIGHT
var sections = document.querySelectorAll('section[id]');
var navLinks = document.querySelectorAll('nav ul a');

window.addEventListener('scroll', function () {
  var nav = document.getElementById('main-nav');
  var navHeight = nav ? nav.offsetHeight : 0;
  var scrollPos = window.scrollY + navHeight + 40;

  sections.forEach(function (section) {
    var top = section.offsetTop;
    var bottom = top + section.offsetHeight;

    if (scrollPos >= top && scrollPos < bottom) {
      navLinks.forEach(function (link) {
        link.classList.remove('active');
      });

      var matchingLink = document.querySelector('nav ul a[href="#' + section.id + '"]');
      if (matchingLink) {
        matchingLink.classList.add('active');
      }
    }
  });
});

