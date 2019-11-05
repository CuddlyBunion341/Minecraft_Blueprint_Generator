var GridObject = {
  version:"1.14",
  showtext: 0,
  x_size: 8,
  current_y: 0,
  z_size: 8,
  zoom: 2.6,
  translate_x:0,
  translate_z:0,
  defaultsize: 80, //80
  spacefactor: -1, //4
  lineWidth: 3.25,
  lineWidth_selected:2,
  tool: "",
  Cells: {
  },
  selected: [],
  highlited: [],
  colors: {default:'black',select:'blue',deselect:'red',highlight:'yellow',select_highlight:'lime'}
}
function cellCord(x,y,z) {
  return 'c' + x + 'x' + y + 'x' + z;
}
function getBlock(cord) {
  if (typeof(GridObject.Cells[cord]) != "undefined" && typeof(GridObject.Cells[cord].block) != "undefined") {
    return GridObject.Cells[cord].block
  }
  else {
    return undefined
  }
}
function setBlock(cord,block) {
  GridObject.Cells[cord] = {"block":block}
}
