let numOfRC = 16;

const board = function() {
  const container = document.querySelector('.container');

  for (row = 0; row < numOfRC; row++) {
    const allRows = document.createElement('div');
    allRows.className = 'all-rows';
    container.appendChild(allRows);
  }

  const getAllRows = document.querySelectorAll('.all-rows');

  getAllRows.forEach(eachRow => {
    for (let i = 0; i < numOfRC; i++) {
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
    });
  });
}

const removeAllSquares = function() {
  const container = document.querySelector('.container');
  const getAllRows = document.querySelectorAll('.all-rows');

  getAllRows.forEach(eachRow => {
    container.removeChild(eachRow);
  });
}

const changeSizeOfGrid = function() {
  const changeSize = document.querySelector('button');

  changeSize.addEventListener('click', () => {
    removeAllSquares();
    numOfRC = Number(prompt('Enter a number: '));

    board();
    addHoverEffect();
  });
}

board();
addHoverEffect();
changeSizeOfGrid();