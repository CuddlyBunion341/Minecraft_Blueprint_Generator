var toolObj = {
  tool:"brush",
  drag:0,
  overCanvas:0,
  dsl:{},
}
var cl = 1
function initToolEvents() {
  canvasG.addEventListener('mousedown',dragStart)
  canvasG.addEventListener('mousemove',drag)
  canvasG.addEventListener('mouseup',dragStop)
//Over Canvas Detect
  window.canvasG.addEventListener('mouseenter',function(e) {
    overCanvas = 1;
  })
  window.canvasG.addEventListener('mouseleave',function(e) {
  overCanvas = 0;
})
  /*window.canvas.addEventListener('mouseenter',function(e) {
  overCanvas = 1;
})
  window.canvas.addEventListener('mouseleave',function(e) {
  overCanvas = 0;
})*/
}
function dragStart(e) {
  toolObj.drag = 1
  toolObj.dsl = getCanvasMousePos(e) //drag start location
  toolObj.ccl = getCanvasMousePos(e) //canvas curent location
  var canvas = document.getElementById('Gridvisulator')
  var ctx = canvas.getContext('2d')
  var sw = canvas.width
  var rw = parseInt(canvas.style.width.split("px")[0])
  var mx = e.clientX - ctx.canvas.offsetLeft
  var my = e.clientY - ctx.canvas.offsetTop
  //clf,sw,rw,mx,my,y
  var ratio = sw / rw
  var mxC = mx * ratio
  var myC = my * ratio
  mxC = parseFloat(mxC.toFixed(3))
  myC = parseFloat(myC.toFixed(3))
  ///////////////////////////////////////////
  var size = GridObject.zoom * GridObject.defaultsize
  var lw = GridObject.lineWidth
  lw = size / (100 / lw)      //lw = size / (100 / lw)
  ctx.lineWidth = lw
  var clf = size - lw * 2
  ///////////////////////////////////////////
  w = 100
  cord = mtc(clf,sw,rw,mx,my,GridObject.current_y)
  ctx.fillStyle = "#FF6600"
  ctx.font = "30px Arial";
  //ctx.fillText(cord, mxC - 15, myC);
  //GridObject.Cells[cord] = {block: cl.toString()}// dd
  /*if (cl == 1) {
    cl = 2
  }
  else {
    cl = 1
  }
  renderCell(cord)// dd*/
  //ctx.fillRect(mxC - w/2,myC - w/2,w,w)
  //console.log(mx,my,ratio,mxC,myC);
  //document.getElementById('debug').innerHTML = cord;
  //console.log(cord);
  x = parseInt(cord.split("x")[0].split("c")[1])
  z = parseInt(cord.split("x")[2])
  if (x.toString().length == 1) {
    x = x * 10
  }
  if (z.toString().length == 1) {
    z = z * 10
  }
  ctx.fillStyle = "#" + x.toString(10) + "00" + z.toString(10)
  //console.log(ctx.fillStyle);
  var s = 50
  var mx = e.clientX - ctx.canvas.offsetLeft
  var my = e.clientY - ctx.canvas.offsetTop
  var sw = canvas.width
  var rw = parseInt(canvas.style.width.split("px")[0])
  //ctx.fillRect((mx * (sw / rw)),(my * (sw / rw)),s,s)
  newBrush()
  renderRect(toolObj.dsl,toolObj.ccl,false,false)
  floodfill()
}
function drag(e) {
  //var canvas = document.getElementById('Gridvisulator')
  //var ctx = canvas.getContext('2d')
  var size = GridObject.zoom * GridObject.defaultsize
  var lw = GridObject.lineWidth
  lw = size / (100 / lw)      //lw = size / (100 / lw)
  ctx.lineWidth = lw
  var clf = size - lw * 2
  /////////
  //var clf = GridObject.defaultsize * GridObject.zoom //ctx.canvas.offsetLeft
  var sw = canvas.width
  var rw = parseInt(canvas.style.width.split("px")[0])
  var mx = e.clientX - canvas.getBoundingClientRect().left
  var my = e.clientY - canvas.getBoundingClientRect().top
  var ratio = sw / rw
  var mxC = mx * ratio
  var myC = my * ratio
  mxC = parseFloat(mxC.toFixed(3))
  myC = parseFloat(myC.toFixed(3))
  cord = mtc(clf,sw,rw,mx,my,GridObject.current_y)
  toolObj.ccl = getCanvasMousePos(e) //canvas curent location
  document.getElementById('debug').innerHTML = cord
  //brush()
  newBrush()
  renderRect(toolObj.dsl,toolObj.ccl,false,false)
}
function dragStop(e) {
  toolObj.ccl = getCanvasMousePos(e) //canvas curent location
  calc(toolObj.dsl,toolObj.ccl,false,false)
  var zro = {x:0,y:0}
  renderRect(zro,zro,false,false)
  toolObj.drag = 0
}
function fillscr() {
  var canvas = document.getElementById('Gridvisulator')
  var ctx = canvas.getContext('2d')
  var sw = canvas.width
  var rw = parseInt(canvas.style.width.split("px")[0])
  ///////////////////////////////////////////
  var size = GridObject.zoom * GridObject.defaultsize
  var lw = GridObject.lineWidth
  lw = size / (100 / lw)      //lw = size / (100 / lw)
  ctx.lineWidth = lw
  var clf = size - lw * 2
  for (var i = 0; i < 2100; i++) {
    for (var a = 0; a < 2100; a++) {
      cord = mtc(clf,sw,rw,i,a,GridObject.current_y)
      x = parseInt(cord.split("x")[0].split("c")[1])
      z = parseInt(cord.split("x")[2])
      if (x.toString().length == 1) {
        x = x * 10
      }
      if (z.toString().length == 1) {
        z = z * 10
      }
      ctx.fillStyle = "#" + "00" + x.toString(10) + z.toString(10)
      var s = 5
      var mx = i
      var my = a
      var sw = canvas.width
      var rw = parseInt(canvas.style.width.split("px")[0])
      ctx.fillRect((mx * (sw / rw)),(my * (sw / rw)),s,s)
    }
  }
}
function getCanvasMousePos(e) {
  var x = e.clientX - ctx.canvas.offsetLeft
  var y = e.clientY - ctx.canvas.offsetTop
  return {x:x,y:y}
}
function Redraw(liwi,d1) {
  ctxG.clearRect(0,0,canvasG.width,canvasG.height)
  ctx.clearRect(0,0,canvas.width,canvas.height)
  ctxG.lineWidth = liwi
  //ctx.setLineDash([d1]);
  //ctxG.strokeRect(300,400,600,600)
  ctxG.beginPath();
  ctxG.setLineDash([d1]);
  ctxG.rect(300,400,600,600);
  ctxG.stroke();
}
