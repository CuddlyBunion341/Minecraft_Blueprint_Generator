window.onload = function() {
  var div;
  var cellSize = 16
  var x_count = document.getElementsByTagName('img')[0].width / cellSize
  var y_count = document.getElementsByTagName('img')[0].height / cellSize
  for (var xc = 1; xc <= x_count; xc++) {
    for (var yc = 1; yc <= y_count; yc++) {
      var xcc = xc
      var ycc = yc
      div = document.createElement('div')
      div.classList.add("cell")
      div.style.width = cellSize.toString() + "px"
      div.style.height = cellSize.toString() + "px"
      div.style.left = ((xc - 1) * cellSize).toString() + "px"
      div.style.top = ((yc - 1) * cellSize).toString() + "px"
      div.addEventListener('click', function() {sendPos(gpfs(this).x,gpfs(this).y)});
      document.getElementById('holder').appendChild(div)
    }
  }
  start()
}
function gpfs(ele) {
  return {x:parseInt(ele.style.left.split('px')[0]) / 16,y:parseInt(ele.style.top.split('px')[0]) / 16}
}
function sendPos(x,y) {
  window.crd = [x,y]
  document.getElementById('crd').innerHTML = x + "\\" + y
  document.getElementsByClassName('hidden')[0].value = "[" + window.crd + "]"
  document.getElementsByClassName('hidden')[0].select()
  document.execCommand('copy');
  console.log(window.crd);
}
document.onkeyup = function(e) {
  switch (e.keyCode) {
    case 13:
      //[enter]
      //console.log("[ENTER]");
      assign(window.crd)
      window.i++
      console.log(window.i);
      update()
      break;
    case 8:
      //[\]
      //console.log("[delete]");
      window.i++
      update()
      break;
    case 27:
      log()
      break;
    default:

  }
}
function start() {
  window.i = 0
  window.crd = [0,0]
  update()
}
function assign(value) {
  bl14[window.i].texture_cord = value
}
function update() {
  document.getElementById('ct').innerHTML = "Block " + (window.i + 1) + " out of " + bl14.length
  document.getElementById('bd').innerHTML = bl14[window.i].display
  document.getElementById('bc').innerHTML = (JSON.stringify(bl14[window.i])).split(',"states"')[0] + ',"states":[...]}'
}
function log() {
  document.getElementById('teta').value = JSON.stringify(bl14)
}
function ci() {
  var num = parseInt(document.getElementById('ii').value)
  window.i = num - 1
  update()
}
