var navbar = document.querySelector('#nav')

window.onscroll = function() {

  if (window.pageYOffset > 200) {
    navbar.classList.add('scrolled')
  } else {
    navbar.classList.remove('scrolled')
  }
}