const cells = document.querySelectorAll(".cell")
const info = document.querySelector(".info")
const remaningGameDiv = document.querySelector(".main-health")
const reStartBtn = document.querySelector(".reStartBtn")
const extArr = ["A", "B", "C", "D", 1, 2, 3, 4, 1, 2, 3, 4, "A", "B", "C", "D"]
let numArr = []
let count = 0
let selectF
let selectS
let cellFId
let cellSId
let gameRemaining = 5
let playing = true

setCell()
cells.forEach((cell, index) => {
  cell.firstElementChild.innerText = extArr[numArr[index]]
  cell.firstElementChild.style.display = 'none'
})


function hidingAndStart() {
  cells.forEach((cell) => {
    cell.firstElementChild.style.display = 'block'
  })
  setTimeout(() => {
    cells.forEach((cell) => {
      cell.firstElementChild.style.display = "none"
     
        cell.addEventListener("click", (e) => {
        console.log('click',playing);
        if (count == 0 && playing) {
          selectF = e.target.firstElementChild.innerText
          cellFId = e.target.classList[1]
          selectFS(e, 1)
        } else if (count == 1 && playing) {
          selectS = e.target.firstElementChild.innerText
          cellSId = e.target.classList[1]
          selectFS(e, 2)
          //for true select
          if (selectF == selectS) {
            count = 0
            //for win
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
              info.innerText = "YOU WIN :)))"
              playing = false
              reStartBtn.style.display = "block"
            }
          }
          //for false select
          else {
            console.log("false select")
            gameRemaining--
            info.innerText = `No Match`
            remaningGameDiv.style.width = `${gameRemaining * 20}%`
            if (gameRemaining < 3) {
              remaningGameDiv.style.backgroundColor = "rgb(235, 81, 81)"
            }
            if (gameRemaining != 0) {
              cells.forEach((cell) => {
                if (
                  cell.classList[1] == cellFId ||
                  cell.classList[1] == cellSId
                ) {
                  setTimeout(() => {
                    cell.firstElementChild.style.display = "none"
                    count = 0
                    info.innerText = ""
                  }, 1000)
                }
              })
            }
            //game over
            else {
              info.innerText = "Game Over"
              reStartBtn.innerText = 'RESTART'
              reStartBtn.style.display = "block"
              playing = false
            }
          }
        }
      })
      
    })
  }, 3000)
}

function isWin(i) {
  return cells[i].firstElementChild.style.display == "block"
}
function selectFS(e, cntNum) {
  count = cntNum
  e.target.firstElementChild.style.display = "block"
}

reStartBtn.addEventListener("click", ()=>{
  
  if (reStartBtn.innerText == 'Start') {
    hidingAndStart()
    reStartBtn.style.display = 'none'
  }else{
    reStarting()
  }
})

function reStarting() {
  reStartBtn.style.display = "none"
  remaningGameDiv.style.backgroundColor = "rgb(80, 182, 80)"
  remaningGameDiv.style.width = "100%"
  info.innerText = ""
  gameRemaining = 5
  count = 0
  playing = true
  numArr = []
  setCell()
  cells.forEach((cell, index) => {
    cell.firstElementChild.innerText = extArr[numArr[index]]
  })
  hidingAndStart()
}

function setCell() {
  while (numArr.length < 16) {
    let randNum = Math.floor(Math.random() * 16)
    if (numArr.indexOf(randNum) === -1) {
      numArr.push(randNum)
    }
  }
}
