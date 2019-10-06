function renderRect(startpos,endpos,add,subtract) {
  if (toolObj.tool == 'rect_select' && toolObj.drag == 1) {
    var newStartPos = {x:startpos.x * ratio,y:startpos.y * ratio}
    var newEndPos = {x:endpos.x * ratio,y:endpos.y * ratio}
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
function calc(pos1,pos2,add,subtract) {
  var cord1 = mtc(clf,sw,rw,pos1.x,pos1.y,0)
  var cord2 = mtc(clf,sw,rw,pos2.x,pos2.y,0)
  var x1 = parseInt(cord1.split("x")[0].split("c")[1])
  var y1 = parseInt(cord1.split("x")[1])
  var z1 = parseInt(cord1.split("x")[2])
  var x2 = parseInt(cord2.split("x")[0].split("c")[1])
  var y2 = parseInt(cord2.split("x")[1])
  var z2 = parseInt(cord2.split("x")[2])
  for (var xi = min(x1,x2); xi <= max(x1,x2); xi++) {
    for (var yi = min(y1,y2); yi <= max(y1,y2); yi++) {
      for (var zi = min(z1,z2); zi <= max(z1,z2); zi++) {
        var gcord = cellcord(xi,yi,zi) //generated coordinate
        GridObject.selected.push(gcord)
        renderCell(gcord)
      }
    }
  }
}
