document.addEventListener('keydown',testkey)
/*document.addEventListener('keyup',testKeyUp)*/
function testkey(e) {
  //console.log(e.keyCode);
  switch (e.keyCode) {
    case 27: //esc
      deselect()
      break;
    case 90: //z
      if (e.metaKey && !e.shiftKey) {
        undoAction()
      }
      else if (e.metaKey && e.shiftKey) {
        redoAction()
      }
      break;
    case 8: //delete
      deleteSelection()
      break;
    case 91:
      /*window.prev_tool = toolObj.tool
      console.log(window.prev_tool);
      toolObj.tool = "none"*/
      break;
    default:
  }
}
function testKeyUp(e) {
  toolObj.tool = window.prev_tool
}
