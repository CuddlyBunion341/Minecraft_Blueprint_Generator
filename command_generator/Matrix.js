function scanAllOfData(width,height,data) {
  var layers = {}
  var minY;
  var maxY;
  for (var cord in data) {
    //console.log(cord);
    var y = parseInt(cord.split("x")[1])
    console.log("IS ",y,"LARGER THAN ",maxY,"? ",y > maxY);
    minY = minY ? minY : y
    maxY = maxY ? maxY : y
    minY = y < minY ? y : minY
    maxY = y > maxY ? y : maxY
  }
  console.log("FROM:",minY,"TO:",maxY);
  for (var i = minY; i <= maxY; i++) {
    layers[i] = Matrix(width,height,0,"cXxYxZ",data,"block",i)
    for (var r = 0; r < layers[i].length; r++) {
      for (var c = 0; c < layers[i][r].length; c++) {
        layers[i][r][c].push(0)
      }
    }
  }
  //return JSON.stringify(layers)
  return layers;
}
function Matrix(width,height,fill,cordformat="cXxYxZ",data,dataToFill,layer) {
  //width = integer
  //height = integer
  //fill = string
  //cordformat: big X, big Y, big Z example: cXxYxZ,cord_X_Y_Z,zerX'Y'Z etc...
  /*Dataformat:
  {"cord_10_2_1":{"filler":"9"}} etc...
  */
  var Matrix = []
  var row = []
  for (var h = 0; h < height; h++) {
    Matrix[h] = []
    for (var w = 0; w < width; w++) {
      Matrix[h].push([fill])
    }
  }
  for (cord in data) {
    var cord_data = data[cord][dataToFill]
    var x = cord.split("x")[0].split("c")[1]
    var y = cord.split("x")[1]
    var z = cord.split("x")[2]
    //console.log(cord);
    if (y != layer) {
      continue
    }
    Matrix[z][x] = [cord_data]
  }
  var row = "Layer: " + layer + "\n"
  for (var ri = 0; ri < Matrix.length; ri++) { //for row
    for (var ci = 0; ci < Matrix[ri].length; ci++) { //for cell in row
      row += Matrix[ri][ci] + ","
    }
    row += "\n"
  }
  console.log(row);
  return Matrix
}
var martix = [
  ["1","2","7"],
  ["4","5","9"],
  ["0","0","0"]
]
