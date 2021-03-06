function renderRect(startpos,endpos,add,subtract) {
  if (toolObj.tool == 'rect_select' && toolObj.drag == 1) {
    var newStartPos = {x:startpos.x * window.ratio,y:startpos.y * window.ratio}
    var newEndPos = {x:endpos.x * window.ratio,y:endpos.y * window.ratio}
    var width = Math.max(newStartPos.x, newEndPos.x) - Math.min(newStartPos.x , newEndPos.x)
    var height = Math.max(newStartPos.y, newEndPos.y) - Math.min(newStartPos.y , newEndPos.y)
    ctxG.clearRect(0,0,canvasG.width,canvasG.height)
    var liwi = 10
    ctxG.lineWidth = liwi
    ctxG.beginPath();
    ctxG.setLineDash([liwi]);
    ctxG.rect(Math.min(newStartPos.x,newEndPos.x),Math.min(newStartPos.y,newEndPos.y),width,height);
    ctxG.stroke();
  }
}
function calc(pos1,pos2,add,subtract,[clf,sw,rw]) {
  if (toolObj.tool == 'rect_select') {
    var cord1 = mtc(clf,sw,rw,pos1.x,pos1.y,0)
    var cord2 = mtc(clf,sw,rw,pos2.x,pos2.y,0)
    var x1 = parseInt(cord1.split("x")[0].split("c")[1])
    var y1 = parseInt(cord1.split("x")[1])
    var z1 = parseInt(cord1.split("x")[2])
    var x2 = parseInt(cord2.split("x")[0].split("c")[1])
    var y2 = parseInt(cord2.split("x")[1])
    var z2 = parseInt(cord2.split("x")[2])
    //console.log(pos1,pos2);
    //console.log(x1,y1,z1," | ",x2,y2,z2);
    for (var xi = min(x1,x2); xi <= max(x1,x2); xi++) {
      for (var yi = min(y1,y2); yi <= max(y1,y2); yi++) {
        for (var zi = min(z1,z2); zi <= max(z1,z2); zi++) {
          var gcord = cellcord(xi,yi,zi) //generated coordinate
          //console.log(xi,yi,zi,"cord");
          if (!GridObject.selected.includes(gcord) && isInBounds(xi,zi)) {
            GridObject.selected.push(gcord)
            renderCell(gcord)
          }
        }
      }
    }
    //////////////////////
    storeAction()
  }
}
function deselect() {
  var ols = GridObject.selected
  GridObject.selected = []
  for (var i = 0; i < ols.length; i++) {
    renderCell(ols[i])
  }
  //////////////////////
  storeAction()
}
function deleteBlock(cell_index) {
  delete GridObject.Cells[cell_index]
  storeAction()
}
function deleteSelection() {
  for (var i = 0; i < GridObject.selected.length; i++) {
    delete GridObject.Cells[GridObject.selected[i]]
    renderCell(GridObject.selected[i])
  }
  storeAction()
}
