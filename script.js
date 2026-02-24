(function() {
    // --- mobile menu toggle
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    if (menuToggle && navLinks) {
      menuToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        navLinks.classList.toggle('mobile-open');
      });

      // close if click outside (optional but friendly)
      document.addEventListener('click', function(event) {
        if (!navLinks.contains(event.target) && !menuToggle.contains(event.target)) {
          navLinks.classList.remove('mobile-open');
        }
      });
    }

    // --- dynamic year in footer (optional but nice)
    const yearSpan = document.querySelector('footer p');
    if (yearSpan) {
      const currentYear = new Date().getFullYear();
      yearSpan.innerHTML = yearSpan.innerHTML.replace('2025', currentYear);
    }

    // --- tiny project hover effect via data attribute? not needed, but we add a simple greeting to console
    console.log('🌟 Alex Rivera — front‑end developer portfolio. Thanks for peeking!');

    // optional: interactive highlight for skill chips (just for demo)
    const chips = document.querySelectorAll('.skill-chip');
    chips.forEach(chip => {
      chip.addEventListener('click', () => {
        // subtle micro-interaction: just a console log to show js interactivity
        console.log(`skill clicked: ${chip.innerText}`);
      });
    });

    // optional: project cards demo alert (just to illustrate js)
    const projectLinks = document.querySelectorAll('.project-link');
    projectLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();  // for demo only — prevents navigation
        alert('✨ project preview — fully responsive & interactive (demo version)');
      });
    });

  })();
