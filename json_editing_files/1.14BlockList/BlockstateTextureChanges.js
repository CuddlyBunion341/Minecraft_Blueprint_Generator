var needs_texture_update = [
  "axis",
  "bites",
  //"bottom",
  "conditional",
  "delay",
  "eggs",
  "extended",
  "eye",
  "face",
  "facing",
  "half",
  "hanging",
  "has_book",
  "has_bottle_0",
  "has_bottle_1",
  "has_bottle_2",
  "hinge",
  "in_wall",
  "inverted",
  //"leaves",
  "lit",
  "locked",
  "mode",
  "moisture",
  "open",
  "part",
  "pickles",
  "power",
  "rotation",
  "shape",
  "short",
  "snowy",
  "type",
  "waterlogged"
]
//d = default cord
//u1 = up 1
//d1 = down 1
//l1 = left 1
//r1 = right 1
//r90 = rotate 90deg
var Axis = {
  y:"d",
  x:"u1",
  z:"u1r90"
}
var Bites = {
  0:"d",
  1:"r1", //right(bites count) => Bites(2) = right(2) => Bites(1) = right(1) => Bites(0) = d
  2:"r2",
  3:"r3",
  4:"r4",
  5:"r5",
  6:"r6",
}
var conditional = {};
var delay = {};
var eggs = {};
var extended = {};
var eye = {};
var face = {};
var facing = {};
var half = {
  lower:"d",
  upper:"u1"
};
var hanging = {};
var has_book = {};
var has_bottle_0 = {};
var has_bottle_1 = {};
var has_bottle_2 = {};
var hinge = {};
var in_wall = {};
var inverted = {};
var lit = {};
var locked = {};
var mode = {};
var moisture = {};
var open = {};
var part = {};
var pickles = {};
var power = {};
var rotation = {};
var shape = {};
var short = {};
var snowy = {};
var type = {};
var waterlogged = {
  false:"d",
  true:"uvrl(w)" //Underlay Water (The Antonym of Overlay...)
};
