const menuButton = document.querySelector('.menu-button')

menuButton.addEventListener('click', () => {
  document.querySelector('.navbar-bottom').classList.toggle('navbar-bottom--visible')
})