var toolObj = {
  tool:"brush",
  drag:0,
  overCanvas:0,
  wasOverCanvas:0,
  dsl:{},
}
var cl = 1
function initToolEvents() {
  document.addEventListener('mousedown',testBounds)
  canvasG.addEventListener('mousedown',dragStart)
  canvasG.addEventListener('mousemove',drag)
  document.addEventListener('mouseup',dragStop)
//Over Canvas Detect
  window.canvasG.addEventListener('mouseenter',function(e) {
    toolObj.overCanvas = 1;
  })
  window.canvasG.addEventListener('mouseleave',function(e) {
  toolObj.overCanvas = 0;
})
}
function testBounds(e) {
  if (toolObj.overCanvas == 1) {
    toolObj.wasOverCanvas = true
    return true
  }
  toolObj.wasOverCanvas = false
  return false
}
function dragStart(e) {
  if (testBounds(e)) {
    updateGlobalVar()
    toolObj.drag = 1
    toolObj.dsl = getCanvasMousePos(e) //drag start location
    toolObj.ccl = getCanvasMousePos(e) //canvas curent location
    newBrush(toolObj.ccl)
    renderRect(toolObj.dsl,toolObj.ccl,false,false)
    floodfill(toolObj.ccl)
  }
}
function drag(e) {
  if (toolObj.drag == 1) {
    toolObj.ccl = getCanvasMousePos(e) //canvas curent location
    var cord = mtc(window.clf,window.sw,window.rw,toolObj.ccl.x,toolObj.ccl.y,GridObject.current_y)
    document.getElementById('debug').innerHTML = cord
    newBrush(toolObj.ccl)
    renderRect(toolObj.dsl,toolObj.ccl,false,false)
  }
}
function dragStop(e) {
  if (toolObj.wasOverCanvas) {
    toolObj.ccl = getCanvasMousePos(e) //canvas curent location
    calc(toolObj.dsl,toolObj.ccl,false,false,[clf,sw,rw])
    var zro = {x:0,y:0}
    renderRect(zro,zro,false,false)
  }
  toolObj.drag = 0
}
function fillscr() {
  updateGlobalVar()
  for (var i = 0; i < 2100; i++) {
    for (var a = 0; a < 2100; a++) {
      cord = mtc(window.clf,window.sw,window.rw,i,a,GridObject.current_y)
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
      //sw canvas.width
      //rw parseInt(canvas.style.width.split("px")[0])
      ctx.fillRect((mx * (sw / rw)),(my * (sw / rw)),s,s)
    }
  }
}
function getCanvasMousePos(e) {
  var x = e.clientX - canvas.getBoundingClientRect().left
  var y = e.clientY - canvas.getBoundingClientRect().top
  return {x:x,y:y}
}
function Redraw(liwi,d1) {
  ctxG.clearRect(0,0,canvasG.width,canvasG.height)
  ctx.clearRect(0,0,canvas.width,canvas.height)
  ctxG.lineWidth = liwi
  ctxG.beginPath();
  ctxG.setLineDash([d1]);
  ctxG.rect(300,400,600,600);
  ctxG.stroke();
}
