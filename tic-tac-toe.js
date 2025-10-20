window.addEventListener('DOMContentLoaded', function() {
    
    const board = document.getElementById('board');
    
    const squares = board.getElementsByTagName('div');

    const status = document.getElementById('status');

    const restartBtn = document.querySelector('.btn');
    
    for (let i = 0; i < squares.length; i++) {
      squares[i].classList.add('square');
    }

    // Add an X or O to a square when clicked

    // initialize an empty array to keep track of the state of the game after each square is clicked 

    let state = [];
    for (let i = 0; i < 9; i++) {
        state.push(null);
    }

    let currentPlayer = 'X';   
    let gameOver = false;

    // checking for winner conditions
    function checkWinner() {

        const winCondition = [
         [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
         [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
         [0, 4, 8], [2, 4, 6]             // diagonals
        ];

        for (let condition of winCondition) {
            const [a, b, c] = condition;
            if (state[a] && state[a] === state[b] && state[a] === state[c]) {
              return state[a]; 
            }
          }
      
          return null; 
    }
  
    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener('click', function() {
    
            if (state[i] !== null || gameOver) {
                return;
            }
        
            state[i] = currentPlayer;
            squares[i].textContent = currentPlayer;    
            squares[i].classList.add(currentPlayer);

            const winner = checkWinner();
            if (winner) {
                status.textContent = 'Congratulations! ${winner} is the Winner!';
                status.classList.add('you-won');
                gameOver = true;
                return;
            }

            //change player
            if (currentPlayer === 'X') {
                currentPlayer = 'O';
            } else {
                currentPlayer = 'X';
            }
        });

        // Change the style when you move your mouse over a square 

        squares[i].addEventListener('mouseover', function() {
            if (!gameOver && state[i] === null) {
                squares[i].classList.add('hover');
            }
        });
      
        squares[i].addEventListener('mouseout', function() {
            squares[i].classList.remove('hover');
        });

    }

    // game restart

    restartBtn.addEventListener('click', function () {
        for (let i = 0; i < squares.length; i++) {
          squares[i].textContent = '';
          squares[i].classList.remove('X', 'O', 'hover');
          state[i] = null;
        }
        currentPlayer = 'X';
        gameOver = false;
        status.textContent = 'click a square to start playing.';
        status.classList.remove('you-won');
      });
      
  });
  