function compress_new(width,height,data) {
  var materials = []
  var matrixObject = scanAllOfData(width,height,data)
  var compressed_string = ""
  for (var layer in matrixObject) {
    var c_layer = matrixObject[layer]
    ////console.log(layer,"//////////////////////");
    for (var r = 0; r < c_layer.length; r++) {
      var c_row = c_layer[r]
      ////console.log(JSON.stringify(c_row) + "         " + r);
      for (var c = 0; c < c_row.length; c++) {
        var c_cell = c_row[c]
        ////console.log(c_cell);
        var c_cell_B = c_cell[0]
        if (c_cell_B == 0) {
          continue
        }
        var testCellArr = []
        testCellArr.push([c,r]) //c = x, r = y
        if (c_row[c][1] == 1) {
          //console.log("SKIPPING","[c",c,"x",layer,"x",r,"]","BLOCK:",c_cell_B,"MATRIXCELL:",c_row[c]);
          continue;
        }
        //console.log("REGISTERING","[c",c,"x",layer,"x",r,"]","BLOCK:",c_cell_B);
        c_row[c][1] = 1
        while (true) {
          //expand right
          if (!c_row[testCellArr[testCellArr.length - 1][0] + 1]) {
            //console.log("Cannot expand right![" + JSON.stringify(testCellArr) + "]Mat:",c_cell_B);
            break;
          }
          //console.log("EXPANDING [RIGHT]!",c,r,c_cell_B);
          var rmi = testCellArr[testCellArr.length - 1] //[x,y] so: rmi[0] = x_index and rmi[1] = y_index
          if (c_row[rmi[0] + 1][0] == c_cell_B && c_row[rmi[0] + 1][1] == 0) {
            testCellArr.push([rmi[0] + 1,rmi[1]])
            //console.log("SETTING[c" + (rmi[0] + 1) + "x" + layer + "x" + r + "] to {1} in MATRIX (LAYER:",layer,")",JSON.stringify(testCellArr));
            c_row[rmi[0] + 1][1] = 1
          }
          else {
            //console.log("Cannot expand right![" + JSON.stringify(testCellArr) + "]Mat:",c_cell_B);
            break;
          }
        }
        var y_offset = 1
        while (true) {
          //expand down
          var exit = false
          for (var tc = 0; tc < testCellArr.length; tc++) {
            var t_x = testCellArr[tc][0]
            var t_y = testCellArr[tc][1]
            if (t_y + y_offset > c_layer.length - 1) {
              exit = true
              break;
            }
            //console.log("EXPANDING [DOWN]!",c,r,c_cell_B);
            if (c_layer[t_y + y_offset][t_x][0] == c_cell_B && c_layer[t_y + y_offset][t_x][1] == 0) {
              //console.log("SETTING[c" + t_x + "x" + layer + "x" + (t_y + y_offset) + "] to {1} in MATRIX (LAYER:",layer,") OFFSET",y_offset,JSON.stringify(testCellArr));
            }
            else {
              exit = true
            }
          }
          if (exit) {
            //console.log("Cannot expand DOWN![" + JSON.stringify(testCellArr) + "]Mat:",c_cell_B,"OFFSET:",y_offset);
            break;
          }
          for (var tc2 = 0; tc2 < testCellArr.length; tc2++) {
            var t_x = testCellArr[tc2][0]
            var t_y = testCellArr[tc2][1]
            c_layer[t_y + y_offset][t_x][1] = 1
          }
          y_offset++
        }
        ////console.log(JSON.stringify(testCellArr),"AR,Layer:",layer,"MAT:",c_cell_B,"expand",y_offset - 1);
        ////console.log("Array:",JSON.stringify(testCellArr),"Offset:",y_offset,"Layer:",layer,"Mat:",c_cell_B)
        var blockString = "{" + c_cell_B + "}"
        var cordStartString = "c" + testCellArr[0][0] + "x" + layer + "x" + testCellArr[0][1]
        var cordEndString = "c" + testCellArr[testCellArr.length - 1][0] + "x" + layer + "x" + (testCellArr[testCellArr.length - 1][1] + y_offset - 1)
        if (testCellArr.length == 1 && y_offset - 1 == 0) { //SetBlock c_cell_B
          compressed_string += "Block:" + cordStartString + blockString + ";"
          //console.log("Block:" + cordStartString + blockString + ";");
        }
        else {//fill block
          compressed_string += "Rect:" + cordStartString + "," + cordEndString + blockString + ";"
          //console.log("Rect:" + cordStartString + "," + cordEndString + blockString + ";");
        }
      }
    }
  }
  //Returnformat: "[Rect:c2x0x1,c5x0x6{Stone}];[c4x0x1{Cobblestone}];[c4x0x1{Cobblestone}]"
  //console.log(compressed_string);
  //console.log(matrixObject);
  return compressed_string
}
/*var bird = {
  "c2x0x1": {
    "block": "35:3"
  },
  "c2x0x2": {
    "block": "35:3"
  },
  "c2x0x3": {
    "block": "35"
  },
  "c1x1x1": {
    "block": "0"
  },
  "c2x1x1": {
    "block": "0"
  },
  "c4x1x4": {
    "block": "0"
  },
  "c10x0x0": {
    "block": "35:3"
  },
  "c6x0x0": {
    "block": "35:3"
  },
  "c16x0x6": {
    "block": "35"
  },
  "c16x0x5": {
    "block": "35"
  },
  "c16x0x4": {
    "block": "35"
  },
  "c16x0x3": {
    "block": "35"
  },
  "c16x0x2": {
    "block": "35:3"
  },
  "c16x0x1": {
    "block": "35:3"
  },
  "c16x0x0": {
    "block": "35:3"
  },
  "c17x0x0": {
    "block": "35:3"
  },
  "c18x0x0": {
    "block": "35:3"
  },
  "c19x0x0": {
    "block": "35:3"
  },
  "c20x0x0": {
    "block": "35:3"
  },
  "c21x0x0": {
    "block": "35:3"
  },
  "c22x0x0": {
    "block": "35:3"
  },
  "c23x0x0": {
    "block": "35:3"
  },
  "c24x0x0": {
    "block": "35:3"
  },
  "c25x0x0": {
    "block": "35:3"
  },
  "c26x0x0": {
    "block": "35:3"
  },
  "c27x0x0": {
    "block": "35:3"
  },
  "c28x0x0": {
    "block": "35:3"
  },
  "c29x0x0": {
    "block": "35:3"
  },
  "c29x0x1": {
    "block": "35:3"
  },
  "c29x0x2": {
    "block": "35:3"
  },
  "c29x0x3": {
    "block": "35:3"
  },
  "c29x0x4": {
    "block": "35:3"
  },
  "c29x0x5": {
    "block": "35:3"
  },
  "c29x0x6": {
    "block": "35:3"
  },
  "c29x0x7": {
    "block": "35:3"
  },
  "c29x0x8": {
    "block": "35:3"
  },
  "c29x0x9": {
    "block": "35:3"
  },
  "c29x0x10": {
    "block": "35:3"
  },
  "c29x0x11": {
    "block": "35:3"
  },
  "c29x0x12": {
    "block": "35:3"
  },
  "c29x0x13": {
    "block": "35:3"
  },
  "c29x0x14": {
    "block": "35:3"
  },
  "c29x0x15": {
    "block": "35:3"
  },
  "c29x0x16": {
    "block": "35:3"
  },
  "c29x0x17": {
    "block": "35:3"
  },
  "c29x0x18": {
    "block": "35:3"
  },
  "c29x0x19": {
    "block": "35:3"
  },
  "c29x0x20": {
    "block": "35:3"
  },
  "c29x0x21": {
    "block": "35:3"
  },
  "c29x0x22": {
    "block": "35:3"
  },
  "c29x0x23": {
    "block": "35:3"
  },
  "c29x0x24": {
    "block": "35:3"
  },
  "c29x0x25": {
    "block": "35:3"
  },
  "c29x0x26": {
    "block": "35:13"
  },
  "c29x0x27": {
    "block": "35:13"
  },
  "c29x0x28": {
    "block": "35:12"
  },
  "c29x0x29": {
    "block": "35:12"
  },
  "c28x0x29": {
    "block": "35:12"
  },
  "c28x0x28": {
    "block": "35:12"
  },
  "c28x0x27": {
    "block": "35:12"
  },
  "c28x0x26": {
    "block": "35:13"
  },
  "c28x0x25": {
    "block": "35:3"
  },
  "c28x0x24": {
    "block": "35:3"
  },
  "c28x0x23": {
    "block": "35:3"
  },
  "c28x0x22": {
    "block": "35:3"
  },
  "c28x0x21": {
    "block": "35:3"
  },
  "c28x0x20": {
    "block": "35:3"
  },
  "c28x0x19": {
    "block": "35:3"
  },
  "c28x0x18": {
    "block": "35:3"
  },
  "c28x0x17": {
    "block": "35:3"
  },
  "c28x0x16": {
    "block": "35:3"
  },
  "c28x0x15": {
    "block": "35:3"
  },
  "c28x0x14": {
    "block": "35:3"
  },
  "c28x0x13": {
    "block": "35:3"
  },
  "c28x0x12": {
    "block": "35:3"
  },
  "c28x0x11": {
    "block": "35:3"
  },
  "c28x0x10": {
    "block": "35:3"
  },
  "c28x0x9": {
    "block": "35:3"
  },
  "c28x0x8": {
    "block": "35:3"
  },
  "c28x0x7": {
    "block": "35:3"
  },
  "c28x0x6": {
    "block": "35:3"
  },
  "c28x0x5": {
    "block": "35:3"
  },
  "c28x0x4": {
    "block": "35:3"
  },
  "c28x0x3": {
    "block": "35:3"
  },
  "c28x0x2": {
    "block": "35:3"
  },
  "c28x0x1": {
    "block": "35:3"
  },
  "c27x0x1": {
    "block": "35:3"
  },
  "c27x0x2": {
    "block": "35:3"
  },
  "c27x0x3": {
    "block": "35:3"
  },
  "c27x0x4": {
    "block": "35:3"
  },
  "c27x0x5": {
    "block": "35:3"
  },
  "c27x0x6": {
    "block": "35:3"
  },
  "c27x0x7": {
    "block": "35:3"
  },
  "c27x0x8": {
    "block": "35:3"
  },
  "c27x0x9": {
    "block": "35:3"
  },
  "c27x0x10": {
    "block": "35:3"
  },
  "c27x0x11": {
    "block": "35:3"
  },
  "c27x0x12": {
    "block": "35:3"
  },
  "c27x0x13": {
    "block": "35:3"
  },
  "c27x0x14": {
    "block": "35:3"
  },
  "c27x0x15": {
    "block": "35:3"
  },
  "c27x0x16": {
    "block": "35:3"
  },
  "c27x0x17": {
    "block": "35:3"
  },
  "c27x0x18": {
    "block": "35:3"
  },
  "c27x0x19": {
    "block": "35:3"
  },
  "c27x0x20": {
    "block": "35:3"
  },
  "c27x0x21": {
    "block": "35:3"
  },
  "c27x0x22": {
    "block": "35:3"
  },
  "c27x0x23": {
    "block": "35:3"
  },
  "c27x0x24": {
    "block": "35:3"
  },
  "c27x0x25": {
    "block": "35:3"
  },
  "c27x0x26": {
    "block": "35:13"
  },
  "c27x0x27": {
    "block": "35:12"
  },
  "c27x0x28": {
    "block": "35:12"
  },
  "c27x0x29": {
    "block": "35:12"
  },
  "c26x0x29": {
    "block": "35:12"
  },
  "c26x0x28": {
    "block": "35:12"
  },
  "c26x0x27": {
    "block": "35:12"
  },
  "c26x0x26": {
    "block": "35:13"
  },
  "c26x0x25": {
    "block": "35:3"
  },
  "c26x0x24": {
    "block": "35:15"
  },
  "c26x0x23": {
    "block": "35:3"
  },
  "c26x0x22": {
    "block": "35:3"
  },
  "c26x0x21": {
    "block": "35:3"
  },
  "c26x0x20": {
    "block": "35:3"
  },
  "c26x0x19": {
    "block": "35:3"
  },
  "c26x0x18": {
    "block": "35:3"
  },
  "c26x0x17": {
    "block": "35:3"
  },
  "c26x0x16": {
    "block": "35:3"
  },
  "c26x0x15": {
    "block": "35:3"
  },
  "c26x0x14": {
    "block": "35:3"
  },
  "c26x0x13": {
    "block": "35:3"
  },
  "c26x0x12": {
    "block": "35:3"
  },
  "c26x0x11": {
    "block": "35:3"
  },
  "c26x0x10": {
    "block": "35:3"
  },
  "c26x0x9": {
    "block": "35:3"
  },
  "c26x0x8": {
    "block": "35:3"
  },
  "c26x0x7": {
    "block": "35"
  },
  "c26x0x6": {
    "block": "35"
  },
  "c26x0x5": {
    "block": "35"
  },
  "c26x0x4": {
    "block": "35"
  },
  "c26x0x3": {
    "block": "35:3"
  },
  "c26x0x2": {
    "block": "35:3"
  },
  "c26x0x1": {
    "block": "35:3"
  },
  "c25x0x1": {
    "block": "35:3"
  },
  "c25x0x2": {
    "block": "35:3"
  },
  "c25x0x3": {
    "block": "35"
  },
  "c25x0x4": {
    "block": "35"
  },
  "c25x0x5": {
    "block": "35"
  },
  "c25x0x6": {
    "block": "35"
  },
  "c25x0x7": {
    "block": "35"
  },
  "c25x0x8": {
    "block": "35"
  },
  "c25x0x9": {
    "block": "35:3"
  },
  "c25x0x10": {
    "block": "35:3"
  },
  "c25x0x11": {
    "block": "35:3"
  },
  "c25x0x12": {
    "block": "35:3"
  },
  "c25x0x13": {
    "block": "35:4"
  },
  "c25x0x14": {
    "block": "35:4"
  },
  "c25x0x15": {
    "block": "35:4"
  },
  "c25x0x16": {
    "block": "35:4"
  },
  "c25x0x17": {
    "block": "35:3"
  },
  "c25x0x18": {
    "block": "35:3"
  },
  "c25x0x19": {
    "block": "35:3"
  },
  "c25x0x20": {
    "block": "35:3"
  },
  "c25x0x21": {
    "block": "35:3"
  },
  "c25x0x22": {
    "block": "35:3"
  },
  "c25x0x23": {
    "block": "35:3"
  },
  "c25x0x24": {
    "block": "35:3"
  },
  "c25x0x25": {
    "block": "35:3"
  },
  "c25x0x26": {
    "block": "35:13"
  },
  "c25x0x27": {
    "block": "35:12"
  },
  "c25x0x28": {
    "block": "35:12"
  },
  "c25x0x29": {
    "block": "35:12"
  },
  "c24x0x29": {
    "block": "35:12"
  },
  "c24x0x28": {
    "block": "35:12"
  },
  "c24x0x27": {
    "block": "35:12"
  },
  "c24x0x26": {
    "block": "35:13"
  },
  "c24x0x25": {
    "block": "35:3"
  },
  "c24x0x24": {
    "block": "35:3"
  },
  "c24x0x23": {
    "block": "35:3"
  },
  "c24x0x22": {
    "block": "35:3"
  },
  "c24x0x21": {
    "block": "35:3"
  },
  "c24x0x20": {
    "block": "35:3"
  },
  "c24x0x19": {
    "block": "35:3"
  },
  "c24x0x18": {
    "block": "35:3"
  },
  "c24x0x17": {
    "block": "35:4"
  },
  "c24x0x16": {
    "block": "35:4"
  },
  "c24x0x15": {
    "block": "35:4"
  },
  "c24x0x14": {
    "block": "35:4"
  },
  "c24x0x13": {
    "block": "35:4"
  },
  "c24x0x12": {
    "block": "35:3"
  },
  "c24x0x11": {
    "block": "35:3"
  },
  "c24x0x10": {
    "block": "35:3"
  },
  "c24x0x9": {
    "block": "35:3"
  },
  "c24x0x8": {
    "block": "35"
  },
  "c24x0x7": {
    "block": "35"
  },
  "c24x0x6": {
    "block": "35"
  },
  "c24x0x5": {
    "block": "35"
  },
  "c24x0x4": {
    "block": "35"
  },
  "c24x0x3": {
    "block": "35"
  },
  "c24x0x2": {
    "block": "35:3"
  },
  "c24x0x1": {
    "block": "35:3"
  },
  "c23x0x1": {
    "block": "35:3"
  },
  "c23x0x2": {
    "block": "35:3"
  },
  "c23x0x3": {
    "block": "35"
  },
  "c23x0x4": {
    "block": "35"
  },
  "c23x0x5": {
    "block": "35"
  },
  "c23x0x6": {
    "block": "35"
  },
  "c23x0x7": {
    "block": "35"
  },
  "c23x0x8": {
    "block": "35"
  },
  "c23x0x9": {
    "block": "35:3"
  },
  "c23x0x10": {
    "block": "35:3"
  },
  "c23x0x11": {
    "block": "35:3"
  },
  "c23x0x12": {
    "block": "35:3"
  },
  "c23x0x13": {
    "block": "35:4"
  },
  "c23x0x14": {
    "block": "35:4"
  },
  "c23x0x15": {
    "block": "35"
  },
  "c23x0x16": {
    "block": "35"
  },
  "c23x0x17": {
    "block": "35:4"
  },
  "c23x0x18": {
    "block": "35:3"
  },
  "c23x0x19": {
    "block": "35:3"
  },
  "c23x0x20": {
    "block": "35:3"
  },
  "c23x0x21": {
    "block": "35:3"
  },
  "c23x0x22": {
    "block": "35:3"
  },
  "c23x0x23": {
    "block": "35:3"
  },
  "c23x0x24": {
    "block": "35:3"
  },
  "c23x0x25": {
    "block": "35:3"
  },
  "c23x0x26": {
    "block": "35:13"
  },
  "c23x0x27": {
    "block": "35:12"
  },
  "c23x0x28": {
    "block": "35:12"
  },
  "c23x0x29": {
    "block": "35:12"
  },
  "c22x0x29": {
    "block": "35:12"
  },
  "c22x0x28": {
    "block": "35:12"
  },
  "c22x0x27": {
    "block": "35:13"
  },
  "c22x0x26": {
    "block": "35:13"
  },
  "c22x0x25": {
    "block": "35:3"
  },
  "c22x0x24": {
    "block": "35:3"
  },
  "c22x0x23": {
    "block": "35:3"
  },
  "c22x0x22": {
    "block": "35:3"
  },
  "c22x0x21": {
    "block": "35:3"
  },
  "c22x0x20": {
    "block": "35:3"
  },
  "c22x0x19": {
    "block": "35:3"
  },
  "c22x0x18": {
    "block": "35:3"
  },
  "c22x0x17": {
    "block": "35:4"
  },
  "c22x0x16": {
    "block": "35"
  },
  "c22x0x15": {
    "block": "35:15"
  },
  "c22x0x14": {
    "block": "35"
  },
  "c22x0x13": {
    "block": "35:4"
  },
  "c22x0x12": {
    "block": "35:3"
  },
  "c22x0x11": {
    "block": "35:3"
  },
  "c22x0x10": {
    "block": "35:3"
  },
  "c22x0x9": {
    "block": "35:3"
  },
  "c22x0x8": {
    "block": "35"
  },
  "c22x0x7": {
    "block": "35"
  },
  "c22x0x6": {
    "block": "35"
  },
  "c22x0x5": {
    "block": "35"
  },
  "c22x0x4": {
    "block": "35"
  },
  "c22x0x3": {
    "block": "35"
  },
  "c22x0x2": {
    "block": "35:3"
  },
  "c22x0x1": {
    "block": "35:3"
  },
  "c21x0x1": {
    "block": "35:3"
  },
  "c21x0x2": {
    "block": "35:3"
  },
  "c21x0x3": {
    "block": "35"
  },
  "c21x0x4": {
    "block": "35"
  },
  "c21x0x5": {
    "block": "35"
  },
  "c21x0x6": {
    "block": "35"
  },
  "c21x0x7": {
    "block": "35"
  },
  "c21x0x8": {
    "block": "35"
  },
  "c21x0x9": {
    "block": "35:3"
  },
  "c21x0x10": {
    "block": "35:3"
  },
  "c21x0x11": {
    "block": "35:3"
  },
  "c21x0x12": {
    "block": "35:3"
  },
  "c21x0x13": {
    "block": "35:4"
  },
  "c21x0x14": {
    "block": "35"
  },
  "c21x0x15": {
    "block": "35"
  },
  "c21x0x16": {
    "block": "35"
  },
  "c21x0x17": {
    "block": "35:4"
  },
  "c21x0x18": {
    "block": "35:3"
  },
  "c21x0x19": {
    "block": "35:3"
  },
  "c21x0x20": {
    "block": "35:3"
  },
  "c21x0x21": {
    "block": "35:3"
  },
  "c21x0x22": {
    "block": "35:3"
  },
  "c21x0x23": {
    "block": "35:3"
  },
  "c21x0x24": {
    "block": "35:3"
  },
  "c21x0x25": {
    "block": "35:3"
  },
  "c21x0x26": {
    "block": "35:3"
  },
  "c21x0x27": {
    "block": "35:13"
  },
  "c21x0x28": {
    "block": "35:12"
  },
  "c21x0x29": {
    "block": "35:12"
  },
  "c20x0x29": {
    "block": "35:12"
  },
  "c20x0x28": {
    "block": "35:13"
  },
  "c20x0x27": {
    "block": "35:13"
  },
  "c20x0x26": {
    "block": "35:15"
  },
  "c20x0x25": {
    "block": "35:3"
  },
  "c20x0x24": {
    "block": "35:3"
  },
  "c20x0x23": {
    "block": "35:3"
  },
  "c20x0x22": {
    "block": "35:3"
  },
  "c20x0x21": {
    "block": "35:3"
  },
  "c20x0x20": {
    "block": "35:3"
  },
  "c20x0x19": {
    "block": "35:3"
  },
  "c20x0x18": {
    "block": "35:3"
  },
  "c20x0x17": {
    "block": "35:4"
  },
  "c20x0x16": {
    "block": "35:4"
  },
  "c20x0x15": {
    "block": "35:1"
  },
  "c20x0x14": {
    "block": "35:4"
  },
  "c20x0x13": {
    "block": "35:4"
  },
  "c20x0x12": {
    "block": "35:3"
  },
  "c20x0x11": {
    "block": "35:3"
  },
  "c20x0x10": {
    "block": "35:3"
  },
  "c20x0x9": {
    "block": "35:3"
  },
  "c20x0x8": {
    "block": "35"
  },
  "c20x0x7": {
    "block": "35"
  },
  "c20x0x6": {
    "block": "35"
  },
  "c20x0x5": {
    "block": "35"
  },
  "c20x0x4": {
    "block": "35"
  },
  "c20x0x3": {
    "block": "35"
  },
  "c20x0x2": {
    "block": "35:3"
  },
  "c20x0x1": {
    "block": "35:3"
  },
  "c19x0x1": {
    "block": "35:3"
  },
  "c19x0x2": {
    "block": "35:3"
  },
  "c19x0x3": {
    "block": "35"
  },
  "c19x0x4": {
    "block": "35"
  },
  "c19x0x5": {
    "block": "35"
  },
  "c19x0x6": {
    "block": "35"
  },
  "c19x0x7": {
    "block": "35"
  },
  "c19x0x8": {
    "block": "35:3"
  },
  "c19x0x9": {
    "block": "35:3"
  },
  "c19x0x10": {
    "block": "35:3"
  },
  "c19x0x11": {
    "block": "35:3"
  },
  "c19x0x12": {
    "block": "35:3"
  },
  "c19x0x13": {
    "block": "35:1"
  },
  "c19x0x14": {
    "block": "35:4"
  },
  "c19x0x15": {
    "block": "35:1"
  },
  "c19x0x16": {
    "block": "35:1"
  },
  "c19x0x17": {
    "block": "35:4"
  },
  "c19x0x18": {
    "block": "35:3"
  },
  "c19x0x19": {
    "block": "35:3"
  },
  "c19x0x20": {
    "block": "35:3"
  },
  "c19x0x21": {
    "block": "35:3"
  },
  "c19x0x22": {
    "block": "35:3"
  },
  "c19x0x23": {
    "block": "35:3"
  },
  "c19x0x24": {
    "block": "35:3"
  },
  "c19x0x25": {
    "block": "35:3"
  },
  "c19x0x26": {
    "block": "35:3"
  },
  "c19x0x27": {
    "block": "35:3"
  },
  "c19x0x28": {
    "block": "35:13"
  },
  "c19x0x29": {
    "block": "35:12"
  },
  "c18x0x29": {
    "block": "35:12"
  },
  "c18x0x28": {
    "block": "35:13"
  },
  "c18x0x27": {
    "block": "35:3"
  },
  "c18x0x26": {
    "block": "35:3"
  },
  "c18x0x25": {
    "block": "35:3"
  },
  "c18x0x24": {
    "block": "35:3"
  },
  "c18x0x23": {
    "block": "35:3"
  },
  "c18x0x22": {
    "block": "35:3"
  },
  "c18x0x21": {
    "block": "35:3"
  },
  "c18x0x20": {
    "block": "35:3"
  },
  "c18x0x19": {
    "block": "35:3"
  },
  "c18x0x18": {
    "block": "35:3"
  },
  "c18x0x17": {
    "block": "35:4"
  },
  "c18x0x16": {
    "block": "35:1"
  },
  "c18x0x15": {
    "block": "35:1"
  },
  "c18x0x14": {
    "block": "35:4"
  },
  "c18x0x13": {
    "block": "35:1"
  },
  "c18x0x12": {
    "block": "35:3"
  },
  "c18x0x11": {
    "block": "35:3"
  },
  "c18x0x10": {
    "block": "35:3"
  },
  "c18x0x9": {
    "block": "35:3"
  },
  "c18x0x8": {
    "block": "35"
  },
  "c18x0x7": {
    "block": "35"
  },
  "c18x0x6": {
    "block": "35"
  },
  "c18x0x5": {
    "block": "35"
  },
  "c18x0x4": {
    "block": "35"
  },
  "c18x0x3": {
    "block": "35"
  },
  "c18x0x2": {
    "block": "35:3"
  },
  "c18x0x1": {
    "block": "35:3"
  },
  "c17x0x1": {
    "block": "35:3"
  },
  "c17x0x2": {
    "block": "35:3"
  },
  "c17x0x3": {
    "block": "35"
  },
  "c17x0x4": {
    "block": "35"
  },
  "c17x0x5": {
    "block": "35"
  },
  "c17x0x6": {
    "block": "35"
  },
  "c17x0x7": {
    "block": "35"
  },
  "c17x0x8": {
    "block": "35"
  },
  "c17x0x9": {
    "block": "35:3"
  },
  "c17x0x10": {
    "block": "35:3"
  },
  "c17x0x11": {
    "block": "35:3"
  },
  "c17x0x12": {
    "block": "35:1"
  },
  "c17x0x13": {
    "block": "35:1"
  },
  "c17x0x14": {
    "block": "35:4"
  },
  "c17x0x15": {
    "block": "35:1"
  },
  "c17x0x16": {
    "block": "35:1"
  },
  "c17x0x17": {
    "block": "35:4"
  },
  "c17x0x18": {
    "block": "35:3"
  },
  "c17x0x19": {
    "block": "35:3"
  },
  "c17x0x20": {
    "block": "35:3"
  },
  "c17x0x21": {
    "block": "35:3"
  },
  "c17x0x22": {
    "block": "35:3"
  },
  "c17x0x23": {
    "block": "35:3"
  },
  "c17x0x24": {
    "block": "35:3"
  },
  "c17x0x25": {
    "block": "35:3"
  },
  "c17x0x26": {
    "block": "35:3"
  },
  "c17x0x27": {
    "block": "35:3"
  },
  "c17x0x28": {
    "block": "35:13"
  },
  "c17x0x29": {
    "block": "35:12"
  },
  "c16x0x29": {
    "block": "35:12"
  },
  "c16x0x28": {
    "block": "35:13"
  },
  "c16x0x27": {
    "block": "35:13"
  },
  "c16x0x26": {
    "block": "35:3"
  },
  "c16x0x25": {
    "block": "35:3"
  },
  "c16x0x24": {
    "block": "35:3"
  },
  "c16x0x23": {
    "block": "35:3"
  },
  "c16x0x22": {
    "block": "35:3"
  },
  "c16x0x21": {
    "block": "35:3"
  },
  "c16x0x20": {
    "block": "35:3"
  },
  "c16x0x19": {
    "block": "35:3"
  },
  "c16x0x18": {
    "block": "35:3"
  },
  "c16x0x17": {
    "block": "35:4"
  },
  "c16x0x16": {
    "block": "35:4"
  },
  "c16x0x15": {
    "block": "35:4"
  },
  "c16x0x14": {
    "block": "35:4"
  },
  "c16x0x13": {
    "block": "35:3"
  },
  "c16x0x12": {
    "block": "35:3"
  },
  "c16x0x11": {
    "block": "35:3"
  },
  "c16x0x10": {
    "block": "35:3"
  },
  "c16x0x9": {
    "block": "35:3"
  },
  "c16x0x8": {
    "block": "35"
  },
  "c16x0x7": {
    "block": "35"
  },
  "c15x0x7": {
    "block": "35"
  },
  "c15x0x6": {
    "block": "35"
  },
  "c15x0x5": {
    "block": "35"
  },
  "c15x0x4": {
    "block": "35"
  },
  "c15x0x3": {
    "block": "35:3"
  },
  "c15x0x2": {
    "block": "35:3"
  },
  "c15x0x1": {
    "block": "35:3"
  },
  "c15x0x0": {
    "block": "35:3"
  },
  "c14x0x0": {
    "block": "35:3"
  },
  "c14x0x1": {
    "block": "35:3"
  },
  "c14x0x2": {
    "block": "35:3"
  },
  "c14x0x3": {
    "block": "35:3"
  },
  "c14x0x4": {
    "block": "35:3"
  },
  "c14x0x5": {
    "block": "35:3"
  },
  "c14x0x6": {
    "block": "35:3"
  },
  "c14x0x7": {
    "block": "35:3"
  },
  "c14x0x8": {
    "block": "35:3"
  },
  "c15x0x8": {
    "block": "35:3"
  },
  "c15x0x9": {
    "block": "35:3"
  },
  "c15x0x10": {
    "block": "35:3"
  },
  "c15x0x11": {
    "block": "35:3"
  },
  "c15x0x12": {
    "block": "35:3"
  },
  "c15x0x13": {
    "block": "35:3"
  },
  "c15x0x14": {
    "block": "35:3"
  },
  "c15x0x15": {
    "block": "35:3"
  },
  "c15x0x16": {
    "block": "35:3"
  },
  "c15x0x17": {
    "block": "35:3"
  },
  "c15x0x18": {
    "block": "35:3"
  },
  "c15x0x19": {
    "block": "35:3"
  },
  "c15x0x20": {
    "block": "35:3"
  },
  "c15x0x21": {
    "block": "35:3"
  },
  "c15x0x22": {
    "block": "35:3"
  },
  "c15x0x23": {
    "block": "35:3"
  },
  "c15x0x24": {
    "block": "35:3"
  },
  "c15x0x25": {
    "block": "35:3"
  },
  "c15x0x26": {
    "block": "35:3"
  },
  "c15x0x27": {
    "block": "35:13"
  },
  "c15x0x28": {
    "block": "35:12"
  },
  "c15x0x29": {
    "block": "35:12"
  },
  "c14x0x29": {
    "block": "35:12"
  },
  "c14x0x28": {
    "block": "35:12"
  },
  "c14x0x27": {
    "block": "35:13"
  },
  "c14x0x26": {
    "block": "35:3"
  },
  "c14x0x25": {
    "block": "35:3"
  },
  "c14x0x24": {
    "block": "35:3"
  },
  "c14x0x23": {
    "block": "35:3"
  },
  "c14x0x22": {
    "block": "35:3"
  },
  "c14x0x21": {
    "block": "35:3"
  },
  "c14x0x20": {
    "block": "35:3"
  },
  "c14x0x19": {
    "block": "35:3"
  },
  "c14x0x18": {
    "block": "35:3"
  },
  "c14x0x17": {
    "block": "35:3"
  },
  "c14x0x16": {
    "block": "35:3"
  },
  "c14x0x15": {
    "block": "35:3"
  },
  "c14x0x14": {
    "block": "35:3"
  },
  "c14x0x13": {
    "block": "35:3"
  },
  "c14x0x12": {
    "block": "35:3"
  },
  "c14x0x11": {
    "block": "35:3"
  },
  "c14x0x10": {
    "block": "35:3"
  },
  "c14x0x9": {
    "block": "35:3"
  },
  "c13x0x9": {
    "block": "35:3"
  },
  "c13x0x8": {
    "block": "35:3"
  },
  "c13x0x7": {
    "block": "35:3"
  },
  "c13x0x6": {
    "block": "35:3"
  },
  "c13x0x5": {
    "block": "35:3"
  },
  "c13x0x4": {
    "block": "35:3"
  },
  "c13x0x3": {
    "block": "35:3"
  },
  "c13x0x2": {
    "block": "35:3"
  },
  "c13x0x1": {
    "block": "35:3"
  },
  "c13x0x0": {
    "block": "35:3"
  },
  "c12x0x0": {
    "block": "35:3"
  },
  "c12x0x1": {
    "block": "35:3"
  },
  "c12x0x2": {
    "block": "35:3"
  },
  "c12x0x3": {
    "block": "35:3"
  },
  "c12x0x4": {
    "block": "35:3"
  },
  "c12x0x5": {
    "block": "35:3"
  },
  "c12x0x6": {
    "block": "35:3"
  },
  "c12x0x7": {
    "block": "35:3"
  },
  "c12x0x8": {
    "block": "35:3"
  },
  "c12x0x9": {
    "block": "35:3"
  },
  "c12x0x10": {
    "block": "35:3"
  },
  "c13x0x10": {
    "block": "35:3"
  },
  "c13x0x11": {
    "block": "35:3"
  },
  "c13x0x12": {
    "block": "35:3"
  },
  "c13x0x13": {
    "block": "35:3"
  },
  "c13x0x14": {
    "block": "35:3"
  },
  "c13x0x15": {
    "block": "35:3"
  },
  "c13x0x16": {
    "block": "35:3"
  },
  "c13x0x17": {
    "block": "35:3"
  },
  "c13x0x18": {
    "block": "35:3"
  },
  "c13x0x19": {
    "block": "35:3"
  },
  "c13x0x20": {
    "block": "35:3"
  },
  "c13x0x21": {
    "block": "35:3"
  },
  "c13x0x22": {
    "block": "35:3"
  },
  "c13x0x23": {
    "block": "35:3"
  },
  "c13x0x24": {
    "block": "35:3"
  },
  "c13x0x25": {
    "block": "35:13"
  },
  "c13x0x26": {
    "block": "35:13"
  },
  "c13x0x27": {
    "block": "35:13"
  },
  "c13x0x28": {
    "block": "35:12"
  },
  "c13x0x29": {
    "block": "35:12"
  },
  "c12x0x29": {
    "block": "35:5"
  },
  "c12x0x28": {
    "block": "35:12"
  },
  "c12x0x27": {
    "block": "35:13"
  },
  "c12x0x26": {
    "block": "35:13"
  },
  "c12x0x25": {
    "block": "35:13"
  },
  "c12x0x24": {
    "block": "35:3"
  },
  "c12x0x23": {
    "block": "35:3"
  },
  "c12x0x22": {
    "block": "35:3"
  },
  "c12x0x21": {
    "block": "35:3"
  },
  "c12x0x20": {
    "block": "35:3"
  },
  "c12x0x19": {
    "block": "35:5"
  },
  "c12x0x18": {
    "block": "35:3"
  },
  "c12x0x17": {
    "block": "35:3"
  },
  "c12x0x16": {
    "block": "35:3"
  },
  "c12x0x15": {
    "block": "35:3"
  },
  "c12x0x14": {
    "block": "35:3"
  },
  "c12x0x13": {
    "block": "35:3"
  },
  "c12x0x12": {
    "block": "35:3"
  },
  "c12x0x11": {
    "block": "35:3"
  },
  "c11x0x11": {
    "block": "35:3"
  },
  "c11x0x10": {
    "block": "35:3"
  },
  "c11x0x9": {
    "block": "35:3"
  },
  "c11x0x8": {
    "block": "35:3"
  },
  "c11x0x7": {
    "block": "35:3"
  },
  "c11x0x6": {
    "block": "35:3"
  },
  "c11x0x5": {
    "block": "35:3"
  },
  "c11x0x4": {
    "block": "35:3"
  },
  "c11x0x3": {
    "block": "35:3"
  },
  "c11x0x2": {
    "block": "35:3"
  },
  "c11x0x1": {
    "block": "35:3"
  },
  "c11x0x0": {
    "block": "35:3"
  },
  "c10x0x1": {
    "block": "35:3"
  },
  "c10x0x2": {
    "block": "35:3"
  },
  "c10x0x3": {
    "block": "35:3"
  },
  "c10x0x4": {
    "block": "35:3"
  },
  "c10x0x5": {
    "block": "35:3"
  },
  "c10x0x6": {
    "block": "35:3"
  },
  "c10x0x7": {
    "block": "35:3"
  },
  "c10x0x8": {
    "block": "35:3"
  },
  "c10x0x9": {
    "block": "35:3"
  },
  "c10x0x10": {
    "block": "35:3"
  },
  "c10x0x11": {
    "block": "35:3"
  },
  "c10x0x12": {
    "block": "35:3"
  },
  "c11x0x12": {
    "block": "35:3"
  },
  "c11x0x13": {
    "block": "35:3"
  },
  "c11x0x14": {
    "block": "35:3"
  },
  "c11x0x15": {
    "block": "35:3"
  },
  "c11x0x16": {
    "block": "35:3"
  },
  "c11x0x17": {
    "block": "35:3"
  },
  "c11x0x18": {
    "block": "35:3"
  },
  "c11x0x19": {
    "block": "35:5"
  },
  "c11x0x20": {
    "block": "35:13"
  },
  "c11x0x21": {
    "block": "35:5"
  },
  "c11x0x22": {
    "block": "35:5"
  },
  "c11x0x23": {
    "block": "35:5"
  },
  "c11x0x24": {
    "block": "35:5"
  },
  "c11x0x25": {
    "block": "35:5"
  },
  "c11x0x26": {
    "block": "35:5"
  },
  "c11x0x27": {
    "block": "35:5"
  },
  "c11x0x28": {
    "block": "35:13"
  },
  "c11x0x29": {
    "block": "35:5"
  },
  "c10x0x29": {
    "block": "35:5"
  },
  "c10x0x28": {
    "block": "35:13"
  },
  "c10x0x27": {
    "block": "35:5"
  },
  "c10x0x26": {
    "block": "35:5"
  },
  "c10x0x25": {
    "block": "35:5"
  },
  "c10x0x24": {
    "block": "35:5"
  },
  "c10x0x23": {
    "block": "35:5"
  },
  "c10x0x22": {
    "block": "35:5"
  },
  "c10x0x21": {
    "block": "35:5"
  },
  "c10x0x20": {
    "block": "35:13"
  },
  "c10x0x19": {
    "block": "35:5"
  },
  "c10x0x18": {
    "block": "35:3"
  },
  "c10x0x17": {
    "block": "35:3"
  },
  "c10x0x16": {
    "block": "35:3"
  },
  "c10x0x15": {
    "block": "35:3"
  },
  "c10x0x14": {
    "block": "35:3"
  },
  "c10x0x13": {
    "block": "35:3"
  },
  "c9x0x13": {
    "block": "35:3"
  },
  "c9x0x12": {
    "block": "35:3"
  },
  "c9x0x11": {
    "block": "35:3"
  },
  "c9x0x10": {
    "block": "35:3"
  },
  "c9x0x9": {
    "block": "35:3"
  },
  "c9x0x8": {
    "block": "35:3"
  },
  "c9x0x7": {
    "block": "35:3"
  },
  "c9x0x6": {
    "block": "35:3"
  },
  "c9x0x5": {
    "block": "35:3"
  },
  "c9x0x4": {
    "block": "35:3"
  },
  "c9x0x3": {
    "block": "35:3"
  },
  "c9x0x2": {
    "block": "35:3"
  },
  "c9x0x1": {
    "block": "35:3"
  },
  "c9x0x0": {
    "block": "35:3"
  },
  "c8x0x0": {
    "block": "35:3"
  },
  "c8x0x1": {
    "block": "35:3"
  },
  "c8x0x2": {
    "block": "35:3"
  },
  "c8x0x3": {
    "block": "35"
  },
  "c8x0x4": {
    "block": "35"
  },
  "c8x0x5": {
    "block": "35"
  },
  "c8x0x6": {
    "block": "35:3"
  },
  "c8x0x7": {
    "block": "35:3"
  },
  "c8x0x8": {
    "block": "35:3"
  },
  "c8x0x9": {
    "block": "35:3"
  },
  "c8x0x10": {
    "block": "35:3"
  },
  "c8x0x11": {
    "block": "35:3"
  },
  "c8x0x12": {
    "block": "35:3"
  },
  "c8x0x13": {
    "block": "35:3"
  },
  "c8x0x14": {
    "block": "35:3"
  },
  "c9x0x14": {
    "block": "35:3"
  },
  "c9x0x15": {
    "block": "35:3"
  },
  "c9x0x16": {
    "block": "35:3"
  },
  "c9x0x17": {
    "block": "35:3"
  },
  "c9x0x18": {
    "block": "35:3"
  },
  "c9x0x19": {
    "block": "35:5"
  },
  "c9x0x20": {
    "block": "35:13"
  },
  "c9x0x21": {
    "block": "35:5"
  },
  "c9x0x22": {
    "block": "35:5"
  },
  "c9x0x23": {
    "block": "35:5"
  },
  "c9x0x24": {
    "block": "35:5"
  },
  "c9x0x25": {
    "block": "35:5"
  },
  "c9x0x26": {
    "block": "35:5"
  },
  "c9x0x27": {
    "block": "35:5"
  },
  "c9x0x28": {
    "block": "35:13"
  },
  "c9x0x29": {
    "block": "35:5"
  },
  "c8x0x29": {
    "block": "35:5"
  },
  "c8x0x28": {
    "block": "35:13"
  },
  "c8x0x27": {
    "block": "35:5"
  },
  "c8x0x26": {
    "block": "35:5"
  },
  "c8x0x25": {
    "block": "35:5"
  },
  "c8x0x24": {
    "block": "35:5"
  },
  "c8x0x23": {
    "block": "35:5"
  },
  "c8x0x22": {
    "block": "35:5"
  },
  "c8x0x21": {
    "block": "35:5"
  },
  "c8x0x20": {
    "block": "35:13"
  },
  "c8x0x19": {
    "block": "35:5"
  },
  "c8x0x18": {
    "block": "35:3"
  },
  "c8x0x17": {
    "block": "35:3"
  },
  "c8x0x16": {
    "block": "35:3"
  },
  "c8x0x15": {
    "block": "35:3"
  },
  "c7x0x15": {
    "block": "35:3"
  },
  "c7x0x14": {
    "block": "35:3"
  },
  "c7x0x13": {
    "block": "35:3"
  },
  "c7x0x12": {
    "block": "35:3"
  },
  "c7x0x11": {
    "block": "35:3"
  },
  "c7x0x10": {
    "block": "35:3"
  },
  "c7x0x9": {
    "block": "35:3"
  },
  "c7x0x8": {
    "block": "35:3"
  },
  "c7x0x7": {
    "block": "35:3"
  },
  "c7x0x6": {
    "block": "35:3"
  },
  "c7x0x5": {
    "block": "35"
  },
  "c7x0x4": {
    "block": "35"
  },
  "c7x0x3": {
    "block": "35"
  },
  "c7x0x2": {
    "block": "35"
  },
  "c7x0x1": {
    "block": "35:3"
  },
  "c7x0x0": {
    "block": "35:3"
  },
  "c6x0x1": {
    "block": "35:3"
  },
  "c6x0x2": {
    "block": "35"
  },
  "c6x0x3": {
    "block": "35"
  },
  "c6x0x4": {
    "block": "35"
  },
  "c6x0x5": {
    "block": "35"
  },
  "c6x0x6": {
    "block": "35:3"
  },
  "c6x0x7": {
    "block": "35:3"
  },
  "c6x0x8": {
    "block": "35:3"
  },
  "c6x0x9": {
    "block": "35:3"
  },
  "c6x0x10": {
    "block": "35:3"
  },
  "c6x0x11": {
    "block": "35:3"
  },
  "c6x0x12": {
    "block": "35:3"
  },
  "c6x0x13": {
    "block": "35:3"
  },
  "c6x0x14": {
    "block": "35:3"
  },
  "c6x0x15": {
    "block": "35:3"
  },
  "c6x0x16": {
    "block": "35:3"
  },
  "c7x0x16": {
    "block": "35:3"
  },
  "c7x0x17": {
    "block": "35:3"
  },
  "c7x0x18": {
    "block": "35:3"
  },
  "c7x0x19": {
    "block": "35:5"
  },
  "c7x0x20": {
    "block": "35:13"
  },
  "c7x0x21": {
    "block": "35:5"
  },
  "c7x0x22": {
    "block": "35:5"
  },
  "c7x0x23": {
    "block": "35:5"
  },
  "c7x0x24": {
    "block": "35:5"
  },
  "c7x0x25": {
    "block": "35:5"
  },
  "c7x0x26": {
    "block": "35:5"
  },
  "c7x0x27": {
    "block": "35:5"
  },
  "c7x0x28": {
    "block": "35:13"
  },
  "c7x0x29": {
    "block": "35:5"
  },
  "c6x0x29": {
    "block": "35:5"
  },
  "c6x0x28": {
    "block": "35:12"
  },
  "c6x0x27": {
    "block": "35:13"
  },
  "c6x0x26": {
    "block": "35:13"
  },
  "c6x0x25": {
    "block": "35:13"
  },
  "c6x0x24": {
    "block": "35:3"
  },
  "c6x0x23": {
    "block": "35:3"
  },
  "c6x0x22": {
    "block": "35:3"
  },
  "c6x0x21": {
    "block": "35:3"
  },
  "c6x0x20": {
    "block": "35:3"
  },
  "c6x0x19": {
    "block": "35:5"
  },
  "c6x0x18": {
    "block": "35:3"
  },
  "c6x0x17": {
    "block": "35:3"
  },
  "c5x0x17": {
    "block": "35:3"
  },
  "c5x0x16": {
    "block": "35:3"
  },
  "c5x0x15": {
    "block": "35:15"
  },
  "c5x0x14": {
    "block": "35:3"
  },
  "c5x0x13": {
    "block": "35:3"
  },
  "c5x0x12": {
    "block": "35:3"
  },
  "c5x0x11": {
    "block": "35:3"
  },
  "c5x0x10": {
    "block": "35:3"
  },
  "c5x0x9": {
    "block": "35:3"
  },
  "c5x0x8": {
    "block": "35:3"
  },
  "c5x0x7": {
    "block": "35:3"
  },
  "c5x0x6": {
    "block": "35"
  },
  "c5x0x5": {
    "block": "35"
  },
  "c5x0x4": {
    "block": "35"
  },
  "c5x0x3": {
    "block": "35"
  },
  "c5x0x2": {
    "block": "35"
  },
  "c5x0x1": {
    "block": "35:3"
  },
  "c5x0x0": {
    "block": "35:3"
  },
  "c4x0x0": {
    "block": "35:3"
  },
  "c4x0x1": {
    "block": "35:3"
  },
  "c4x0x2": {
    "block": "35"
  },
  "c4x0x3": {
    "block": "35"
  },
  "c4x0x4": {
    "block": "35"
  },
  "c4x0x5": {
    "block": "35"
  },
  "c4x0x6": {
    "block": "35"
  },
  "c4x0x7": {
    "block": "35:3"
  },
  "c4x0x8": {
    "block": "35:3"
  },
  "c4x0x9": {
    "block": "35:3"
  },
  "c4x0x10": {
    "block": "35:3"
  },
  "c4x0x11": {
    "block": "35:3"
  },
  "c4x0x12": {
    "block": "35:3"
  },
  "c4x0x13": {
    "block": "35:3"
  },
  "c4x0x14": {
    "block": "35"
  },
  "c4x0x15": {
    "block": "35"
  },
  "c4x0x16": {
    "block": "35"
  },
  "c4x0x17": {
    "block": "35:3"
  },
  "c4x0x18": {
    "block": "35:3"
  },
  "c5x0x18": {
    "block": "35:3"
  },
  "c5x0x19": {
    "block": "35:3"
  },
  "c5x0x20": {
    "block": "35:3"
  },
  "c5x0x21": {
    "block": "35:3"
  },
  "c5x0x22": {
    "block": "35:3"
  },
  "c5x0x23": {
    "block": "35:3"
  },
  "c5x0x24": {
    "block": "35:3"
  },
  "c5x0x25": {
    "block": "35:3"
  },
  "c5x0x26": {
    "block": "35:13"
  },
  "c5x0x27": {
    "block": "35:13"
  },
  "c5x0x28": {
    "block": "35:12"
  },
  "c5x0x29": {
    "block": "35:12"
  },
  "c4x0x29": {
    "block": "35:12"
  },
  "c4x0x28": {
    "block": "35:12"
  },
  "c4x0x27": {
    "block": "35:13"
  },
  "c4x0x26": {
    "block": "35:13"
  },
  "c4x0x25": {
    "block": "35:3"
  },
  "c4x0x24": {
    "block": "35:3"
  },
  "c4x0x23": {
    "block": "35:3"
  },
  "c4x0x22": {
    "block": "35:5"
  },
  "c4x0x21": {
    "block": "35:5"
  },
  "c4x0x20": {
    "block": "35:3"
  },
  "c4x0x19": {
    "block": "35:3"
  },
  "c3x0x19": {
    "block": "35:3"
  },
  "c3x0x18": {
    "block": "35:3"
  },
  "c3x0x17": {
    "block": "35"
  },
  "c3x0x16": {
    "block": "35:4"
  },
  "c3x0x15": {
    "block": "35:4"
  },
  "c3x0x14": {
    "block": "35:4"
  },
  "c3x0x13": {
    "block": "35"
  },
  "c3x0x12": {
    "block": "35:3"
  },
  "c3x0x11": {
    "block": "35:3"
  },
  "c3x0x10": {
    "block": "35:3"
  },
  "c3x0x9": {
    "block": "35:3"
  },
  "c3x0x8": {
    "block": "35:3"
  },
  "c3x0x7": {
    "block": "35:3"
  },
  "c3x0x6": {
    "block": "35"
  },
  "c3x0x5": {
    "block": "35"
  },
  "c3x0x4": {
    "block": "35"
  },
  "c3x0x3": {
    "block": "35"
  },
  "c3x0x2": {
    "block": "35"
  },
  "c3x0x1": {
    "block": "35:3"
  },
  "c3x0x0": {
    "block": "35:3"
  },
  "c2x0x0": {
    "block": "35:3"
  },
  "c1x0x0": {
    "block": "35:3"
  },
  "c1x0x1": {
    "block": "35:3"
  },
  "c1x0x2": {
    "block": "35:3"
  },
  "c1x0x3": {
    "block": "35:3"
  },
  "c1x0x4": {
    "block": "35"
  },
  "c2x0x4": {
    "block": "35"
  },
  "c2x0x5": {
    "block": "35"
  },
  "c2x0x6": {
    "block": "35"
  },
  "c2x0x7": {
    "block": "35:3"
  },
  "c2x0x8": {
    "block": "35:3"
  },
  "c2x0x9": {
    "block": "35:3"
  },
  "c2x0x10": {
    "block": "35:3"
  },
  "c2x0x11": {
    "block": "35:3"
  },
  "c2x0x12": {
    "block": "35:3"
  },
  "c2x0x13": {
    "block": "35"
  },
  "c2x0x14": {
    "block": "35:4"
  },
  "c2x0x15": {
    "block": "35:4"
  },
  "c2x0x16": {
    "block": "35:4"
  },
  "c2x0x17": {
    "block": "35"
  },
  "c2x0x18": {
    "block": "35:5"
  },
  "c2x0x19": {
    "block": "35:5"
  },
  "c2x0x20": {
    "block": "35:5"
  },
  "c3x0x20": {
    "block": "35:3"
  },
  "c3x0x21": {
    "block": "35:5"
  },
  "c3x0x22": {
    "block": "35:5"
  },
  "c3x0x23": {
    "block": "35:3"
  },
  "c3x0x24": {
    "block": "35:3"
  },
  "c3x0x25": {
    "block": "35:3"
  },
  "c3x0x26": {
    "block": "35:13"
  },
  "c3x0x27": {
    "block": "35:13"
  },
  "c3x0x28": {
    "block": "35:12"
  },
  "c3x0x29": {
    "block": "35:12"
  },
  "c2x0x29": {
    "block": "35:12"
  },
  "c2x0x28": {
    "block": "35:12"
  },
  "c2x0x27": {
    "block": "35:13"
  },
  "c2x0x26": {
    "block": "35:5"
  },
  "c2x0x25": {
    "block": "35:5"
  },
  "c2x0x24": {
    "block": "35:5"
  },
  "c2x0x23": {
    "block": "35:5"
  },
  "c2x0x22": {
    "block": "35:5"
  },
  "c2x0x21": {
    "block": "35:5"
  },
  "c1x0x21": {
    "block": "35:5"
  },
  "c1x0x20": {
    "block": "35:3"
  },
  "c1x0x19": {
    "block": "35:3"
  },
  "c1x0x18": {
    "block": "35:3"
  },
  "c1x0x17": {
    "block": "35"
  },
  "c1x0x16": {
    "block": "35:4"
  },
  "c1x0x15": {
    "block": "35:4"
  },
  "c1x0x14": {
    "block": "35:4"
  },
  "c1x0x13": {
    "block": "35"
  },
  "c1x0x12": {
    "block": "35:3"
  },
  "c1x0x11": {
    "block": "35:3"
  },
  "c1x0x10": {
    "block": "35:3"
  },
  "c1x0x9": {
    "block": "35:3"
  },
  "c1x0x8": {
    "block": "35:3"
  },
  "c1x0x7": {
    "block": "35:3"
  },
  "c1x0x6": {
    "block": "35:3"
  },
  "c1x0x5": {
    "block": "35"
  },
  "c0x0x5": {
    "block": "35:3"
  },
  "c0x0x4": {
    "block": "35:3"
  },
  "c0x0x3": {
    "block": "35:3"
  },
  "c0x0x2": {
    "block": "35:3"
  },
  "c0x0x1": {
    "block": "35:3"
  },
  "c0x0x0": {
    "block": "35:3"
  },
  "c0x0x6": {
    "block": "35:3"
  },
  "c0x0x7": {
    "block": "35:3"
  },
  "c0x0x8": {
    "block": "35:3"
  },
  "c0x0x9": {
    "block": "35:3"
  },
  "c0x0x10": {
    "block": "35:3"
  },
  "c0x0x11": {
    "block": "35:3"
  },
  "c0x0x12": {
    "block": "35:3"
  },
  "c0x0x13": {
    "block": "35:3"
  },
  "c0x0x14": {
    "block": "35"
  },
  "c0x0x15": {
    "block": "35"
  },
  "c0x0x16": {
    "block": "35"
  },
  "c0x0x17": {
    "block": "35:3"
  },
  "c0x0x18": {
    "block": "35:3"
  },
  "c0x0x19": {
    "block": "35:3"
  },
  "c0x0x20": {
    "block": "35:3"
  },
  "c0x0x21": {
    "block": "35:5"
  },
  "c0x0x22": {
    "block": "35:5"
  },
  "c1x0x22": {
    "block": "35:5"
  },
  "c1x0x23": {
    "block": "35:3"
  },
  "c1x0x24": {
    "block": "35:3"
  },
  "c1x0x25": {
    "block": "35:3"
  },
  "c1x0x26": {
    "block": "35:3"
  },
  "c1x0x27": {
    "block": "35:13"
  },
  "c1x0x28": {
    "block": "35:12"
  },
  "c1x0x29": {
    "block": "35:12"
  },
  "c0x0x29": {
    "block": "35:12"
  },
  "c0x0x28": {
    "block": "35:12"
  },
  "c0x0x27": {
    "block": "35:13"
  },
  "c0x0x26": {
    "block": "35:3"
  },
  "c0x0x25": {
    "block": "35:3"
  },
  "c0x0x24": {
    "block": "35:3"
  },
  "c0x0x23": {
    "block": "35:3"
  }
}*/
var castle = {
  "c2x0x1": {
    "block": "4"
  },
  "c2x0x2": {
    "block": "4"
  },
  "c2x0x3": {
    "block": "4"
  },
  "c1x1x1": {
    "block": "4"
  },
  "c2x1x1": {
    "block": "0"
  },
  "c4x1x4": {
    "block": "4"
  },
  "c0x-1x0": {
    "block": "3"
  },
  "c1x-1x0": {
    "block": "3"
  },
  "c2x-1x0": {
    "block": "3"
  },
  "c3x-1x0": {
    "block": "3"
  },
  "c4x-1x0": {
    "block": "3"
  },
  "c5x-1x0": {
    "block": "3"
  },
  "c4x-1x1": {
    "block": "3"
  },
  "c4x-1x2": {
    "block": "3"
  },
  "c4x-1x3": {
    "block": "3"
  },
  "c4x-1x4": {
    "block": "3"
  },
  "c4x-1x5": {
    "block": "3"
  },
  "c4x-1x6": {
    "block": "3"
  },
  "c4x-1x7": {
    "block": "3"
  },
  "c4x-1x8": {
    "block": "3"
  },
  "c4x-1x9": {
    "block": "3"
  },
  "c2x-1x9": {
    "block": "3"
  },
  "c1x-1x8": {
    "block": "3"
  },
  "c1x-1x7": {
    "block": "3"
  },
  "c1x-1x6": {
    "block": "3"
  },
  "c1x-1x5": {
    "block": "3"
  },
  "c1x-1x4": {
    "block": "3"
  },
  "c2x-1x4": {
    "block": "3"
  },
  "c2x-1x5": {
    "block": "3"
  },
  "c3x-1x5": {
    "block": "3"
  },
  "c3x-1x6": {
    "block": "3"
  },
  "c3x-1x7": {
    "block": "3"
  },
  "c2x-1x8": {
    "block": "3"
  },
  "c1x-1x9": {
    "block": "3"
  },
  "c2x-1x6": {
    "block": "3"
  },
  "c3x-1x8": {
    "block": "3"
  },
  "c3x-1x9": {
    "block": "3"
  },
  "c2x-1x7": {
    "block": "3"
  },
  "c2x-1x3": {
    "block": "3"
  },
  "c2x-1x2": {
    "block": "3"
  },
  "c3x-1x1": {
    "block": "3"
  },
  "c3x-1x3": {
    "block": "3"
  },
  "c0x-1x7": {
    "block": "3"
  },
  "c0x-1x6": {
    "block": "3"
  },
  "c0x-1x5": {
    "block": "3"
  },
  "c1x-1x3": {
    "block": "3"
  },
  "c1x-1x2": {
    "block": "3"
  },
  "c0x-1x8": {
    "block": "3"
  },
  "c0x-1x4": {
    "block": "3"
  },
  "c0x-1x3": {
    "block": "3"
  },
  "c0x-1x2": {
    "block": "3"
  },
  "c0x-1x1": {
    "block": "3"
  },
  "c1x-1x1": {
    "block": "3"
  },
  "c2x-1x1": {
    "block": "3"
  },
  "c3x-1x2": {
    "block": "3"
  },
  "c3x-1x4": {
    "block": "3"
  },
  "c0x-1x9": {
    "block": "3"
  },
  "c5x-1x4": {
    "block": "3"
  },
  "c5x-1x3": {
    "block": "3"
  },
  "c6x-1x3": {
    "block": "3"
  },
  "c6x-1x4": {
    "block": "3"
  },
  "c6x-1x5": {
    "block": "3"
  },
  "c5x-1x6": {
    "block": "3"
  },
  "c5x-1x2": {
    "block": "3"
  },
  "c5x-1x5": {
    "block": "3"
  },
  "c6x-1x2": {
    "block": "3"
  },
  "c6x-1x6": {
    "block": "3"
  },
  "c5x-1x7": {
    "block": "3"
  },
  "c5x-1x1": {
    "block": "3"
  },
  "c6x-1x1": {
    "block": "3"
  },
  "c7x-1x1": {
    "block": "3"
  },
  "c8x-1x2": {
    "block": "3"
  },
  "c9x-1x3": {
    "block": "3"
  },
  "c9x-1x5": {
    "block": "3"
  },
  "c8x-1x6": {
    "block": "3"
  },
  "c8x-1x7": {
    "block": "3"
  },
  "c7x-1x8": {
    "block": "3"
  },
  "c6x-1x8": {
    "block": "3"
  },
  "c6x-1x0": {
    "block": "3"
  },
  "c7x-1x0": {
    "block": "3"
  },
  "c8x-1x3": {
    "block": "3"
  },
  "c7x-1x5": {
    "block": "3"
  },
  "c7x-1x7": {
    "block": "3"
  },
  "c6x-1x7": {
    "block": "3"
  },
  "c5x-1x8": {
    "block": "3"
  },
  "c7x-1x2": {
    "block": "3"
  },
  "c7x-1x3": {
    "block": "3"
  },
  "c7x-1x4": {
    "block": "3"
  },
  "c8x-1x4": {
    "block": "3"
  },
  "c8x-1x1": {
    "block": "3"
  },
  "c9x-1x1": {
    "block": "3"
  },
  "c9x-1x6": {
    "block": "3"
  },
  "c8x-1x8": {
    "block": "3"
  },
  "c8x-1x0": {
    "block": "3"
  },
  "c9x-1x0": {
    "block": "3"
  },
  "c9x-1x2": {
    "block": "3"
  },
  "c9x-1x4": {
    "block": "3"
  },
  "c8x-1x5": {
    "block": "3"
  },
  "c7x-1x6": {
    "block": "3"
  },
  "c9x-1x8": {
    "block": "3"
  },
  "c9x-1x9": {
    "block": "3"
  },
  "c8x-1x9": {
    "block": "3"
  },
  "c9x-1x7": {
    "block": "3"
  },
  "c7x-1x9": {
    "block": "3"
  },
  "c6x-1x9": {
    "block": "3"
  },
  "c5x-1x9": {
    "block": "3"
  },
  "c1x0x1": {
    "block": "4"
  },
  "c3x0x1": {
    "block": "4"
  },
  "c3x0x2": {
    "block": "4"
  },
  "c3x0x3": {
    "block": "4"
  },
  "c3x0x4": {
    "block": "4"
  },
  "c2x0x4": {
    "block": "4"
  },
  "c1x0x4": {
    "block": "4"
  },
  "c1x0x3": {
    "block": "4"
  },
  "c1x0x2": {
    "block": "4"
  },
  "c0x0x5": {
    "block": "4"
  },
  "c1x0x5": {
    "block": "4"
  },
  "c2x0x5": {
    "block": "4"
  },
  "c3x0x5": {
    "block": "4"
  },
  "c4x0x5": {
    "block": "4"
  },
  "c4x0x6": {
    "block": "4"
  },
  "c4x0x7": {
    "block": "4"
  },
  "c4x0x8": {
    "block": "4"
  },
  "c3x0x8": {
    "block": "4"
  },
  "c2x0x8": {
    "block": "4"
  },
  "c1x0x8": {
    "block": "4"
  },
  "c0x0x8": {
    "block": "4"
  },
  "c0x0x6": {
    "block": "4"
  },
  "c1x0x6": {
    "block": "4"
  },
  "c1x0x7": {
    "block": "4"
  },
  "c2x0x7": {
    "block": "4"
  },
  "c0x0x7": {
    "block": "4"
  },
  "c2x0x6": {
    "block": "4"
  },
  "c3x0x6": {
    "block": "4"
  },
  "c3x0x7": {
    "block": "4"
  },
  "c1x0x9": {
    "block": "4"
  },
  "c2x0x9": {
    "block": "4"
  },
  "c3x0x9": {
    "block": "4"
  },
  "c2x0x0": {
    "block": "67"
  },
  "c3x1x1": {
    "block": "4"
  },
  "c0x1x2": {
    "block": "4"
  },
  "c0x1x3": {
    "block": "4"
  },
  "c0x1x4": {
    "block": "4"
  },
  "c0x1x5": {
    "block": "4"
  },
  "c4x1x2": {
    "block": "4"
  },
  "c4x1x3": {
    "block": "4"
  },
  "c4x1x5": {
    "block": "4"
  },
  "c4x1x6": {
    "block": "4"
  },
  "c4x1x7": {
    "block": "4"
  },
  "c4x1x8": {
    "block": "4"
  },
  "c3x1x9": {
    "block": "4"
  },
  "c2x1x9": {
    "block": "4"
  },
  "c1x1x9": {
    "block": "4"
  },
  "c0x1x8": {
    "block": "4"
  },
  "c0x1x7": {
    "block": "4"
  },
  "c0x1x6": {
    "block": "4"
  },
  "c1x1x8": {
    "block": "4"
  },
  "c1x1x7": {
    "block": "4"
  },
  "c1x1x6": {
    "block": "0"
  },
  "c2x1x8": {
    "block": "4"
  },
  "c3x1x8": {
    "block": "4"
  },
  "c3x1x7": {
    "block": "4"
  },
  "c1x2x1": {
    "block": "4"
  },
  "c3x2x1": {
    "block": "4"
  },
  "c4x2x2": {
    "block": "4"
  },
  "c4x2x3": {
    "block": "20"
  },
  "c4x2x4": {
    "block": "4"
  },
  "c4x2x5": {
    "block": "4"
  },
  "c3x2x5": {
    "block": "0"
  },
  "c3x2x6": {
    "block": "0"
  },
  "c4x2x6": {
    "block": "4"
  },
  "c4x2x7": {
    "block": "4"
  },
  "c4x2x8": {
    "block": "4"
  },
  "c3x2x9": {
    "block": "4"
  },
  "c2x2x9": {
    "block": "4"
  },
  "c1x2x9": {
    "block": "4"
  },
  "c0x2x8": {
    "block": "4"
  },
  "c0x2x7": {
    "block": "4"
  },
  "c0x2x6": {
    "block": "4"
  },
  "c0x2x5": {
    "block": "4"
  },
  "c0x2x4": {
    "block": "4"
  },
  "c0x2x3": {
    "block": "20"
  },
  "c0x2x2": {
    "block": "4"
  },
  "c1x3x1": {
    "block": "4"
  },
  "c2x3x1": {
    "block": "4"
  },
  "c3x3x1": {
    "block": "4"
  },
  "c0x3x2": {
    "block": "4"
  },
  "c0x3x3": {
    "block": "20"
  },
  "c0x3x4": {
    "block": "4"
  },
  "c0x3x5": {
    "block": "4"
  },
  "c0x3x6": {
    "block": "4"
  },
  "c0x3x7": {
    "block": "20"
  },
  "c0x3x8": {
    "block": "4"
  },
  "c1x3x9": {
    "block": "4"
  },
  "c2x3x9": {
    "block": "20"
  },
  "c3x3x9": {
    "block": "4"
  },
  "c4x3x8": {
    "block": "4"
  },
  "c4x3x7": {
    "block": "20"
  },
  "c4x3x6": {
    "block": "4"
  },
  "c4x3x5": {
    "block": "4"
  },
  "c4x3x4": {
    "block": "4"
  },
  "c4x3x3": {
    "block": "20"
  },
  "c4x3x2": {
    "block": "4"
  },
  "c0x4x1": {
    "block": "4"
  },
  "c1x4x1": {
    "block": "4"
  },
  "c2x4x1": {
    "block": "4"
  },
  "c3x4x1": {
    "block": "4"
  },
  "c4x4x1": {
    "block": "4"
  },
  "c4x4x2": {
    "block": "4"
  },
  "c4x4x3": {
    "block": "4"
  },
  "c4x4x4": {
    "block": "4"
  },
  "c4x4x5": {
    "block": "4"
  },
  "c4x4x6": {
    "block": "4"
  },
  "c5x4x6": {
    "block": "0"
  },
  "c5x4x7": {
    "block": "0"
  },
  "c4x4x7": {
    "block": "4"
  },
  "c4x4x8": {
    "block": "4"
  },
  "c4x4x9": {
    "block": "4"
  },
  "c3x4x9": {
    "block": "4"
  },
  "c2x4x9": {
    "block": "4"
  },
  "c1x4x9": {
    "block": "4"
  },
  "c0x4x9": {
    "block": "4"
  },
  "c0x4x8": {
    "block": "4"
  },
  "c0x4x7": {
    "block": "4"
  },
  "c0x4x2": {
    "block": "4"
  },
  "c0x4x3": {
    "block": "4"
  },
  "c0x4x4": {
    "block": "4"
  },
  "c0x4x5": {
    "block": "4"
  },
  "c0x4x6": {
    "block": "4"
  },
  "c1x4x4": {
    "block": "0"
  },
  "c2x4x4": {
    "block": "4"
  },
  "c3x4x4": {
    "block": "4"
  },
  "c2x4x3": {
    "block": "4"
  },
  "c1x4x3": {
    "block": "4"
  },
  "c1x4x2": {
    "block": "4"
  },
  "c2x4x2": {
    "block": "4"
  },
  "c3x4x2": {
    "block": "4"
  },
  "c3x4x3": {
    "block": "4"
  },
  "c1x5x1": {
    "block": "4"
  },
  "c2x5x1": {
    "block": "4"
  },
  "c3x5x1": {
    "block": "4"
  },
  "c0x5x2": {
    "block": "4"
  },
  "c0x5x3": {
    "block": "4"
  },
  "c0x5x4": {
    "block": "4"
  },
  "c4x5x2": {
    "block": "4"
  },
  "c4x5x3": {
    "block": "4"
  },
  "c4x5x4": {
    "block": "4"
  },
  "c1x5x5": {
    "block": "4"
  },
  "c2x5x5": {
    "block": "4"
  },
  "c3x5x5": {
    "block": "4"
  },
  "c3x5x6": {
    "block": "4"
  },
  "c3x5x7": {
    "block": "4"
  },
  "c3x5x8": {
    "block": "4"
  },
  "c2x5x8": {
    "block": "4"
  },
  "c1x5x8": {
    "block": "4"
  },
  "c1x5x7": {
    "block": "4"
  },
  "c1x5x6": {
    "block": "4"
  },
  "c2x5x6": {
    "block": "4"
  },
  "c2x5x7": {
    "block": "4"
  },
  "c1x6x1": {
    "block": "4"
  },
  "c2x6x1": {
    "block": "20"
  },
  "c3x6x1": {
    "block": "4"
  },
  "c4x6x2": {
    "block": "4"
  },
  "c4x6x3": {
    "block": "20"
  },
  "c4x6x4": {
    "block": "4"
  },
  "c3x6x5": {
    "block": "4"
  },
  "c2x6x5": {
    "block": "20"
  },
  "c1x6x5": {
    "block": "4"
  },
  "c0x6x4": {
    "block": "4"
  },
  "c0x6x3": {
    "block": "20"
  },
  "c0x6x2": {
    "block": "4"
  },
  "c1x7x1": {
    "block": "4"
  },
  "c2x7x1": {
    "block": "20"
  },
  "c3x7x1": {
    "block": "4"
  },
  "c4x7x2": {
    "block": "4"
  },
  "c4x7x3": {
    "block": "20"
  },
  "c4x7x4": {
    "block": "4"
  },
  "c3x7x5": {
    "block": "4"
  },
  "c2x7x5": {
    "block": "20"
  },
  "c1x7x5": {
    "block": "4"
  },
  "c0x7x4": {
    "block": "4"
  },
  "c0x7x3": {
    "block": "20"
  },
  "c0x7x2": {
    "block": "4"
  },
  "c1x8x1": {
    "block": "4"
  },
  "c2x8x1": {
    "block": "4"
  },
  "c3x8x1": {
    "block": "4"
  },
  "c4x8x2": {
    "block": "4"
  },
  "c4x8x3": {
    "block": "4"
  },
  "c4x8x4": {
    "block": "4"
  },
  "c3x8x5": {
    "block": "4"
  },
  "c2x8x5": {
    "block": "4"
  },
  "c1x8x5": {
    "block": "4"
  },
  "c0x8x4": {
    "block": "4"
  },
  "c0x8x3": {
    "block": "4"
  },
  "c0x8x2": {
    "block": "4"
  },
  "c0x9x1": {
    "block": "4"
  },
  "c1x9x1": {
    "block": "4"
  },
  "c2x9x1": {
    "block": "4"
  },
  "c3x9x1": {
    "block": "4"
  },
  "c4x9x1": {
    "block": "4"
  },
  "c4x9x2": {
    "block": "4"
  },
  "c4x9x3": {
    "block": "4"
  },
  "c4x9x4": {
    "block": "4"
  },
  "c4x9x5": {
    "block": "4"
  },
  "c4x9x6": {
    "block": "0"
  },
  "c3x9x5": {
    "block": "4"
  },
  "c2x9x5": {
    "block": "4"
  },
  "c1x9x5": {
    "block": "4"
  },
  "c0x9x5": {
    "block": "4"
  },
  "c0x9x4": {
    "block": "4"
  },
  "c0x9x3": {
    "block": "4"
  },
  "c0x9x2": {
    "block": "4"
  },
  "c1x9x3": {
    "block": "4"
  },
  "c2x9x3": {
    "block": "4"
  },
  "c2x9x4": {
    "block": "4"
  },
  "c3x9x4": {
    "block": "4"
  },
  "c3x9x3": {
    "block": "4"
  },
  "c3x9x2": {
    "block": "4"
  },
  "c2x9x2": {
    "block": "4"
  },
  "c1x9x2": {
    "block": "4"
  },
  "c1x10x5": {
    "block": "4"
  },
  "c2x10x5": {
    "block": "4"
  },
  "c3x10x5": {
    "block": "4"
  },
  "c4x10x4": {
    "block": "4"
  },
  "c4x10x3": {
    "block": "4"
  },
  "c4x10x2": {
    "block": "4"
  },
  "c3x10x1": {
    "block": "4"
  },
  "c2x10x1": {
    "block": "4"
  },
  "c1x10x1": {
    "block": "4"
  },
  "c0x10x2": {
    "block": "4"
  },
  "c0x10x3": {
    "block": "4"
  },
  "c0x10x4": {
    "block": "4"
  },
  "c0x11x3": {
    "block": "4"
  },
  "c2x11x1": {
    "block": "4"
  },
  "c4x11x3": {
    "block": "4"
  },
  "c2x11x5": {
    "block": "4"
  }
}
window.onload = function() {
  console.log(generateCommand(compress_new(10,10,castle)),"HI!!!")
  document.write(generateCommand(compress_new(10,10,castle)))
}
