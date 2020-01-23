function generateCommand(compressed_string) {
  var array = compressed_string.split(";")
  array.pop()
  var firstPart = 'summon falling_block ~ ~1 ~ {Block:stone,Time:1,Passengers:[{id:falling_block,Block:redstone_block,Time:1,Passengers:[{id:falling_block,Block:activator_rail,Time:1,Passengers:['
  var middlePart = '';
  var lastPart = ',{id:commandblock_minecart,Command:"kill @e[type=commandblock_minecart,r=1]"}'
  for (var i = 0; i < array.length; i++) {
    //Rect:c0x0x0,c7x0x7{1};Block:c0x1x0{17};
    var start_cord = array[i].split(":")[1].split("{")[0].split(",")[0]
    var sx = parseInt(start_cord.split('x')[0].split('c')[1])
    var sy = parseInt(start_cord.split('x')[1])
    var sz = parseInt(start_cord.split('x')[2])
    var c_id = array[i].match(/\{(.*?)\}/)[1];
    var block = getBlockFromId(c_id)
    var id;
    var idm;
    if (c_id.includes(':')) {
      idm = c_id.split(':')[1]
      id = c_id.split(':')[0]
    }
    else {
      idm = 0
      id = c_id
    }
    //console.log(start_cord,"crd:",sx,sy,sz,"block:",block,"id:",c_id,id,idm);
    if (array[i].includes("Block:")) {
      //Some /setblock code...
      var setblockCode = '{id:commandblock_minecart,Command:"setblock ~' + (sx + 1) + ' ~' + (sy - 3) + ' ~' + (sz + 1) + ' ' + block + ' ' + idm + '"}'
      middlePart += i != 0 ? "," + setblockCode : setblockCode;
    }
    if (array[i].includes("Rect:")) {
      //Some /fill code...
      var end_cord = array[i].split(":")[1].split("{")[0].split(",")[1]
      var ex = parseInt(end_cord.split('x')[0].split('c')[1])
      var ey = parseInt(end_cord.split('x')[1])
      var ez = parseInt(end_cord.split('x')[2])
      var fillblockCode = '{id:commandblock_minecart,Command:"fill ~' + (sx + 1) + ' ~' + (sy - 3) + ' ~' + (sz + 1) + ' ~' + (ex + 1) + ' ~' + (ey - 3) + ' ~' + (ez + 1) + ' ' + block + ' ' + idm + '"}'
      middlePart += i != 0 ? "," + fillblockCode : fillblockCode;
    }
  }
  var bracket_string = ""
  var count = 2
  for (var c = 0; c <= count; c++) {
    bracket_string += ']}'
  }
  return firstPart + middlePart + lastPart + bracket_string

}
function getBlockFromId(id) {
  id = id.replace(':','/')
  for (var i = 0; i < blocklist_1_12.length; i++) {
    if (blocklist_1_12[i].id == id) {
      return blocklist_1_12[i].block
    }
  }
}
////////////////////////////////////////////////////////////////
function generate_12() {
  var input = document.getElementsByTagName('textarea')[1]
  var GridObject = JSON.parse(input.value)
  var output = document.getElementsByTagName('textarea')[2]
  //var firstPart = 'summon falling_block ~ ~1 ~ {Block:redstone_block,Time:1,Passengers:[{id:falling_block,Block:activator_rail,Time:1,Passengers:['
  var firstPart = 'summon falling_block ~ ~1 ~ {Block:stone,Time:1,Passengers:[{id:falling_block,Block:redstone_block,Time:1,Passengers:[{id:falling_block,Block:activator_rail,Time:1,Passengers:['
  var middlePart = '';
  var block;
  //',{id:command_block_minecart,Command:"setblock ~' + x + ' ~' + y + ' ~' + z + 'stone'
  //var lastPart = '{id:command_block_minecart,Command:"kill @e[type=command_block_minecart]"}]}]}'
  var lastPart = ',{id:commandblock_minecart,Command:"kill @e[type=commandblock_minecart,r=1]"}'
  test = 0
  for (var propt in GridObject.Cells) {
    var x = propt.split('x')[0].split('c')[1]
    var y = propt.split('x')[1]
    var z = propt.split('x')[2]
    x++
    y--
    y--
    y--
    z++
    block = getBlockFromId(GridObject.Cells[propt].block)
    if (GridObject.Cells[propt].block.includes(':')) {
      idm = GridObject.Cells[propt].block.split(':')[1]
    }
    else {
      idm = 0
    }
    //middlePart += '{id:command_block_minecart,Command:"setblock ~' + x + ' ~' + y + ' ~' + z + ' ' + block + ' ' + idm + '",Passengers:['
    if (test != 0) {middlePart += ',{id:commandblock_minecart,Command:"setblock ~' + x + ' ~' + y + ' ~' + z + ' ' + block + ' ' + idm + '"}'}
    else {
      middlePart += '{id:commandblock_minecart,Command:"setblock ~' + x + ' ~' + y + ' ~' + z + ' ' + block + ' ' + idm + '"}'
    }
    test++
  }
  //output.value = firstPart + middlePart + closeBrackets(test + 1);
  output.value = firstPart + middlePart + lastPart + closeBrackets(3);
}
