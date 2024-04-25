const board = function() {
  for (let row = 0; row < 16; row++) {
    const square = document.createElement('div');
    const container = document.querySelector('.container');
    square.className = 'square';

    for (let column = 0; column < 16; column++) {
      container.appendChild(square);
    }
  }
}

board();