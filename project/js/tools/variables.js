//! The Objects used down below are just for orientation, they don't have a real purpuse...
var globalVar = [
  "canvas",
  "canvasG",
  "ctx",
  "ctxG",
  "sw",
  "rw",
  "size",
  "lw",
  "clf",
  "ratio"
]
var constantVar = [
  "canvas",
  "canvasG",
  "ctx",
  "ctxG",
  "sw",
  "rw",
  "ratio"
]
var nonConstantVar = [
  "size",
  "lw",
  "clf",
]
function defineCanvasVar() {//these global variables never change
  window.canvas = document.getElementById('Gridvisulator')
  window.canvasG = document.getElementById('Graphicsvisulator')
  window.ctx = window.canvas.getContext('2d')
  window.ctxG = window.canvasG.getContext('2d')
}
function updateGlobalVar() {//updates global variables when Gridsize changes or when canvas is zoomed
  window.size = GridObject.zoom * GridObject.defaultsize
  window.lw = GridObject.lineWidth
  window.lw = window.size / (100 / window.lw)      //lw = size / (100 / lw)
  window.clf = Math.floor(window.size - window.lw * 2)
}
function initTextureVar() {//prepares Images for rendering...
  window.texture = document.createElement("img") //new Image()
  window.texture.src = 'image-files/1.12/top.png'
  window.texture.style.imageRendering = 'pixelated'
  window.texture1_14 = document.createElement("img") //new Image()
  window.texture1_14.src = 'image-files/1.14/1.14.png'
  window.texture1_14.style.imageRendering = 'pixelated'
  window.texture1_14.onload = function () {
    setWidth(8)
  };
}
function defineGlobalVar() {
  defineCanvasVar()
  updateGlobalVar()
  initTextureVar()
}
