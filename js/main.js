import { movileGallery } from "./gallery.js"

mainResponsive()

function mainResponsive() {
  var mediaQuery = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
  if (mediaQuery > 900) return
  movileGallery()
}

