function prepareZoom() {
  window.canvasG.onwheel = function(e) {
    e.preventDefault();
    var mouse_position = getCanvasMousePos(e)
    //console.log(mouse_position);
    var lowerBound = 0.3
    var higherBound = 8.6
    if ((GridObject.zoom + e.deltaY * 0.01) < higherBound && (GridObject.zoom + e.deltaY * 0.01) > lowerBound) {
        GridObject.zoom += e.deltaY * 0.01
        renderLayer(0,true)
        return
    }
    if ((GridObject.zoom + e.deltaY * 0.01) < lowerBound) {
      GridObject.zoom = lowerBound
      renderLayer(0,true)
      return
    }
    if ((GridObject.zoom + e.deltaY * 0.01) > higherBound) {
      GridObject.zoom = higherBound
      renderLayer(0,true)
      return
    }
    /*let f = 1.03
    if (e.deltaY > 0) {
      GridObject.zoom = GridObject.zoom / f
      renderLayer(0,true)
    }
    else {
      GridObject.zoom = GridObject.zoom * f
      renderLayer(0,true)
    }*/
  }
}
setupArr.push("prepareZoom()")
