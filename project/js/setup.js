var setupArr = []
function setup() {
  defineGlobalVar()
  ////////////////////////////////////////
  window.canvas.height = 2048;//2100
  window.canvas.width = 2048;
  window.canvas.style.width = "512px";
  window.canvas.style.height = "512px";
  window.canvas.style.imageRendering = "pixelated";
  window.ctx.imageSmoothingEnabled = false;
  ////////////////////////////////////////
  window.canvasG.height = 2048;
  window.canvasG.width = 2048;
  window.canvasG.style.width = "512px";
  window.canvasG.style.height = "512px";
  window.canvasG.style.imageRendering = "pixelated";
  window.ctxG.imageSmoothingEnabled = false;
  ///////////////////////////////////////
  window.ctx.translate(0.5,0.5)
  window.ctxG.translate(0.5,0.5)
  //////////////////////////////////////
  window.sw = window.canvas.width
  window.rw = parseInt(window.canvas.style.width.split("px")[0])
  window.ratio = window.sw / window.rw
  //////////////////////////////////////
  var imagesToLoad = ['image-files/1.12/top.png','image-files/1.14/1.14.png']
  var div = document.createElement('div')
  div.id = 'imageHolder'
  div.style.display = 'none'
  document.body.appendChild(div)
  for (var i = 0; i < imagesToLoad.length; i++) {
    var img = new Image()
    img.src = imagesToLoad[i]
    document.getElementById('imageHolder').appendChild(img)
  }
  //img.parentNode.removeChild(img);
  var menu = document.getElementById('vers-select')
  menu.addEventListener("change", function() {
    var vers = document.getElementById('vers-select').value
    ChangeVersion(vers)
  })
  if (GridObject.version == "1.12") {
    GridObject.Cells["c2x0x1"] = {block:"1"}
    GridObject.Cells["c2x0x2"] = {block:"1:1"}
    GridObject.Cells["c2x0x3"] = {block:"1:2"}

    GridObject.Cells["c1x1x1"] = {block:"2"}
    GridObject.Cells["c2x1x1"] = {block:"2"}
    GridObject.Cells["c4x1x4"] = {block:"3"}
  }
  else if (GridObject.version == "1.14") {
    GridObject.Cells["c2x0x1"] = {block:"stone"}
    GridObject.Cells["c2x0x2"] = {block:"stone"}
    GridObject.Cells["c2x0x3"] = {block:"stone"}

    GridObject.Cells["c1x1x1"] = {block:"tube_coral_block"}
    GridObject.Cells["c2x1x1"] = {block:"fire_coral_block"}
    GridObject.Cells["c4x1x4"] = {block:"brain_coral_block"}
  }
  storeAction()
  setTimeout(function () {
    document.getElementById('imageHolder').parentNode.removeChild(document.getElementById('imageHolder'))
  }, 10)
}
function ChangeVersion(version) {
  switch (version) {
    case '1.12':
     //console.log('IT IS 1.12!!!');
      break;
    case '1.14':
     //console.log('IT IS 1.14!!!');
      break;
    default:
     console.log('Version [' + version + '] caused an Error')
  }
}
function prepareSelect() {
  document.getElementById('brush_select').onchange = function() {toolObj.tool = this.value;}
}
setupArr.push("prepareSelect()")
/*function setupPush(string) {
  if (!setupArr) {
    setupPush(string)
    return
  }
  setupArr.push(string)
}*/
function runSetupArray() {
  for (var i = 0; i < setupArr.length; i++) {
    console.log("running [" + setupArr[i] + "]" + " Index: " + i);
    eval(setupArr[i])
  }
}
window.onload = function(){
  setup();
  runSetupArray()
  /*initCanvasVar()*/
  /*initToolEvents()*/
  /*prepareSelect()*/
  /*updateGlobalVar()*/
  /*prepUl()*/
  /*fillUl()*/
}
