function cellcord(x,y,z) {
  return "c" + x + "x" + y + "x" + z
}
function mtc(clf,sw,rw,mx,my,y) { //mtc => mouse to cord
  //console.log(clf,sw,rw,mx,my,y);
  //console.log(((mx * (sw / rw)) / clf + ((GridObject.translate_x / clf) - (GridObject.translate_x / clf) * 2)).toFixed(3),((my * (sw / rw)) / clf + ((GridObject.translate_z / clf) - (GridObject.translate_z / clf) * 2)).toFixed(3));
  //console.log(clf,sw,rw,mx,my,y);
  //console.log(sw/rw);
  var x = Math.floor((mx * (sw / rw)) / clf + ((GridObject.translate_x / clf) - (GridObject.translate_x / clf) * 2)) + 1
  var z = Math.floor((my * (sw / rw)) / clf + ((GridObject.translate_z / clf) - (GridObject.translate_z / clf) * 2)) + 1
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
