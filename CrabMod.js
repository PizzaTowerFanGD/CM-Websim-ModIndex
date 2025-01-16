crab = {}
crab.type = "crab"
crab.imgSrc = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAGFBMVEW0SgD////JUwDbWgH+ZwHbWQAAAAAAAAAQ1SIBAAAACHRSTlP///////8A/2Clr6YAAACiSURBVDiNvdNRDsMgCABQiuD9j7yBIjhYxtdITAVeUqsWpgZozJkzaIPnicCzPmitoUyu2hU3QMTYlDQArQwKMdQbyP0gYPcpxRY9MEbuv98y+qBqS/wTfBFhH0oBESRzThTCSae2CD3bXbuAPOwGIH0Im27ALKU1DKzBbAAqAA5Yezeg3ViAKQNiA4Ay1ftx1oirZh/r1jfh1Op/wv+Nn+AFWpwL34wIlLkAAAAASUVORK5CYII=`
crab.onTick = (cell) => {
    if((cell.rotation%2)==0) {
        processMover(cell);
    };
};
crab.onPush = (cell) => {
    return 1;
};
crab.name = 'Crab'
crab.description = 'Only moves left or right. From CMMM+MM.';
ModAPI.registerCellType(crab);