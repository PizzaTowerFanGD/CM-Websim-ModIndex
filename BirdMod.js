ModAPI.registerCellType({
  type: 'bird',
  imgSrc: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwgAADsIBFShKgAAAABh0RVh0U29mdHdhcmUAcGFpbnQubmV0IDQuMS41ZEdYUgAAARVJREFUOE+dlD1KQ1EQRt8SrESwsHEXWYubkCzF0sIFCK4gkDaVImnchGBhYfX0xJzw5d55/ryBj5m5c7+TuSFkyDh7uB/naG8/Dgbnq/V4sdn+S3g6aMIWT2/j1fP7ePPysRM18pysLh9fD9CT5fU3NGEYiBaEsVIJBehmCUsQddtbqw4IpIJVcOtUB0zY6d3t7hJZ0U/B0CQQM0bOUwmuVD5ZEHXCUhUYXwlkSJ8b+kx71YI7YBoTQJ0f0Mr5jxsm0E3sFRCXKIEOvZzmlCAXsJ4Ekv1uKpAA5n8Cesms0pz36MkdMEGVmOVcGL9f+iMgjdDfJFgYNd4DsP3HqQAtyGdy3sEMDhjMUQczGMzR3v4Vw/AJinD4hHcIc20AAAAASUVORK5CYII=',
  name: 'Bird',
  description: 'A cell that pushes other cells in different patterns.',
  process: function (cell) {
    if (!cell.state) {
      cell.state = 0; // Initialize state
    }

    const dir = cell.rotation;
    const x = cell.x;
    const y = cell.y;

    // Define movement patterns as a list of lists
    const movementPatterns = [
      [ { dr: 0, dc: 1 } , { dr: -1, dc: 0 }, { dr: 0, dc: 1 }, { dr: 1, dc: 0 } ], // Right (dir=0)
      [ { dr: 1, dc: 0 }, { dr: 1, dc: 0 }, { dr: 1, dc: 0 }, { dr: 1, dc: 0 } ], // Down (dir=1)
      [ { dr: 0, dc: -1 }, { dr: 1, dc: 0 }, { dr: 0, dc: -1 }, { dr: -1, dc: 0 } ], // Left (dir=2)
      [ { dr: -1, dc: 0 }, { dr: -1, dc: 0 }, { dr: -1, dc: 0 }, { dr: -1, dc: 0 } ], // Up (dir=3)
    ];

        const pattern = movementPatterns[dir];
        const move = pattern[cell.state];
       let dr = move.dr;
       let dc = move.dc;


    if (dr !== 0 || dc !== 0) {
      pushChain(cell, dr, dc);
    }

    cell.state = (cell.state + 1) % 4;
  }
});