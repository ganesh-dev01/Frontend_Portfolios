
let currentPlayer = 'X';
let moves = 0;
let gameActive = true;
let winner = null;


function handleBoxClick(boxId) {
    const box = document.getElementById(boxId);

   
    if (!gameActive || box.textContent !== '') {
        return;
    }

 
    box.textContent = currentPlayer;
    moves++;


    if (checkForWinner()) {
        gameActive = false;
      document.getElementById('winner-player').textContent = winner;
      document.querySelector('.top-display').style.display = 'none';
      document.querySelector('.winner-display').style.display = 'block';
        return;
    }

  
    if (moves === 9) {
        gameActive = false;
        document.getElementById('winner-player').textContent = 'It\'s a tie!';
        document.querySelector('.winner-display').style.display = 'block';
        return;
    }


    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    document.getElementById('player-turn').textContent = currentPlayer;
}


function checkForWinner() {
    const boxes = [
        ['box-1', 'box-2', 'box-3'],
        ['box-4', 'box-5', 'box-6'],
        ['box-7', 'box-8', 'box-9'],
        ['box-1', 'box-4', 'box-7'],
        ['box-2', 'box-5', 'box-8'],
        ['box-3', 'box-6', 'box-9'],
        ['box-1', 'box-5', 'box-9'],
        ['box-3', 'box-5', 'box-7']
    ];

    for (let i = 0; i < boxes.length; i++) {
        const [a, b, c] = boxes[i];
        if (
            document.getElementById(a).textContent !== '' &&
            document.getElementById(a).textContent === document.getElementById(b).textContent &&
            document.getElementById(a).textContent === document.getElementById(c).textContent
        ) {
            winner = document.getElementById(a).textContent;
            return true;
        }
    }

    return false;
}


function resetGame() {
    currentPlayer = 'X';
    moves = 0;
    gameActive = true;
    winner = null;
    document.getElementById('player-turn').textContent = currentPlayer;
    document.querySelector('.top-display').style.display = 'block';
    document.getElementById('winner-player').textContent = '';
    document.querySelector('.winner-display').style.display = 'none';

 
    for (let i = 1; i <= 9; i++) {
        document.getElementById(`box-${i}`).textContent = '';
    }
}


document.getElementById('box-1').addEventListener('click', () => handleBoxClick('box-1'));
document.getElementById('box-2').addEventListener('click', () => handleBoxClick('box-2'));
document.getElementById('box-3').addEventListener('click', () => handleBoxClick('box-3'));
document.getElementById('box-4').addEventListener('click', () => handleBoxClick('box-4'));
document.getElementById('box-5').addEventListener('click', () => handleBoxClick('box-5'));
document.getElementById('box-6').addEventListener('click', () => handleBoxClick('box-6'));
document.getElementById('box-7').addEventListener('click', () => handleBoxClick('box-7'));
document.getElementById('box-8').addEventListener('click', () => handleBoxClick('box-8'));
document.getElementById('box-9').addEventListener('click', () => handleBoxClick('box-9'));

document.getElementById('reset-btn').addEventListener('click', resetGame);
