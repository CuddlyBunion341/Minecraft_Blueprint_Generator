function cellcord(x,y,z) {
  return "c" + x + "x" + y + "x" + z
}
function mtc(clf,sw,rw,mx,my,y) { //mtc => mouse to cord
  ratio = sw / rw
  var x = Math.floor(mx * ratio / clf + ((GridObject.translate_x / clf) - (GridObject.translate_x / clf) * 2))
  var z = Math.floor(my * ratio / clf + ((GridObject.translate_z / clf) - (GridObject.translate_z / clf) * 2))
  return cellcord(x,y,z)
}
function getRandom(arr) {
  var ri = Math.floor(Math.random() * arr.length)
  return arr[ri]
}
function deleteAir() {
  for (var cord in GridObject.Cells) {
    if (GridObject.Cells[cord].block == 0) {
      GridObject.Cells[cord] = null
    }
  }
}
function min(x,y) {
  return Math.min(x,y)
}
function max(x,y) {
  return Math.max(x,y)
}
