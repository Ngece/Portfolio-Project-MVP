const tabs = document.querySelectorAll('.tab');
const forms = document.querySelectorAll('.registration-form');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = tab.getAttribute('data-target');

    tabs.forEach((t) => {
      t.classList.remove('active');
    });
    forms.forEach((form) => {
      form.style.display = 'none';
    });

    tab.classList.add('active');
    document.getElementById(target).style.display = 'block';
  });
});