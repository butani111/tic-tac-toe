/*
      Project : Tic Tac Toe
      @Author : Shyam Butani (butanishyam111@gmail.com)
 */


let boxes = document.querySelectorAll('#screen span') // squares
let userNameBoxes = document.querySelectorAll('#user-name span')
let userTurn = 0
let noOfLines = 3 // Change no. of squares (n x n)
let totalUser = 2; // Change no. of users
let symbols = ['X', 'O'] // Add/Remove symbols as no. of users changes
let userNameColor = ['rgb(137, 218, 137)', 'white'] // Color of box which indicates that whose turn is it now
let boxInitialBgColor = 'white'
let boxColorOnWinning = 'rgb(137, 218, 137)'
let turnsSoFar = 0

// Declare Onclick function for all squares

for (let i = 0; i < boxes.length; i++) {
  boxes[i].onclick = function (e) {
    if (this.innerHTML == '') {

      this.innerHTML = symbols[userTurn]
      userNameBoxes[userTurn].style.backgroundColor = userNameColor[1]

      boxContent = []
      for (let it = 0; it < boxes.length; it++) {
        boxContent[it] = boxes[it].innerHTML
      }

      // Now, check if pattern completed or not
      var gameFinished = false

      // check row
      for (let it = 0; !gameFinished && it < noOfLines; it++) {
        var flag = true
        if (boxContent[it * noOfLines] == '') continue
        for (let it1 = 0; it1 + 1 < noOfLines; it1++) {
          if (boxContent[it * noOfLines + it1] != boxContent[it * noOfLines + it1 + 1]) {
            flag = false
            break
          }
        }
        if (flag) {
          gameFinished = true
          for (let it1 = 0; it1 < noOfLines; it1++) {
            boxes[it * noOfLines + it1].style.backgroundColor = boxColorOnWinning
          }
        }
      }

      // check colomn
      for (let it = 0; !gameFinished && it < noOfLines; it++) {
        var flag = true
        if (boxContent[it] == '') continue
        for (let it1 = 0; it1 + 1 < noOfLines; it1++) {
          if (boxContent[it + noOfLines * it1] != boxContent[it + noOfLines * (it1 + 1)]) {
            flag = false
            break
          }
        }
        if (flag) {
          gameFinished = true
          for (let it1 = 0; it1 < noOfLines; it1++) {
            boxes[it + noOfLines * it1].style.backgroundColor = boxColorOnWinning
          }
        }
      }

      // check diagonal
      var flag = (boxContent[0] != '') //true
      for (let it = 0; !gameFinished && it + 1 < noOfLines; it++) {
        if (boxContent[it * noOfLines + it] != boxContent[(it + 1) * noOfLines + it + 1]) {
          flag = false
          break
        }
      }
      if (!gameFinished && flag) {
        gameFinished = true
        for (let it = 0; it < noOfLines; it++) {
          boxes[it * noOfLines + it].style.backgroundColor = boxColorOnWinning
        }
      }

      var flag = (boxContent[noOfLines - 1] != '') //true
      for (let it = 0; !gameFinished && it + 1 < noOfLines; it++) {
        if (boxContent[it * noOfLines + (noOfLines - it - 1)] != boxContent[(it + 1) * noOfLines + (noOfLines - it - 2)]) {
          flag = false
          break
        }
      }
      if (!gameFinished && flag) {
        gameFinished = true
        for (let it = 0; it < noOfLines; it++) {
          boxes[it * noOfLines + (noOfLines - it - 1)].style.backgroundColor = boxColorOnWinning
        }
      }

      // If current user compeleted pattern, diclare the result
      if (gameFinished) {
        document.getElementById('msg-on-top').innerHTML = userNameBoxes[userTurn].innerHTML + ' is winner !!'
        return
      }

      turnsSoFar += 1
      if (turnsSoFar >= noOfLines * noOfLines) {
        document.getElementById('msg-on-top').innerHTML = 'Tie !!, It seems like you both are good at this.'
      }

      userTurn = (userTurn + 1) % totalUser;
      userNameBoxes[userTurn].style.backgroundColor = userNameColor[0]
    }
  }
}

// Onclick funcion for New-game-btn

document.getElementById('new-game-btn').onclick = function (e) {
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].innerHTML = '';
    boxes[i].style.backgroundColor = boxInitialBgColor
  }
  turnsSoFar = 0
  document.getElementById('msg-on-top').innerHTML = ''
  userNameBoxes[userTurn].style.backgroundColor = userNameColor[1]
  userNameBoxes[0].style.backgroundColor = userNameColor[0];
}