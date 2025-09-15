document.addEventListener("DOMContentLoaded", () => {
  // Instagram icon click - nav and footer
  const instaBtn = document.getElementById("insta-btn");
  if (instaBtn) {
    instaBtn.addEventListener("click", () => {
      window.open("https://www.instagram.com/yourusername/", "_blank");
    });
  }
  const instaBtnFooter = document.getElementById("insta-btn-footer");
  if (instaBtnFooter) {
    instaBtnFooter.addEventListener("click", () => {
      window.open("https://www.instagram.com/yourusername/", "_blank");
    });
  }

  // LinkedIn icon click - nav and footer
  const linkedinBtn = document.getElementById("linkedin-btn");
  if (linkedinBtn) {
    linkedinBtn.addEventListener("click", () => {
      window.open("https://www.linkedin.com/in/spandan-niroula/", "_blank");
    });
  }
  const linkedinBtnFooter = document.getElementById("linkedin-btn-footer");
  if (linkedinBtnFooter) {
    linkedinBtnFooter.addEventListener("click", () => {
      window.open("https://www.linkedin.com/in/spandan-niroula/", "_blank");
    });
  }

  // Email icon click - nav and footer
  const emailBtn = document.getElementById("email-btn");
  if (emailBtn) {
    emailBtn.addEventListener("click", () => {
      window.open("mailto:sn940@msstate.edu");
    });
  }
  const emailBtnFooter = document.getElementById("email-btn-footer");
  if (emailBtnFooter) {
    emailBtnFooter.addEventListener("click", () => {
      window.open("mailto:sn940@msstate.edu");
    });
  }

  // Skill progress bar animation on scroll
  const skillsSection = document.querySelector('.skills-grid');

  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom >= 0
    );
  }

  function animateSkillsOnScroll() {
    if (isInViewport(skillsSection)) {
      const skillItems = skillsSection.querySelectorAll('li');
      skillItems.forEach((item) => {
        if (!item.classList.contains('active')) {
          item.classList.add('active');
        }
      });
      window.removeEventListener('scroll', animateSkillsOnScroll);
    }
  }

  window.addEventListener('scroll', animateSkillsOnScroll);
  window.addEventListener('load', animateSkillsOnScroll);

  // Vanta.js initialization (TRUNK effect)
  VANTA.TRUNK({
    el: "#vanta-bg",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0xb31d4b,
    spacing: 10.00,
    chaos: 10.00
  });
});
