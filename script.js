const cells = document.querySelectorAll(".cell")
const info = document.querySelector(".info")
const extArr = ["A", "B", "C", "D", 1, 2, 3, 4, 1, 2, 3, 4, "A", "B", "C", "D"]
let numArr = []
let count = 0
let selectF
let selectS
let cellFId
let cellSId
let gameRemaining = 5
let playing = true

while (numArr.length < 16) {
  let randNum = Math.floor(Math.random() * 16)

  if (numArr.indexOf(randNum) === -1) {
    numArr.push(randNum)
  }
}

cells.forEach((cell, index) => {
  cell.firstElementChild.innerText = extArr[numArr[index]]
  cell.addEventListener("click", (e) => {
    if (count == 0 && playing) {
      count = 1
      e.target.firstElementChild.style.display = "block"
      selectF = e.target.firstElementChild.innerText
      cellFId = e.target.classList[1]
    }
    else if (count == 1 && playing) {
      count = 2
      cellSId = e.target.classList[1]
      e.target.firstElementChild.style.display = "block"
      selectS = e.target.firstElementChild.innerText

      if (selectF == selectS) {
        count = 0
       if (
        isWin(0) &&
        isWin(1) &&
        isWin(2) &&
        isWin(3) &&
        isWin(4) &&
        isWin(5) &&
        isWin(6) &&
        isWin(7) &&
        isWin(8) &&
        isWin(9) &&
        isWin(10) &&
        isWin(11) &&
        isWin(12) &&
        isWin(13) &&
        isWin(14) &&
        isWin(15)
        ) {
        info.innerText = 'YOU WIN :)))'
        playing = false
       }
      }
      else{
        info.innerText = `No Match ${gameRemaining}`
        gameRemaining--
        if (gameRemaining == 0) {
          info.innerText = 'Game Over'
          playing = false
        }else{
           cells.forEach(cell => {
          if (cell.classList[1] == cellFId || cell.classList[1] == cellSId) {
            setTimeout(() => {
              cell.firstElementChild.style.display = 'none'
              count = 0
              info.innerText = ''
            }, 1000);
          }
        })
        }
      }
    }
  })
})

setTimeout(() => {
  cells.forEach((cell) => {
    cell.firstElementChild.style.display = "none"
  })
}, 3000)

function isWin(i) {
  
  return cells[i].firstElementChild.style.display == 'block'
}
