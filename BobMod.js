ModAPI.registerCellType({
  type: 'bob',
  imgSrc: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAACYktHRAD/h4/MvwAAAAd0SU1FB+kBEBYYEBfhyToAAABSSURBVEjHY2SAgf8MpAFGCMVEojYc5pBqO5JuKriAXNsZqBQGGAb8x+MkbHLUd8EINGAQpoNRAwbAABZkDrFJgpGaLhhNiYPBgMFQM8HAQNXOAJNZDDXgNPiLAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDI1LTAxLTE2VDIyOjI0OjE2KzAwOjAwOw/uNAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyNS0wMS0xNlQyMjoyNDoxNiswMDowMEpSVogAAAAodEVYdGRhdGU6dGltZXN0YW1wADIwMjUtMDEtMTZUMjI6MjQ6MTYrMDA6MDAdR3dXAAAAAElFTkSuQmCC',  // replace with the actual image source
  name: 'Bob',
  description: 'Does Bob things',
  process: function(cell) {
    const directions = [
      { dx: -1, dy: 0 }, // left
      { dx: 1, dy: 0 },  // right
      { dx: 0, dy: -1 }, // up
      { dx: 0, dy: 1 },  // down
    ];
    
    let validMoves = [];

    // check each direction for an empty space
    for (const dir of directions) {
      const newX = cell.x + dir.dx;
      const newY = cell.y + dir.dy;

      const targetCell = getCellAt(newX, newY);
      if (!targetCell) {
        validMoves.push({ x: newX, y: newY });
      }
    }

    // if we found valid moves, teleport to a random one
    if (validMoves.length > 0) {
      const randomMove = validMoves[Math.floor(Math.random() * validMoves.length)];
      moveCell(cell, randomMove.x, randomMove.y);
    }
  }
});
