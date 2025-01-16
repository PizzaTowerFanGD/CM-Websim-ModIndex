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
