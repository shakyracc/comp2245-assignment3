window.addEventListener('DOMContentLoaded', function() {
    
    const board = document.getElementById('board');
    
    const squares = board.getElementsByTagName('div');
    
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
  
    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener('click', function() {
    
            if (state[i] !== null) {
                return;
            }
        
            state[i] = currentPlayer;
            squares[i].textContent = currentPlayer;    
            squares[i].classList.add(currentPlayer);
        
            if (currentPlayer === 'X') {
                currentPlayer = 'O';
            } else {
                currentPlayer = 'X';
            }
        });

        // Change the style when you move your mouse over a square 


        squares[i].addEventListener('mouseover', function() {
            squares[i].classList.add('hover');
        });
      
        squares[i].addEventListener('mouseout', function() {
            squares[i].classList.remove('hover');
        });

    }


      
  });
  