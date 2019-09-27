function newBrush() {
  if (toolObj.tool == 'brush' && toolObj.drag == 1) {
    var block = document.getElementById('material_select').value
    if (getBlock(cord) != block) {
      setBlock(cord,block)
    }
    renderCell(cord) //This was usualy up top in the if statement, but some Cells won't rerender and be bugged
  }
}
