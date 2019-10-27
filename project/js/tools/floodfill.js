function floodfill() {
  if (toolObj.tool == 'floodfill') {
    //var block = document.getElementById('material_select').value
		var block = getMaterial()
    var paper = getBlock(cord)
    console.log(cord);
    floodfillF(cord,paper,block)
    storeAction()
    playBlockSound(getSound(block))
  }
}
function floodfillF(cord,paper,block) {
  var x = parseInt(cord.split('x')[0].split('c')[1])
  var y = parseInt(cord.split('x')[1])
  var z = parseInt(cord.split('x')[2])
  if (!isInBounds(x,z)) {
    return;
  }
  if (paper == block) {
    return;
  }
  if (getBlock(cord) != paper) {
    return;
  }
  setBlock(cord,block) /////HERE
  renderCell(cord)
  //console.log(cord,GridObject.Cells[cord]);
  floodfillF(cellcord(x,y,+z - 1),paper,block);
  floodfillF(cellcord(+x + 1,y,z),paper,block);
  floodfillF(cellcord(x,y,+z + 1),paper,block);
  floodfillF(cellcord(+x - 1,y,z),paper,block);
  //RenderLayer(document.getElementById('Gridvisulator'),GridObject.current_y);
  return;
//}
}
