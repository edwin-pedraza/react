const banner = document.getElementById("banner")
const chooseOption = document.getElementById("choose_options")
const optionX = document.getElementById("option_x")
const optionO = document.getElementById("option_o")
const choice = document.getElementById("choice")
const choiceMsg = document.getElementById("choiceMsg")


const x_class = "x"
const circle_class = "circle"
const winning_combination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [0, 4, 8],
    [2, 4, 6]
]
const cellElements = document.querySelectorAll('[data-cell]')
const board = document.getElementById("board")
const winMessage = document.getElementById("winning-message")
const winMessageText = document.querySelector("[data-winning-message-text]")
const restartbutton = document.getElementById("restart_button")
let turn

optionO.addEventListener('click', choosO)
optionX.addEventListener('click', choosX)
restartbutton.addEventListener('click', restartGame)

function choosO(){
    turn = true
    chooseOption.style.display = "none"
    choice.style.display = "block"
    startGame()
}

function choosX(){
    turn = false
    chooseOption.style.display = "none"
    choice.style.display = "block"
    startGame()
}
// startGame()


function startGame() {
    choiceMsg.innerHTML = `${turn ? "O": "X"}`
    cellElements.forEach(cell => {
        cell.style.cursor = "pointer"
        cell.classList.remove(x_class)
        cell.classList.remove(circle_class)
        cell.removeEventListener('click',handleClick)
        cell.addEventListener('click', handleClick,{once:true})
    })
    setBoardHoverClass()
    winMessage.classList.remove("show")
}

function restartGame(){
    turn = 0
    cellElements.forEach(cell => {
        cell.style.cursor = "none"
        cell.classList.remove(x_class)
        cell.classList.remove(circle_class)
        cell.removeEventListener('click',handleClick)
    })
    board.classList.remove(x_class)
    board.classList.remove(circle_class)
    chooseOption.style.display = "flex"
    choice.style.display = "none"
    winMessage.classList.remove("show")
}

function handleClick(e){
    
    const cell = e.target
    const currentClass = turn ? circle_class: x_class
    placeMark(cell,currentClass)
    if (checkWin(currentClass)) {
        endgame(false)
    } else if (isdraw()){
        endgame(true)
    } else {
        swapTurns()
        setBoardHoverClass()
    }
    
}

function placeMark (cell, currentClass){
    cell.classList.add(currentClass)
}

function swapTurns() {
    
    turn = !turn
}

function setBoardHoverClass() {
    choiceMsg.innerHTML = `${turn ? "O": "X"}`
    board.classList.remove(x_class)
    board.classList.remove(circle_class)
    if (turn){
        board.classList.add(circle_class)
     } else {
        board.classList.add(x_class)
     }
}

function checkWin(currentClass){
    return winning_combination.some(combination => {
        return combination.every(index => {
            return cellElements[index].classList.contains(currentClass)
        })
    })
}

function endgame(draw){
    if (draw){
        winMessageText.innerHTML = "Draw"
    } else {
        winMessageText.innerHTML = `${turn ? "O's": "X's"} Wins`

    }
    winMessage.classList.add("show")
}

function isdraw() {
    return [...cellElements].every(cell => {
        return cell.classList.contains(x_class) || cell.classList.contains(circle_class)
    })
}



// -----------prueba

