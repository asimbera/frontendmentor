const header = document.getElementById('header');
const menu = document.getElementById('hamburger');
const menuOpen = document.getElementById('hamburger-open');
const menuClose = document.getElementById('hamburger-close');
const menuContent = document.getElementById('menu-content');
const hero = document.getElementById('hero');

document.onscroll = function () {
  if (document.scrollingElement.scrollTop <= 50) {
    if (header.classList.contains('elevated'))
      header.classList.remove('elevated');
  } else {
    if (!header.classList.contains('elevated'))
      if (!header.classList.contains('open')) header.classList.add('elevated');
  }
};

menu.onclick = function () {
  const classes = header.classList;
  if (classes.contains('open')) {
    menuClose.style.display = 'none';
    menuOpen.style.display = 'block';
    menuContent.style.display = 'none';
    classes.remove('open');
  } else {
    menuOpen.style.display = 'none';
    menuClose.style.display = 'block';
    menuContent.style.display = 'flex';
    classes.add('open');
  }
};
