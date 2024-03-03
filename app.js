const leftArrow = document.querySelector(".btn-1")
const rightArrow = document.querySelector(".btn-2")
const basketOne = document.querySelector(".box-1  span")
const basketTwo = document.querySelector(".box-2  span")

const totalApples = 100
let basketOneAppleCount = totalApples
basketOne.innerText = basketOneAppleCount

let basketTwoAppleCount = 0
basketTwo.innerText = totalApples - basketOneAppleCount

rightArrow.addEventListener("click", () => {
  if (basketOneAppleCount > 0) {
    basketOneAppleCount--
    basketOne.innerText = basketOneAppleCount
    basketTwoAppleCount++
    basketTwo.innerText = basketTwoAppleCount
  }
})

leftArrow.addEventListener("click", () => {
  if (basketTwoAppleCount > 0) {
    basketTwoAppleCount--
    basketTwo.innerText = basketTwoAppleCount
    basketOneAppleCount++
    basketOne.innerText = basketOneAppleCount
  }
})
