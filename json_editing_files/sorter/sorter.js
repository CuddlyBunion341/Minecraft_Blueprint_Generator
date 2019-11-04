var patterns = {
  dirt:["dirt","coarse_dirt","podzol"],
  sponge:["sponge","wet_sponge"],
  wood:["oak","spruce","birch","jungle","acacia","dark_oak"],
  color:["white","orange","magenta","light_blue","yellow","lime","pink","gray","light_gray","cyan","purple","blue","brown","green","red","black"],
  stone:["stone","granite","diorite","andesite"],
  command:["command_block", "chain_command_block", "repeating_command_block"],
  ores:["coal","iron","redstone","lapis","gold","diamond","emerald"],
  coral:["tube","brain","bubble","fire","horn"],
  ext_coral:["tube","dead_tube","brain","dead_brain","bubble","dead_bubble","fire","dead_fire","horn","dead_horn"],
  sand:["sand","red_sand"],
  sand_stone:['',"cut","chiseled","smooth"],
  sand_stone_n:['',"chiseled","cut"],
  flowers:["dandelion","poppy","blue_orchid","allium","azure_bluet","red_tulip","orange_tulip","white_tulip","pink_tulip","oxeye_daisy","cornflower","lily_of_the_valley","wither_rose","sunflower","lilac","rose_bush","peony"],
  mushroom:["brown","red"],
  smooth:["quartz","red_sandstone","sandstone","stone"],
  block_and_ore:["ore","block"],
  infested:["stone","cobblestone","stone_bricks","mossy_stone_bricks","cracked_stone_bricks","chiseled_stone_bricks"],
  anvil:['',"chipped","damaged"],
  stone_st_and_sl:["polished_granite","smooth_red_sandstone","mossy_stone_brick","polished_diorite","mossy_cobblestone","end_stone_brick","stone","smooth_sandstone","smooth_quartz","granite","andesite","red_nether_brick","polished_andesite","diorite"],
  skull:["skeleton","wither_skeleton"],
  head:["player","zombie","creeper","dragon"],
}
var ids = []
var currentId = 0 //0 //0
var limitToId = 35 //25 //25
var limitToLineBreak = 40 //28 //30
function addBlock(block=undefined,ap=true) {
  if (true) {
    var mt = limitToId
    var l = block.length
    var str = "|" + block + "&nbsp;".repeat(mt - l - 1) + "|" + "&nbsp;" + currentId
    var l2 = str.split('&nbsp;').join("_").length
    var lm = limitToLineBreak
    str = str + "&nbsp;".repeat(lm - l2) + "|" + "<br>"
    document.write(str)
  }
  var id_obj = {block:block,id:currentId}
    ids.push(id_obj)
  currentId++
  if (ap) {
    var str = "+" + "-".repeat(limitToId - 1) + "+" + "-".repeat(limitToLineBreak - limitToId - 1) + "+"
    document.write(str,"<br>")
  }
}
function addPattern(pattern,main="",pos="l",startAtIndex=0,endAtIndex=pattern.length) { //stripped$log => main.split("$").join("_" + pattern[i] + "_")
  for (var i = startAtIndex; i < endAtIndex; i++) {
    if (pattern[i].length > 0) {
      if (pos == "l") {
        addBlock(pattern[i] + "_" + main,false)
      }
      else if (pos == "r") {
        addBlock(main + "_" + pattern[i],false)
      }
      else if (pos == "n") {
        addBlock(pattern[i],false)
      }
      else if (pos == 'm') {
        addBlock(main.split("$").join("_" + pattern[i] + "_"),false)
      }
    }
    else {
      addBlock(main.replace("$","_"),false)
    }
  }
  document.write("+" + "-".repeat(limitToId - 1) + "+" + "-".repeat(limitToLineBreak - limitToId - 1) + "+","<br>")
}
function sort() {
  document.write("Console","<br>","+" + "-".repeat(limitToId - 1) + "+" + "-".repeat(limitToLineBreak - limitToId - 1) + "+","<br>")
  addBlock('air')
  addPattern(patterns.stone,'',"n")
  addBlock('grass_block')
  addPattern(patterns.dirt,'',"n")
  addBlock('cobblestone')
  addPattern(patterns.wood,'planks')
  addPattern(patterns.wood,'sapling')
  addBlock('bedrock')
  addPattern(patterns.sand,'',"n")
  addBlock('gravel')
  addPattern(["gold","iron","coal"],'ore')
  addPattern(patterns.wood,'log')
  addPattern(patterns.wood,'stripped$log',"m")
  addPattern(patterns.wood,'stripped$wood',"m")
  addPattern(patterns.wood,'wood',"l")
  addPattern(patterns.wood,'leaves',"l")
  addPattern(patterns.sponge,'',"n")
  addBlock('glass_block')
  addBlock('lapis_ore')
  addBlock('lapis_block')
  addBlock('dispenser')
  addPattern(patterns.sand_stone_n,'sandstone')
  addBlock('note_block')
  addPattern(["powered","detector"],'rail')
  addBlock('sticky_piston')
  addBlock('cobweb')
  addBlock('grass')
  addBlock('fern')
  addBlock('dead_bush')
  addBlock('sea_grass')
  addBlock('sea_pickle')
  addBlock('piston')
  addPattern(patterns.color,'wool')
  addPattern(patterns.flowers,'',"n")
  addPattern(patterns.mushroom,'mushroom')
  addPattern(["gold","iron"],'block')
  addPattern(patterns.wood,'slab')
  addPattern(["stone","smooth_stone","sandstone","cut_sandstone","petrified_oak","cobblestone","brick","nether_brick","quartz","red_sandstone","cut_red_sandstone","purpur","prismarine","prismarine_brick","dark_prismarine"],"slab")
  addPattern(patterns.smooth,'smooth',"r")
  addBlock('bricks')
  addBlock('tnt')
  addBlock('bricks')
  addBlock('bookshelf')
  addBlock("cobblestone")
  addBlock("mossy_cobblestone")
  addBlock("torch")
  addBlock("end_rod")
  addBlock("chorus_plant")
  addBlock("chorus_flower")
  addBlock("purpur_block")
  addBlock("purpur_pillar")
  addBlock("purpur_stairs")
  addBlock("oak_stairs")
  addBlock("chest")
  addPattern(patterns.block_and_ore,"diamond","r")
  addBlock("crafting_table")
  addBlock("farmland")
  addBlock("furnace")
  addBlock("ladder")
  addBlock("rail")
  addBlock("cobblestone_stairs")
  addBlock("lever")
  addBlock("stone_pressure_plate")
  addPattern(patterns.wood,"pressure_plate")
  addBlock("redstone_ore")
  addBlock("redstone_torch")
  addBlock("stone_button")
  addBlock("snow")
  addBlock("ice")
  addBlock("snow_block")
  addBlock("cactus")
  addBlock("clay")
  addBlock("jukebox")
  addPattern(patterns.wood,"fence")
  addBlock("pumpkin")
  addBlock("carved_pumpkin")
  addBlock("netherrack")
  addBlock("soulsand")
  addBlock("glowstone")
  addBlock("jack_o_lantern")
  addPattern(patterns.wood,"trapdoor")
  addPattern(patterns.infested,"infested","r")
  addPattern(patterns.infested,"","n",2)
  addPattern(patterns.mushroom,"mushroom_block")
  addBlock("mushroom_stem")
  addBlock("iron_bars")
  addBlock("glass_pane")
  addBlock("melon_block")
  addBlock("vine")
  addPattern(patterns.wood,"fence_gate")
  addBlock("brick_stairs")
  addBlock("stone_brick_stairs")
  addBlock("mycelium")
  addBlock("lilipad")
  addPattern(["bricks","fence","stairs"],"nether","r")
  addBlock("enchanting_table")
  addBlock("end_portal_frame")
  addBlock("end_stone")
  addBlock("end_stone_bricks")
  addBlock("redstone_lamp")
  addBlock("sandstone_stairs")
  addBlock("emerald_ore")
  addBlock("ender_chest")
  addBlock("tripwire_hook")
  addBlock("emerald_block")
  addPattern(patterns.wood,"stairs",undefined,1,4)
  addBlock("beacon")
  addPattern(["cobblestone","mossy_cobblestone","brick","prismarine","red_sandstone","mossy_stone_brick","granite","stonebrick","nether_brick","andesite","red_nether_brick","sandstone","end_stone_brick","diorite"],"wall")
  addPattern(patterns.wood,"button")
  addPattern(patterns.anvil,"anvil")
  addBlock("trapped_chest")
  addBlock("light_weighted_pressure_plate")
  addBlock("heavy_weighted_pressure_plate")
  addBlock("daylight_detector")
  addBlock("redstone_block")
  addBlock("nether_quartz_ore")
  addBlock("hopper")
  addPattern(["chiseled_quartz_block","smooth_quartz","quartz_pillar","quartz_stairs"],"","n")
  addBlock("activator_rail")
  addBlock("dropper")
  addPattern(patterns.color,"terracotta")
  addBlock("iron_trapdoor")
  addBlock("hay_block")
  addPattern(patterns.color,"carpet")
  addBlock("terracotta")
  addBlock("coal_block")
  addBlock("packed_ice")
  addPattern(patterns.wood,"stairs",undefined,4)
  addBlock("slime_block")
  addBlock("grass_path")
  addPattern(patterns.flowers,"","n",13)
  addBlock("tall_grass")
  addBlock("large_fern")
  addPattern(patterns.color,"stained_glass")
  addPattern(["","bricks"],"prismarine","r")
  addBlock("dark_prismarine")
  addBlock("prismarine_stairs")
  addBlock("prismarine_brick_stairs")
  addBlock("dark_prismarine_stairs")
  addBlock("sea_lantern")
  addPattern(patterns.sand_stone_n,"red$sandstone","m")
  addBlock("magma_block")
  addBlock("nether_wart_block")
  addBlock("red_nether_bricks")
  addBlock("bone_block")
  addBlock("observer")
  addBlock("shulker_box")
  addPattern(patterns.color,"shulker_box")
  addPattern(patterns.color,"glazed_terracotta")
  addPattern(patterns.color,"concrete")
  addPattern(patterns.color,"concrete_powder")
  addBlock("turtle_egg")
  addPattern(patterns.coral,"dead$coral_block","m")
  addPattern(patterns.coral,"coral_block")
  addPattern(patterns.coral,"coral")
  addPattern(patterns.coral,"dead$coral","m")
  addPattern(patterns.coral,"coral_fan")
  addPattern(patterns.coral,"dead$coral_fan","m")
  addBlock("blue_ice")
  addBlock("conduit")
  addPattern(patterns.stone_st_and_sl,"stairs")
  addPattern(patterns.stone_st_and_sl,"slab")
  addBlock("scaffolding")
  addBlock("iron_door")
  addPattern(patterns.wood,"door")
  addBlock("repeater")
  addBlock("comparator")
  addBlock("composter")
  addPattern(patterns.wood,"sign")
  addBlock("beetroots")
  addBlock("dried_kelp_block")
  addBlock("bamboo_sapling")
  addBlock("cake")
  addPattern(patterns.color,"bed")
  addBlock("brewing_stand")
  addBlock("cauldron")
  addBlock("carrots")
  addBlock("potatos")
  addPattern(patterns.skull,"skull")
  addPattern(patterns.head,"head")
  addPattern(patterns.color,"banner")
  addBlock("loom")
  addBlock("barrel")
  addBlock("smoker")
  addBlock("blasting_furnace")
  addBlock("cartography_table")
  addBlock("fletching_table")
  addBlock("grindstone")
  addBlock("lectern")
  addBlock("smithing_table")
  addBlock("stonecutter")
  addBlock("bell")
  addBlock("lantern")
  addBlock("campfire")
  setTimeout(mergeIDs, 1000);
}
window.onload = sort()
var nfc = 0
var nfa = []
function mergeIDs() {
  var biggest_id = 0
  for (var bi = 0; bi < ids.length; bi++) {
    if (ids[bi].id > biggest_id) {
      biggest_id = ids[bi].id
    }
  }
  for (var b = 0; b < bl14.length; b++) {
    for (var i = 0; i < ids.length; i++) {
      if (bl14[b].id == ids[i].block) {
        console.log("found",ids[i].block);
        bl14[b].numeric_id = ids[i].id
        break;
      }
      if (i + 1 == ids.length) {
        console.warn("NOT FOUND:",bl14[b].id);
        biggest_id++
        bl14[b].numeric_id = biggest_id
        nfc++
        nfa.push(bl14[b].id)
      }
    }
  }
  console.log(nfc);
  console.log(nfa);
}
function sortMerged() {
  var sortById = bl14.sort(function (a, b)
    {
      return parseFloat(a.numeric_id) - parseFloat(b.numeric_id);
    });
    console.log(sortById);
}
