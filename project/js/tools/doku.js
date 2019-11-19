var globalVariables = [
  "canvas",
  "canvasG",
  "ctx",
  "ctxG",
  "sw",
  "rw",
  "size",
  "lw",
  "clf"
]
var constantVariables = [
  "canvas",
  "canvasG",
  "ctx",
  "ctxG",
  "sw",
  "rw"
]
var nonConstantVariables = [
  "size",
  "lw",
  "clf"
]
function updateVariables() {
  window.size = GridObject.zoom * GridObject.defaultsize
  window.lw = GridObject.lineWidth
  window.lw = size / (100 / window.lw)      //lw = size / (100 / lw)
  var clf = Math.floor(size - lw * 2)
}
