const board = function() {
  const container = document.querySelector('.container');

  for (row = 0; row < 16; row++) {
    const allRows = document.createElement('div');
    allRows.className = 'all-rows';
    container.appendChild(allRows);
  }

  const getAllRows = document.querySelectorAll('.all-rows');

  getAllRows.forEach(eachRow => {
    for (let i = 0; i < 16; i++) {
      const square = document.createElement('div');
      square.className = 'square';
      eachRow.appendChild(square);  
    }
  });
}

const addHoverEffect = function() {
  const allSquares = document.querySelectorAll('.square');

  allSquares.forEach(eachSquare => {
    eachSquare.addEventListener('mouseover', () => {
      eachSquare.className = 'square change-color';
    })
  });
}

board();
addHoverEffect();