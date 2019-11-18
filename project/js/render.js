function renderCell(cell_index) {
  //declare all Variables
  if (!(cell_index in GridObject.Cells) && GridObject.selected.includes(cell_index == false)) {
    return;
  }
  var x = cell_index.split('x')[0].split('c')[1]
  var y = cell_index.split('x')[1]
  var z = cell_index.split('x')[2]
  var size = GridObject.zoom * GridObject.defaultsize;
  /*if (GridObject.spacefactor == -1) {
    var clf = Math.floor(size)
  }
  else {
    var clf = Math.floor(size + size / GridObject.spacefactor);
  }*/
  var canvas = document.getElementById('Gridvisulator');
  var ctx = canvas.getContext('2d');
  ctx.globalCompositeOperation = "source-over"
  var lw = GridObject.lineWidth;
  lw = Math.floor((size / (100 / lw)) / 2) * 2      //lw = size / (100 / lw)
  ctx.lineWidth = lw
  var clf = Math.floor(size - lw * 2)
  var combinedRender = false
  if (!combinedRender) {
    ctx.clearRect(Math.floor(x * clf + lw),Math.floor(z * clf + lw),clf - lw,clf - lw)
    //ctx.fillStyle = "#FFFFFF"
    //ctx.fillRect(x * clf + lw,z * clf + lw,clf - lw,clf - lw)
  }
  if (GridObject.Cells.hasOwnProperty(cell_index)) {
    var block = GridObject.Cells[cell_index].block
   //console.log('Block:');
   //console.log(block);
    if (GridObject.version == '1.12') {
      if (block.includes(':')) {
        var id = block.split(':')[0]
        var idm = block.split(':')[1]
      }
      else {
        var id = block
        var idm = 0
      }
      ctx.fillStyle = "#FFFFFF"
      //ctx.fillRect(x * clf + lw,z * clf + lw,clf - 2 * lw,clf - 2 * lw)
      ctx.drawImage(texture,16 * idm,16 * id,16,16,Math.floor(x * clf + lw),Math.floor(z * clf + lw) + 0.5,clf - lw + 0.5,clf - lw)
      //ctx.drawImage(texture,16 * idm,16 * id,16,16,x * clf,z * clf,clf,clf)
      //ctx.drawImage(texture,16 * idm, 16 * id,16,16,clf * x + GridObject.translate_x + size / (100 / lw),clf * z + GridObject.translate_z + size / (100 / lw),size - (size / (100 / lw)) * 2,size - (size / (100 / lw)) * 2)
      // works but not aligning with renderGrid's 'Grid'
    }
    else if (GridObject.version == '1.14') {
      var tc = getTextureCord(block)
      //console.log(tc,block,tc[0],tc[1],texture1_14,x * clf);
      ctx.fillStyle = "#FFFFFF"
      //console.log(texture1_14,16 * tc[0],16 * tc[1],16,16,x * clf + lw,z * clf + lw,clf - lw,Math.round(clf - lw));
      //ctx.fillRect(x * clf + lw,z * clf + lw,clf - 2 * lw,clf - 2 * lw)
      //ctx.drawImage(texture,16 * idm,16 * id,16,16,Math.floor(x * clf + lw),Math.floor(z * clf + lw),clf - lw,clf - lw)
      ctx.drawImage(texture1_14,16 * tc[0],16 * tc[1],16,16,Math.floor(x * clf + lw),Math.floor(z * clf + lw) + 0.5,clf - lw + 0.5,clf - lw)
    }
  }
  if (GridObject.selected.includes(cell_index)) {
    //---------Stroke--------------
    ctx.strokeStyle = "#00FFFF"      //lw = size / (100 / lw)
    ctx.fillStyle='#FF00FF';
    var lw2 = lw * GridObject.lineWidth_selected
    ctx.lineWidth = lw2
    //ctx.strokeRect(x * clf + lw * 1.5 + 0.5,z * clf + lw * 1.5 + 0.5,clf - lw * 2 - 1,clf - lw * 2 - 1) //worked!
    //ctx.fillRect(x * clf + lw,z * clf + lw,clf - lw,clf - lw) Fills Entire Rect
    //ctx.strokeRect(x * clf + lw2 + 0.5,z * clf + lw2 + 0.5,clf - lw2 - lw - 1,clf - lw2 - lw - 1) // works for lw2 = lw * 2
    ctx.strokeRect(x * clf + lw + lw2 / 2 + 0.5,z * clf + lw + lw2 / 2 + 0.5,clf - lw2 - lw - 1,clf - lw2 - lw - 1)
    ////ctx.strokeRect(x * clf + lw * 1.5,z * clf + lw * 1.5,clf - lw * 2,clf - lw * 2) //different Stroke...
    //---------Blue Fill---------
    /*ctx.fillStyle = "rgba(0,0,255,0.5)"
    ctx.fillRect(x * clf + lw,z * clf + lw,clf - lw,clf - lw)*/
    //---------Invert------------
    /*ctx.globalCompositeOperation='difference';
    ctx.fillStyle='white';
    ctx.fillRect(x * clf + lw,z * clf + lw,clf - lw,clf - lw)*/
  }
}
function renderCells(cell_arr) {
  for (var item in cell_arr) {
    renderCell(item)
  }
}
function renderCellLayer(layer) {
 //console.log('///////////////////');
  width = GridObject.x_size;
  height = GridObject.z_size;
  for (var x = 0; x < width; x++) {
    for (var z = 0; z < height; z++) {
      var cell_index = cellCord(x,layer,z)
      renderCell(cell_index)
    }
  }
 //console.log('///////////////////');
}
function renderLayer(layer,dl) {
  width = GridObject.x_size;
  height = GridObject.z_size;
  renderGrid(width,height,dl)
  renderCellLayer(layer)
}
function renderGrid(width,height,dl) {
  if (GridObject.lineWidth == -1) {
    return
  }
  var c = document.getElementById('Gridvisulator')
  var ctx = c.getContext('2d')
  ctx.strokeStyle = "#000000"
  if (dl) {
    ctx.clearRect(0,0,c.width,c.height) //debug
  }
  var size = GridObject.zoom * GridObject.defaultsize
  var lw = GridObject.lineWidth
  lw = Math.floor((size / (100 / lw)) / 2) * 2      //lw = size / (100 / lw)
  ctx.lineWidth = lw
  var clf = Math.floor(size - lw * 2)
  for (var w = 0; w < width; w++) {
    for (var h = 0; h < height; h++) {
      var wc = w
      var hc = h
      //ctx.strokeRect(w * clf + lw * 0.5,h * clf + lw * 0.5,clf,clf) //Worked
      //ctx.nsr(w * clf + lw * 0.5,h * clf + lw * 0.5,clf,clf);//debug
      if (lw / 2 == Math.floor(lw / 2)) { // if lw is even, then
        ctx.strokeRect(Math.floor(w * clf + lw / 2) + 0.5,Math.floor(h * clf + lw / 2) + 0.5,clf,clf)
        //console.log("x:",w,"y:",h,"clf:",clf,"lw:",lw,"FLOOREDLW",Math.floor(lw),"width:",Math.floor(clf),"c" + w + "x" + 0 + "x" + h,"XPos:",Math.floor(w * clf + lw / 2)  + 0.5,"YPos:",Math.floor(h * clf + lw / 2)  + 0.5)
      }
      else { //odd
        ctx.strokeRect(Math.floor(w * clf + lw / 2),Math.floor(h * clf + lw / 2) + 0.5,clf,clf)
      }
    }
  }
}
function setWidth(w) {
  GridObject.x_size = w
  GridObject.z_size = w
  //renderLayer(GridObject.current_y,true)
  AutoZoom()
}
function AutoZoom() {
  GridObject.zoom = ZoomCalc()
  //ctx.clearRect(0,0,9999,9999)
  renderLayer(GridObject.current_y,true)
}
function ZoomCalc() {
  var c = document.getElementById('Gridvisulator')
  // 2100                         = 80 * x * GridObject.x_size  | :80
  //2100 / 80                     = x * GridObject.x_size       | :GridObject.x_size
  //2100 / 80 / GridObject.x_size = x

  if (GridObject.x_size > GridObject.z_size) {
    return parseInt(c.width) / parseInt(GridObject.x_size) / GridObject.defaultsize
  }
  else {
    return parseInt(c.width) / parseInt(GridObject.z_size) / GridObject.defaultsize
  }
}
