function processDoubleMover(cell) {
  if (cell.hasMoved) return;
  let deltaRow = 0;
  let deltaCol = 0;
  switch (cell.rotation) {
    case 0:
      deltaCol = 2;
      break;
    case 1:
      deltaRow = 2;
      break;
    case 2:
      deltaCol = -2;
      break;
    case 3:
      deltaRow = -2;
      break;
  }
  let targetRow = cell.y + deltaRow;
  let targetCol = cell.x + deltaCol;

  if (targetRow >= 0 && targetRow < gridSize && targetCol >= 0 && targetCol < gridSize) {
    let targetCell = getCellAt(targetCol, targetRow);
    let pushDirection = cell.rotation;
    if (!targetCell) {
      moveCell(cell, targetCol, targetRow);
    } else if (isPushable(targetCell, pushDirection)) {
      if (canPushChain(targetCell, deltaRow, deltaCol)) {
        pushChain(targetCell, deltaRow, deltaCol);
        moveCell(cell, targetCol, targetRow);
      }
    } else if (targetCell.type === 'trash') {
      removeCellFromMapAndArray(cell);
    } else if (targetCell.type === 'enemy') {
      removeCellFromMapAndArray(targetCell);
      removeCellFromMapAndArray(cell);
    }
  }
  cell.hasMoved = true;
}
doublemover = {}
doublemover.imgSrc = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABhUlEQVRYR82XwXnCMAxG7RHKFJzg1B7KBqWMQPdoF2CPdgTajsCFW090CRghtUzkKrJsklgk+AKf81t6UhTZtiYx7p7eq9SzPvOn7xcrrYsmtR1zpxwkAEiOH2f3fYKN1ux+9tEcgogAWo65VwrSAKDRX8s5wnAInwEEuLZzDgFZsENGL2UhAAwVPYe4bYDPzdQDP78ejLWkZVTQo859qjLWtNXRrwKLMZsBNBxBJAAu6YoAcPHq7bf+W2fA/VDQnE4FAIycIfIAkk4NoBGlex3bulakvh0y5nR0d+tcA6WbwsoV8qgAWKCd+oBUXCWZgM95NIDJ8sPQbqtSA2AUxvFrnUwMakCgBkCN5gCobuEONypFyJ2nAHjk0MiLACTHi7mLinVCrgMNDN+9yehUA7HRB7ETNlI+B4133R+AHyahiPyuyDajtrrOGaCGg/OQz//tuK0uC8A/k5KGc2ktBR7/UAq0Qx5MxWP5UBDJiwkHwHeodVJudTVDp6NdTnnlaoOkrud/0MM94DK176wAAAAASUVORK5CYII=`

doublemover.onTick = (cell) => {
processDoubleMover(cell)
};
doublemover.onPush = (cell) => {
return 1;
};
doublemover.name = 'Double Mover'
doublemover.description = 'Moves twice as fast as an original mover.';
ModAPI.registerCellType(doublemover);
