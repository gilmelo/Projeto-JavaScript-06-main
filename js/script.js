const next = document.querySelector("#next")
const prev = document.querySelector("#prev")
let img = document.querySelector(".image-cube")

let deg = 0
const handleClickNext = () => {
  deg -= 90
  img.style.transform = `rotateY(${deg}deg)`
}

next.addEventListener("click", handleClickNext)

const handleClickPrev = () => {
  deg += 90
  img.style.transform = `rotateY(${deg}deg)`
}

prev.addEventListener("click", handleClickPrev)