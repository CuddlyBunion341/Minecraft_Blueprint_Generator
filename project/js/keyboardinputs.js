document.addEventListener('keydown',testkey)
function testkey(e) {
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
    default:
  }
}
