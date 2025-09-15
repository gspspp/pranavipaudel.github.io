document.addEventListener("DOMContentLoaded", () => {
  // --- Social Icons (nav & footer) ---
  const socialLinks = [
    { id: "insta-btn", url: "https://www.instagram.com/pranavipaudel/" },
    { id: "insta-btn-footer", url: "https://www.instagram.com/pranavipaudel/" },
    { id: "linkedin-btn", url: "https://www.linkedin.com/in/pranavi-paudel/" },
    { id: "linkedin-btn-footer", url: "https://www.linkedin.com/in/pranavi-paudel/" },
    { id: "email-btn", url: "mailto:pp892@msstate.edu" },
    { id: "email-btn-footer", url: "mailto:pp892@msstate.edu" }
  ];

  socialLinks.forEach(link => {
    const el = document.getElementById(link.id);
    if (el) {
      el.addEventListener("click", () => {
        window.open(link.url, "_blank");
      });
    }
  });

  // --- Skill progress bar animation on scroll ---
  const skillsSection = document.querySelector('.skills-grid');

  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= 0;
  }

  function animateSkillsOnScroll() {
    if (skillsSection && isInViewport(skillsSection)) {
      skillsSection.querySelectorAll('li').forEach(item => {
        if (!item.classList.contains('active')) {
          item.classList.add('active');
        }
      });
      window.removeEventListener('scroll', animateSkillsOnScroll);
    }
  }

  window.addEventListener('scroll', animateSkillsOnScroll);
  window.addEventListener('load', animateSkillsOnScroll);

  // --- Vanta.js initialization (TRUNK effect) ---
  VANTA.DOTS({
  el: "#vanta-bg",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0xa94061,
  color2: 0xab3d78,
  backgroundColor: 0x191621,
  size: 4.80,
  spacing: 48.00,
  showLines: false
})

  // --- Hide nav link for current page ---
  const currentPage = window.location.pathname.split("/").pop(); // e.g., 'index.html' or 'Pranavi.html'
  const homeLink = document.querySelector('.nav a[href="index.html"]');
  const profileLink = document.querySelector('.nav a[href="profile.html"], .nav a[href="Pranavi.html"]');

  if (currentPage === "index.html" && homeLink) {
    homeLink.style.display = "none";
  } else if ((currentPage === "profile.html" || currentPage === "Pranavi.html") && profileLink) {
    profileLink.style.display = "none";
  }
});
