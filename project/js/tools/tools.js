var toolObj = {
  brush:undefined,
  drag:0,
  overCanvas:0,
  old_mouseX:0,
  old_mouseY:0,
  new_mouseX:0,
  new_mouseY:0,
}
document.addEventListener('mouseup', function(e) {
  toolObj.drag = 0
})
document.addEventListener('mousedown', function(e) {
  toolObj.drag = 1
})
function fillscr() {
  var canvas = document.getElementById('Gridvisulator')
  var ctx = canvas.getContext('2d')
  for (var i = 0; i < 2100; i++) {
    for (var a = 0; a < 2100; a++) {
      txt = mtc(GridObject.defaultsize * GridObject.zoom,canvas.width,parseInt(canvas.style.width.split("px")[0]),i,a,0)
      x = parseInt(txt.split("x")[0].split("c")[1])
      z = parseInt(txt.split("x")[2])
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
document.addEventListener('mousemove', function(e) {
  var canvas = document.getElementById('Gridvisulator')
  var ctx = canvas.getContext('2d')
  var clf = GridObject.defaultsize * GridObject.zoom
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
  console.log(mxC,myC);
  console.log(mx,my);
  console.log('/////////');
  //console.log(mx,my,ratio,mxC,myC);
  txt = mtc(clf,sw,rw,mx,my,0)
  //document.getElementById('debug').innerHTML = txt;
  //console.log(txt);
  x = parseInt(txt.split("x")[0].split("c")[1])
  z = parseInt(txt.split("x")[2])
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

})
window.onload = function(){
  //console.log(['LOADING...']);
  //fillUl(megarr,1)
  //console.log(['fillUl()']);
  setup()
  let canvas38 = document.getElementById('Graphicvisulator')
  let canvas = document.getElementById('Gridvisulator')
  canvas38.addEventListener('mouseenter',function(e) {
    overCanvas = 1;
  })
  canvas38.addEventListener('mouseleave',function(e) {
    overCanvas = 0;
  })
  canvas.addEventListener('mouseenter',function(e) {
    overCanvas = 1;
  })
  canvas.addEventListener('mouseleave',function(e) {
    overCanvas = 0;
  })
}
