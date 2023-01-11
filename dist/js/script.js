const hanburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');
const menuLinks = document.querySelectorAll('.menu__list li a');

hanburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('active');
  });
});

const dividerStyle = document.querySelectorAll('.sidepanel__divider');

document.addEventListener('scroll', () => {
    if (window.pageYOffset >= 400) {
        dividerStyle.forEach((el) => (el.style.backgroundColor = 'black'));
    } else {
        dividerStyle.forEach((el) => (el.style.backgroundColor = ''));
    }
});

const textStyle = document.querySelectorAll('.sidepanel__text span');

document.addEventListener('scroll', () => {
    if (window.pageYOffset >= 300) {
        textStyle.forEach((el) => (el.style.color = 'black'));
    } else {
        textStyle.forEach((el) => (el.style.color = ''));
    }
});

const linkStyle = document.querySelectorAll('.sidepanel__link svg path');

document.addEventListener('scroll', () => {
    if (window.pageYOffset >= 500) {
        linkStyle.forEach((el) => (el.style.fill = 'black'));
    } else {
        linkStyle.forEach((el) => (el.style.fill = ''));
    }
});

const counters = document.querySelectorAll('.skills__strip_percent'),
    lines = document.querySelectorAll('.skills__strip_scale span');

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});
