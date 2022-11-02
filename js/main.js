document.addEventListener("DOMContentLoaded", function(e) {
  function toggleMenu(moaMenu) {
    if (moaMenu.className === "menu sticky") {
      moaMenu.className += " responsive";
    } else {
      moaMenu.className = "menu sticky";
    }
  }

  const navButtons = document.querySelectorAll(".menu span")
  const moaMenu = document.querySelector("#moa-menu");

  for(var i=0; i < navButtons.length; i++) {
    const button = navButtons[i]
    const id = button.getAttribute("data-name")
    button.addEventListener('click', function() {
      toggleMenu(moaMenu)

      document.getElementById(id).scrollIntoView({
        behavior: 'smooth',
        block: "start"
      })
    })

  }

  const moaButton = document.querySelector("#moa");

  moaButton.addEventListener("click", function() {
    toggleMenu(moaMenu)
  })
})
