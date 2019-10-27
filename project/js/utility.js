function cellcord(x,y,z) {
  return "c" + x + "x" + y + "x" + z
}
function getFromArr(arr,testValue,testProperty,getProperty) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i][testProperty] == testValue) {
      if (arr[i][getProperty]) {
        return arr[i][getProperty]
      }
      else {
        return false
      }
    }
  }
}
function getTextureCord(id) {
  if (getFromArr(blocklist_1_14,id,"id","texture_cord")) {
    return getFromArr(blocklist_1_14,id,"id","texture_cord")
  }
  return [-16,-16]
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
function isInBounds(x,z) {
  return x + 1 <= GridObject.x_size && z + 1 <= GridObject.z_size && x > -1 && z > -1
}
