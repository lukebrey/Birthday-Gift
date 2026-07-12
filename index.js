const bgImage = document.getElementById("header");
window.addEventListener("scroll", ()=> {
    updateImage()
})

function updateImage() {
    bgImage.style.opacity = 1 - window.pageYOffset/800
    console.log(window.pageYOffset, 1 - Window,pageYOffset)
}