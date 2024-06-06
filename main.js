// JavaScript for theme toggle
const themeToggle = document.getElementById('theme-toggle');
const darkIcon = document.getElementById('theme-toggle-dark-icon');
const lightIcon = document.getElementById('theme-toggle-light-icon');

// Change the icons inside the button based on previous settings
if (localStorage.getItem('theme') === 'dark') {
  document.documentElement.classList.add('dark');
  darkIcon.classList.remove('hidden');
} else {
  lightIcon.classList.remove('hidden');
}

themeToggle.addEventListener('click', () => {
  darkIcon.classList.toggle('hidden');
  lightIcon.classList.toggle('hidden');
  if (localStorage.getItem('theme')) {
    if (localStorage.getItem('theme') === 'light') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  } else {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  }
});