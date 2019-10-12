function renderCell(cell_index) {
 //console.log("rendering [",cell_index,"]");
  //declare all Variables
  var x = cell_index.split('x')[0].split('c')[1]
  var y = cell_index.split('x')[1]
  var z = cell_index.split('x')[2]
  var size = GridObject.zoom * GridObject.defaultsize;
  if (GridObject.spacefactor == -1) {
    var clf = size
  }
  else {
    var clf = size + size / GridObject.spacefactor;
  }
  var canvas = document.getElementById('Gridvisulator');
  var ctx = canvas.getContext('2d');
  ctx.globalCompositeOperation = "source-over"
  var lw = GridObject.lineWidth;
  lw = size / (100 / lw)      //lw = size / (100 / lw)
  ctx.lineWidth = lw
  var clf = size - lw * 2
  var combinedRender = false
  if (!combinedRender) {
    ctx.clearRect(x * clf + lw,z * clf + lw,clf - lw,clf - lw)
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
      /*var texture = document.createElement("img") //new Image()
      texture.src = 'image-files/1.12/top.png'
      texture.style.imageRendering = 'pixelated'*/
     //console.log(texture);
      //ctx.drawImage(texture,16 * idm,16 *  id,16,16,)
      //ctx.drawImage(texture,16 * idm, 16 * id,16,16,0,0,size,size)
      //ctx.fillStyle = 'red'                                          //debug (sets fillcolor to red to be used below\/)
      //ctx.fillRect(x * clf + lw,z * clf + lw,clf - lw,clf - lw)      //debug (fills square with red color /\)
      //ctx.drawImage(texture,16 * idm, 16 * id,16,16,)
      ctx.fillStyle = "#FFFFFF"
      //ctx.fillRect(x * clf + lw,z * clf + lw,clf - 2 * lw,clf - 2 * lw)

      /*if (texture.complete) {
       //console.log("LOADED :)");
        ctx.drawImage(texture,16 * idm,16 * id,16,16,x * clf + lw,z * clf + lw,clf - lw,clf - lw)
      } else {
       //console.log("not LOADED :(");
        texture.onload = function () {
          ctx.drawImage(texture,16 * idm,16 * id,16,16,x * clf + lw,z * clf + lw,clf - lw,clf - lw)
        };
      }*/
      //ctx.drawImage(texture,16 * idm,16 * id,16,16,x * clf + lw,z * clf + lw,clf - lw,clf - lw) /////efuvy7ejdhufy4r3hui
      ctx.drawImage(texture,16 * idm,16 * id,16,16,x * clf + lw,z * clf + lw,clf - lw,Math.round(clf - lw))
      //ctx.drawImage(texture,16 * idm,16 * id,16,16,x * clf,z * clf,clf,clf)
      //ctx.drawImage(texture,16 * idm, 16 * id,16,16,clf * x + GridObject.translate_x + size / (100 / lw),clf * z + GridObject.translate_z + size / (100 / lw),size - (size / (100 / lw)) * 2,size - (size / (100 / lw)) * 2)
      // works but not aligning with renderGrid's 'Grid'
    }
    else if (GridObject.version == '1.14') {

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
  lw = size / (100 / lw)      //lw = size / (100 / lw)
  ctx.lineWidth = lw
  var clf = size - lw * 2
  for (var w = 0; w < width; w++) {
    for (var h = 0; h < height; h++) {
      //ctx.strokeRect(w * clf + lw * 0.5,h * clf + lw * 0.5,clf,clf) //Worked
      ctx.strokeRect(w * clf + lw * 0.5,h * clf + lw * 0.5,clf,Math.round(clf));//debug
    }
  }
}
function AutoZoom() {
  GridObject.zoom = ZoomCalc()
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
