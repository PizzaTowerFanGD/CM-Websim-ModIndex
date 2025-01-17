ModAPI.registerCellType({
  type: 'accel',
  imgSrc: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABiUlEQVRYhWNkwAEEvRb9xyVHDni/LY4RmziGILUtJuQQOAebxVZ6pmRbpKUuB2fPWb0Wp0NYsGmmxGJsYHJFLAMDAwNDbsdiDDkmBgZU38Ms39KuwbClXYOqDtk/LRbOhtnJhKwAm8+p7RBkRzAwMDAwEZvoaBEigl6L/sNDgNh4p4ZDkEMBayIk1iEMDAwMvlU3IQL/YQFJWi5mIqwEP9jcps6wuU2dbP1khwCGQ+AhcmNgHAB3SBvEIWULvhGlnuIowAW6ErgG1gHEOoKmDiDGETR3ACFAcwe45uwfOAcQspymDoBZbmhijlcd1csBIW9InW+sKEPQcqo6AGYxDBBjOVUcgG6xtT5prSmyHYBhMaw6/09abUiyAzB9bEaWxSQ7AN1iWAPmP4bFWJv/hB1w7NJprK0iXBZTAhyzEGayvN8Wx4itXUgLi9HB+21xjCgF0bFLpzEUWemZUtVyZN8zMODoGVHDQuSekb4ypEZE7pjg7RnBQoJaPsfWI4KBwdM5pbVDcHXPAduaewjVdez8AAAAAElFTkSuQmCC',
  name: 'Acceleration',
  description: 'Moves and accelerates',
  process: function(cell) {
    try{cell.vars[0]} catch(err) {cell.vars={}; cell.vars[0]=1;}
    for(n=0; n<cell.vars[0]; n++) {
      processMover(cell);
      cell.hasMoved = false;
    }
    cell.vars[0]++;
    cell.hasMoved = true;
  },
  onPush: function(c,d) {
    return 1;
  }
});
