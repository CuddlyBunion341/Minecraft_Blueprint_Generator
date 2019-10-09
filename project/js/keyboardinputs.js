document.addEventListener('keyup',testkey)
function testkey(e) {
  switch (e.key) {
    case "b":
      console.log("holy Bible");
      break;
    case " ":
      console.log("?");
      break;
    default:
      console.log("nothin special goin' on, with key",e.key);
  }
}
