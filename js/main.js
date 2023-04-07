import { movileGallery } from "./gallery.js"

mainResponsive()
getYearFooter()

function mainResponsive() {
  var mediaQuery = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
  if (mediaQuery > 900) return
  movileGallery()
}

/*----- Footer Date ------ */
function getYearFooter() {
  const footerDate = document.getElementById("footerDate")
  footerDate.innerText = new Date().getFullYear();
}
