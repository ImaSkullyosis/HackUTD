document.querySelectorAll('.child').forEach((child) => {
    child.addEventListener('click', () => {
      // Remove 'selected' class from all child elements
      document.querySelectorAll('.child').forEach((c) => c.classList.remove('selected'));
      // Add 'selected' class to the clicked child
      child.classList.add('selected');
    });
  });