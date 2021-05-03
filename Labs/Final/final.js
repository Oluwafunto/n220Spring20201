//Variable for bot X and O
var X = 'x'
var O = 'O'

// Get all elements within the board cells
var cells = document.querySelectorAll('[data-info]')

//Gets the board 
var board = document.getElementById('board')

//Gets the winning message with id  = "winningMessage"
var winningMessageElement = document.getElementById('winningMessage')

//Gets the winning message text within the  id  = "winningMessage"
var winningMessageTextElement = document.querySelector('[data-winning-message-text]')

//initiates the start of the game
start()


//function of starting game
function start() {
    //starts with player X
    oTurn = false
    //to start game remove the x's and o's from the board of the previous game
    //loops through the cells
    cells.forEach(cell => {
        //removes the x and o from previous game
        cell.classList.remove(X)
        cell.classList.remove(O)
        //resets the event listner
        cell.removeEventListener('click', handleClick)
        //handle click once so you can only click on a cell one time
        cell.addEventListener('click', handleClick, {once: true})
    })
    //sets the hover class back
    hover()
    //remove the winning message text
    winningMessageElement.classList.remove('show')
}

//handles click function lets it know when cell is clicked
function handleClick(any) {
    //target the cell that was clicked
    let cell = any.target
    //current class is if its o its o's class and if its x its x class
    let currentClass = oTurn ? O : X
    //calls to the place function
    place(cell, currentClass)
    //check win function called
    if (checkWin(currentClass)) {
        endGame(false)
        //if its a draw call the draw function
    } else if (isDraw()) {
        endGame(true)
    } else {
        //calls to swap turn function
        swapTurns()
        //calls to create the hovering affect
        hover()
    }
}

//hover class function to make it hover on specific class
function hover() {
    //remove the x and o classes that are set on it
    board.classList.remove(X)
    board.classList.remove(O)
    //if else statment 
    //if o turn set the hover class to o
    //if x turn set the hover class to x
    if (oTurn) {
        board.classList.add(O)
    } else {
        board.classList.add(X)
    }
}

//this functions makes it add whatever is the current class
//whether thats x or o
function place(cell, currentClass) {
    cell.classList.add(currentClass)
}

// function to switch between players
function swapTurns() {
    oTurn = !oTurn
}

//creates array for the winning combination of numbers
let win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

//function to check for the win
function checkWin(currentClass) {
   return win.some(combination => {
       return combination.every(index => {
            return cells[index].classList.contains(currentClass)
       })
   })
}

//function to check for draw
function endGame(draw) {
    if (draw) {
        winningMessageTextElement.innerText = 'It is a tie!'
    } else {
        winningMessageTextElement.innerText = `${oTurn ? "Player O" : "Player X"} Wins!`
    }
    winningMessageElement.classList.add('show')
}


//function to check every cells
function isDraw() {
    return [...cells].every(cell => {
        return cell.classList.contains(X) ||
        cell.classList.contains(O)
    })
}

//Gets the restart button with id = replayButton
var replayButton = document.getElementById('replayButton')

// EventListener starts a newgame
replayButton.addEventListener('click', start)