export const movileGallery = () => {

  const imgGallery = document.querySelectorAll(".imgGalley")

  return (
    imgGallery.forEach(img => {
      img.classList.remove("handleHover")
      img.addEventListener("click", () => {
        img.classList.add("activate")
        window.clearInterval()
        setTimeout(() => {
          img.classList.add("activate")
        }, 3000)
      })
    })
  )
}

