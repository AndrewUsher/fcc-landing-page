const header = document.querySelector('header')

window.addEventListener('scroll', function () {
  let scrollPosition = window.scrollY;
  if (scrollPosition > 200) {
    header.classList.add('header-bg');
  } else {
    header.classList.remove('header-bg');
  }
});

