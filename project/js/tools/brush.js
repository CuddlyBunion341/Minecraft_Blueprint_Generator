function newBrush(mousePos) {
  if (toolObj.tool == 'brush' && toolObj.drag == 1) {
    //var block = document.getElementById('material_select').value
		var block = getMaterial()
    var cord = mtc(window.clf,window.sw,window.rw,mousePos.x,mousePos.y,GridObject.current_y)
    var x = parseInt(cord.split("x")[0].split("c")[1])
    var z = parseInt(cord.split("x")[2])
    if (getBlock(cord) != block && isInBounds(x,z)) {
      if (mxo(getBlock(cord) == undefined,block == 0) && mxo(getBlock(cord) == undefined,block == "air")) {
        setBlock(cord,block)
        renderCell(cord)
        storeAction()
        playBlockSound(getSound(block))
      }
    }
  }
}
