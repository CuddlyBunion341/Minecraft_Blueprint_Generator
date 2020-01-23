function cellcord(x,y,z) {
  return "c" + x + "x" + y + "x" + z
}
function compress(data) { //data = GridObject.Cells
  //Dataformat: {"c2x0x1": {"block": "stone"}}
  //RectReturn: "[Rect:c2x0x1,c5x0x6{Stone}]"
  //CellReturn: "[c4x0x1{Cobblestone}]"
  //Returnformat: "[Rect:c2x0x1,c5x0x6{Stone}];[c4x0x1{Cobblestone}];[c4x0x1{Cobblestone}]"
  //Returnformat2: ["Rect:c2x0x1,c5x0x6{Stone}","c4x0x1{Cobblestone}","c4x0x1{Cobblestone}"]
  var width = 8
  var height = 8
  var minY = 0;
  var maxY = 0;
  var materials = []
  for (cellcord in data) {
    var y = parseInt(cellcord.split("x")[1])
    if (y > maxY) {
      maxY = y
    }
    if (y < minY) {
      minY = y
    }
    var block = data[cellcord].block
    if (materials.indexOf(block) == -1) {
      materials.push(block)
    }
  }
  console.log(materials);
  //console.log(materials,minY,maxY);
  var bestArr = {}
  for (var sdc = minY; sdc <= maxY ; sdc++) {
    for (var mi = 0; mi < materials.length; mi++) {
      for (var w = 0; w < width; w++) {//Size
        for (var h = 0; h < height; h++) {//Size
          for (var x = 0; x < width; x++) {//Scan
            for (var y = 0; y < height; y++) {//Scan
              if (x + w > width - 1 || y + h > height - 1) {
                continue
              }
              var str = "[Rect:c" + x + "x" + sdc + "x" + y + ",c" + (x + w) + "x" + sdc + "x" + (y + h) + "{" + materials[mi] + "}]"
              //console.log(str,w + 1,h + 1)
              var yH = "y_" + sdc
              //console.log(analyse(str,data));
              var mat = "b" + materials[mi]
              var points = analyse(str,data)[0]
              var penalty = analyse(str,data)[1]
              if (points < 1 || points / penalty < 0.5) {
                continue
              }
              if (bestArr[yH]) {
                if (bestArr[yH][mat]) {
                  //console.log(materials[mi]);
                  if (points > bestArr[yH][mat].points) {
                    bestArr[yH][mat].points = points
                    bestArr[yH][mat].penalty = penalty
                    bestArr[yH][mat].str = str
                  }
                }
                else {
                  bestArr[yH][mat] = {}
                  bestArr[yH][mat].points = points
                  bestArr[yH][mat].penalty = penalty
                  bestArr[yH][mat].str = str
                }
              }
              else {
                bestArr[yH] = {}
                bestArr[yH][mat] = {}
                bestArr[yH][mat].points = points
                bestArr[yH][mat].penalty = penalty
                bestArr[yH][mat].str = str
              }
            }
          }
        }
      }
    }
  }
  /*BestArr format:
  {
    "y_0": {
      "b1": {
        "points": 64,
        "str": "[Rect:c0x0x0,c7x0x7{1}]",
        "penalty": 0
      },
      "b1:1": {
        "points": 64,
        "str": "[Rect:c0x0x0,c7x0x7{1}]",
        "penalty": 0
    }
  }
  */
  return bestArr
}
function analyse(string,data=null) {
  //Stringformat: "[Rect:c2x0x1,c5x0x6{Stone}]"
  var fromCell = string.split("Rect:")[1].split(",")[0]
  var toCell = string.split(",")[1].split("{")[0]
  var mat = string.split("{")[1].split("}")[0]
  //console.log("Analysed:  MAT:",mat,"FROM:",fromCell,"TO:",toCell);
  var x_s = parseInt(fromCell.split("x")[0].split("c")[1])
  var y_s = parseInt(fromCell.split("x")[1])
  var z_s = parseInt(fromCell.split("x")[2])

  var x_e = parseInt(toCell.split("x")[0].split("c")[1])
  var y_e = parseInt(toCell.split("x")[1])
  var z_e = parseInt(toCell.split("x")[2])
  var points = 0
  var maxPoints = 0
  var penalty = 0
  //console.log(maxPoints);
  for (var x = x_s; x <= x_e; x++) {
    for (var y = y_s; y <= y_e; y++) {
      for (var z = z_s; z <= z_e; z++) {
        maxPoints++
        //console.log("CELL: [C",x,"x",y,"x",z,"]");
        //console.log(x,y,z);
        var cord = "c" + x + "x" + y + "x" + z
        if (data[cord]) {
          if (data[cord].block == mat) {
            //console.log("POINT ADDED!!!");
            points++
            continue
          }
        }
        penalty++
      }
    }
  }
  //console.log(points / maxPoints * 100 + "%");
  return [points,penalty]
}
