document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.fade-in-left, .fade-in-right, .fade-in-up');
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.3 });
  
    animatedElements.forEach(el => observer.observe(el));
  });

  document.addEventListener('DOMContentLoaded', () => {
    const skills = document.querySelectorAll('.skill');
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          const elements = Array.from(entry.target.querySelectorAll('.skill'));
          elements.forEach((el, index) => {
            setTimeout(() => {
              el.classList.add('visible');
            }, index * 150); // 150ms delay between each icon
          });
          observer.unobserve(entry.target); // optional: stop observing after animating
        }
      });
    }, { threshold: 0.2 });
  
    // Observe each skills-group container
    const skillContainers = document.querySelectorAll('.skills-group');
    skillContainers.forEach(container => observer.observe(container));
  });