function brush() {
  if (GridObject.tool == 'brush' && drag == 1 && overCanvas == 1) {
    //var canvas = document.getElementById('Gridvisulator')
    //ctx = canvas.getContext("2d");
    //var mouseX = e.clientX - ctx.canvas.offsetLeft;
    //var mouseY = e.clientY - ctx.canvas.offsetTop;
    //var s_width = parseInt(canvas.width);
    //var r_width = parseInt(canvas.style.width);
    var size = GridObject.zoom * GridObject.defaultsize;
    if (GridObject.spacefactor == -1) {
      var clf = (size)
    }
    else {
      var clf = (size + size/GridObject.spacefactor)
    }
    var x = Math.floor((mouseX * (s_width / r_width)) / clf + ((GridObject.translate_x / clf) - (GridObject.translate_x / clf) * 2)) + 1
    var z = Math.floor((mouseY * (s_width / r_width)) / clf + ((GridObject.translate_z / clf) - (GridObject.translate_z / clf) * 2)) + 1
    if (x > GridObject.x_size || z > GridObject.z_size) {
      //do nothing...
    }
    else {
      var coord = cellcord(x,GridObject.current_y,z)
      var blocks = document.getElementById('block_ul').getElementsByClassName('selected');
      var idArr = []
      for (let i = 0; i < blocks.length; i++) {
        var currentId = blocks[i].dataset.id;
        idArr.push(currentId)
      }
      if (e.metaKey) {
        GridObject.Cells[coord] = {block: '0'} //HERE
      }
      else {
        if (blocks.length == 0) {
          GridObject.Cells[coord] = {block: '0'} //HERE
        }
        else {
          GridObject.Cells[coord] = {block: randArrIdx(idArr)} //HERE
        }
      }
      RenderCell(coord)
      //CreateGrid()
    }
  }
}
