document.addEventListener('keyup',testkey)
function testkey(e) {
  switch (e.key) {
    case "Escape":
      deselect()
      break;
    case " ":
      break;
    default:
      console.log("Key: ",e.key);
  }
}
