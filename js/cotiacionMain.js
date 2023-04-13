

var mediaQuery = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)

handleClick_bars()
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
  let prevScrollpos = window.pageYOffset
  window.onscroll = () => {
    let scrollPos = window.pageYOffset;

    if (prevScrollpos < scrollPos && scrollPos > 83) {
      nav.style.top = "-88px"
    } else {
      nav.style.top = "0";
    }
    prevScrollpos = scrollPos
  }
}


/*----- Footer Date ------ */
function getYearFooter() {
  const footerDate = document.getElementById("footerDate")
  footerDate.innerText = new Date().getFullYear();
}