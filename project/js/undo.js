/////Undo
//memory:[1,2,3,4,5,278],
var UndoObj = {
  memory:[],
  reader:1
}
function storeAction() {
  UndoObj.memory.length = UndoObj.memory.length - UndoObj.reader + 1
  console.log(UndoObj.memory.length," - ",UndoObj.reader," + ",1," = ",UndoObj.memory.length - UndoObj.reader + 1);
  var c = JSON.stringify(GridObject.Cells)
  UndoObj.memory.push(c)
  //console.log(UndoObj.memory.length,UndoObj.memory);
}
function undoAction() {
  // 6 - reader - 1 > -1
  if (UndoObj.memory.length - (UndoObj.reader + 1) > -1) {
    //            arr[6 - reader - 1]
    UndoObj.reader++
    updateAction()
    //        reader = reader + 1
    renderLayer(0,true)
  }
  else {
    //console.log("oldest,stored Version here!!!",UndoObj.reader);
  }
}
function redoAction() {
  //  6 - reader - 1 > -1
  if (UndoObj.memory.length + (UndoObj.reader - 1) > UndoObj.memory.length) {
    //          arr[6 - reader - 1]
    UndoObj.reader--
    updateAction()
    //      reader = reader - 1
    renderLayer(0,true)
  }
  else {
    //console.log("Newest Version here!!!",UndoObj.reader);
  }
}
function updateAction() {
  GridObject.Cells = (JSON.parse(UndoObj.memory[UndoObj.memory.length - UndoObj.reader]));
}
