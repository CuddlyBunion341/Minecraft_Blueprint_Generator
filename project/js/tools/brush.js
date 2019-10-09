function newBrush() {
  if (toolObj.tool == 'brush' && toolObj.drag == 1) {
    var block = document.getElementById('material_select').value
    var x = parseInt(cord.split("x")[0].split("c")[1])
    var z = parseInt(cord.split("x")[2])
    if (getBlock(cord) != block && isInBounds(x,z)) {
      setBlock(cord,block)
    }
    renderCell(cord) //This was usualy up top in the if statement, but some Cells won't rerender and be bugged
  }
}
