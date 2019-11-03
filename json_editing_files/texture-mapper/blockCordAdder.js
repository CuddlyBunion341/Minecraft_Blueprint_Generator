function u(cord) {
  cord[1] + 1
  return cord
}
function d(cord) {
  cord[1] - 1
  return cord
}
function l(cord) {
  cord[0] - 1
  return cord
}
function r(cord) {
  cord[0] + 1
  return cord
}
var patterns = {
  wood:["oak","spruce","birch","jungle","acacia","dark_oak"],
  color:["white","orange","magenta","light_blue","yellow","lime","pink","gray","light_gray","cyan","purple","blue","brown","green","red","black"],
  stone:["stone","granite","diorite","andesite"],
  command:["command_block", "chain_command_block", "repeating_command_block"],
  ores:["coal","iron","redstone","lapis","gold","diamond","emerald"],
  coral:["tube","brain","bubble","fire","horn"],
  ext_coral:["tube","dead_tube","brain","dead_brain","bubble","dead_bubble","fire","dead_fire","horn","dead_horn"]
}
function setCord(id,cord) {
  for (var i = 0; i < block_list.length; i++) {
    if (block_list[i] == id) {
      block_list[i].texture_cord = cord
    }
  }
}
function setCordPattern(start_cord,direction,pattern,main_part,pattern_pos,pattern_index_start=0,pattern_index_end=pattern.length) {
  var new_cord = Array.from(start_cord)
  for (var p = pattern_index_start; p < pattern_index_end; p++) {
    for (var i = 0; i < block_list.length; i++) {
      if (pattern_pos == "l" && block_list[i].id == pattern[p] + "_" + main_part || pattern_pos == "r" && block_list[i].id ==  main_part + "_" +  pattern[p] || pattern_pos == "n" && block_list[i].id == pattern[p]) {
        if (p > pattern_index_start) {
          switch (direction) {
            case "u":
              new_cord[1]--
              break;
              case "d":
              new_cord[1]++
              break;
              case "l":
              new_cord[0]--
              break;
              case "r":
              new_cord[0]++
              break;
              default:
          }
        }
        block_list[i].texture_cord = Array.from(new_cord)
        //console.log(block_list[i].id,Array.from(new_cord));
      }
    }
  }
}
function setMultilineCordPattern(start_cord,direction,pattern,main_part,pattern_pos,max_move,new_direction,Isfirst=true,interval=0) {
  var new_cord = Array.from(start_cord)
  if (max_move + max_move * interval < pattern.length) {
    setCordPattern(start_cord,direction,pattern,main_part,pattern_pos,max_move * interval,max_move + max_move * interval)
    switch (new_direction) {
      case "u":
      	new_cord[1]--
      	break;
      case "d":
      	new_cord[1]++
      	break;
      case "l":
      	new_cord[0]--
      	break;
      case "r":
      	new_cord[0]++
      	break;
      default:
    }
    interval++
    setMultilineCordPattern(new_cord,direction,pattern,main_part,pattern_pos,max_move,new_direction,false,interval)
  }
  else {
    setCordPattern(new_cord,direction,pattern,main_part,pattern_pos,max_move * interval,pattern.length)
  }
}
function addCords() {
  window.block_list = bl14
  setCord("air",[-16,-16])
  setCordPattern([13,11],"r",patterns.stone,null,"n")
  setCordPattern([13,1],"r",patterns.wood,"log","l")
  setCordPattern([13,3],"r",patterns.wood,"planks","l")
  setCordPattern([13,4],"r",patterns.wood,"sapling","l")
  setCordPattern([13,6],"r",patterns.wood,"door","l")
  setCordPattern([13,7],"r",patterns.wood,"trapdoor","l")
  setCordPattern([13,8],"r",patterns.wood,"stripped_log","l")
  setCordPattern([13,10],"r",patterns.wood,"leaves","l")
  setMultilineCordPattern([19,1],"r",patterns.color,"stained_glass","l",8,"d")
  setMultilineCordPattern([19,3],"r",patterns.color,"wool","l",8,"d")
  setMultilineCordPattern([19,5],"r",patterns.color,"concrete_powder","l",8,"d")
  setMultilineCordPattern([19,7],"r",patterns.color,"concrete","l",8,"d")
  setMultilineCordPattern([19,9],"r",patterns.color,"shulker_box","l",8,"d")
  setMultilineCordPattern([19,11],"r",patterns.color,"terracotta","l",8,"d")
  setMultilineCordPattern([19,13],"r",patterns.color,"glazed_terracotta","l",8,"d")
  setCordPattern([19,15],"r",patterns.ores,"ore","l")
  setCordPattern([19,16],"r",patterns.ores,"block","l")
  setCordPattern([18,22],"r",patterns.ext_coral,"coral_fan","l")
  setCordPattern([18,23],"r",patterns.ext_coral,"coral","l")
  setCordPattern([18,24],"r",patterns.ext_coral,"coral_block","l")
}
window.addEventListener('load',addCords)
