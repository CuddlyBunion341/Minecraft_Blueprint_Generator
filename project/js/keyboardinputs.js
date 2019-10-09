document.addEventListener('keydown',testkey)
function testkey(e) {
  console.log(e.keyCode);
  switch (e.keyCode) {
    case 90:
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
