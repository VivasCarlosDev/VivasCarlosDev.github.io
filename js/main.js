import { movileGallery } from "./gallery.js"

var mediaQuery = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)

handleClick_bars()
mainResponsive()
getYearFooter()
navLower()

/*----- Nav Responsive ----- */
function handleClick_bars() {
  if (mediaQuery > 900) return
  const menuBars = document.getElementById("menuBars")
  const menusection = document.querySelector(".menu")
  const menuBackground = document.querySelector(".black__background")
  const itemsNav = document.querySelectorAll(".nav__items")
  const closeNav = document.getElementById("closeNav")

  const handleTogle = () => {
    menusection.classList.toggle("active");
    menuBackground.classList.toggle("active")
  }

  menuBars.addEventListener('click', () => handleTogle());
  menuBackground.addEventListener('click', () => handleTogle());
  closeNav.addEventListener('click', () => handleTogle());

  itemsNav.forEach(itemNav => {
    itemNav.addEventListener('click', () => handleTogle())
  })
}

function navLower() {
  const nav = document.getElementById("navBar");
  const navLogo = document.getElementById("navLogo");
  const fillSvg = document.getElementById("fillSvg");
  let prevScrollpos = window.pageYOffset
  window.onscroll = () => {
    let scrollPos = window.pageYOffset;

    if (scrollPos >= 100) {
      nav.style.backgroundColor = "#fff"
      nav.style.boxShadow = "0px 1px 10px 1px rgba(0,0,0,0.35)"
      navLogo.style.color = "#000"
      fillSvg.style.fill = "#000"
      nav.style.color = "#000"
      nav.style.transition = "all .4s ease"
    } else {
      nav.style.backgroundColor = "transparent"
      nav.style.color = "#fff"
      navLogo.style.color = "#fff"
      fillSvg.style.fill = "#fff"
      nav.style.boxShadow = "none"
    }

    if (prevScrollpos > scrollPos) {
      nav.style.top = "0";
    } else {
      nav.style.top = "-88px"
    }
    prevScrollpos = scrollPos
  }
}


function mainResponsive() {
  if (mediaQuery > 900) return
  movileGallery()
}

/*----- Footer Date ------ */
function getYearFooter() {
  const footerDate = document.getElementById("footerDate")
  footerDate.innerText = new Date().getFullYear();
}




