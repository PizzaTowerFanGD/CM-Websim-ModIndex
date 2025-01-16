doublemover = {}
doublemover.type = "doublemover"
doublemover.imgSrc = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABhUlEQVRYR82XwXnCMAxG7RHKFJzg1B7KBqWMQPdoF2CPdgTajsCFW090CRghtUzkKrJsklgk+AKf81t6UhTZtiYx7p7eq9SzPvOn7xcrrYsmtR1zpxwkAEiOH2f3fYKN1ux+9tEcgogAWo65VwrSAKDRX8s5wnAInwEEuLZzDgFZsENGL2UhAAwVPYe4bYDPzdQDP78ejLWkZVTQo859qjLWtNXRrwKLMZsBNBxBJAAu6YoAcPHq7bf+W2fA/VDQnE4FAIycIfIAkk4NoBGlex3bulakvh0y5nR0d+tcA6WbwsoV8qgAWKCd+oBUXCWZgM95NIDJ8sPQbqtSA2AUxvFrnUwMakCgBkCN5gCobuEONypFyJ2nAHjk0MiLACTHi7mLinVCrgMNDN+9yehUA7HRB7ETNlI+B4133R+AHyahiPyuyDajtrrOGaCGg/OQz//tuK0uC8A/k5KGc2ktBR7/UAq0Qx5MxWP5UBDJiwkHwHeodVJudTVDp6NdTnnlaoOkrud/0MM94DK176wAAAAASUVORK5CYII=`
doublemover.onTick = (cell) => {
  processMover(cell);
  cell.hasMoved = false; // so that it moves twice
  processMover(cell);
};
doublemover.onPush = (cell) => {
  return 1;
};
doublemover.name = 'Double Mover';
doublemover.description = 'Moves twice as fast as an original mover.';
ModAPI.registerCellType(doublemover);
