var AudioObject = {
  allowAudio:true,
  playbackRate:1,
  pitch:1,
  volume:1,
}
String.prototype.isOneOf = function (arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == this) {
      return true
    }
  }
  return false;
};
String.prototype.includesAnyOf = function (arr) {
  for (var i = 0; i < arr.length; i++) {
    if (this.includes(arr[i])) {
      return true
    }
  }
  return false;
};
function getSound(block) {
  if (GridObject.version == "1.12") {
    block = getFromArr(blocklist_1_12,block.replace(":","/"),"id","display").toLowerCase()
  }
  if (block.includesAnyOf(['wool','carpet']) || block.isOneOf(["cake","cactus"])) {
    return 'cloth';
  }
  if (block.includesAnyOf(['grass','shroom','sapling','leav','flower','tnt'])) {
    return 'grass';
  }
  if (block.includesAnyOf(['dirt']) || block.isOneOf(["podzol","gravel","clay","mycelium"])) {
    return 'gravel';
  }
  if (block.includesAnyOf(['sand','concrete_powder'])) {
    return 'sand';
  }
  if (block.includesAnyOf(['snow'])) {
    return 'snow';
  }
  if (block.includesAnyOf(['plank','wood','log','acacia','oak','birch','spruce','jungle'])) {
    return 'wood';
  }
  if (block.includesAnyOf(["rail","hopper"]) || block.isOneOf(["gold_block","iron_block","diamond_block","emerald_block","iron_door","iron_trapdoor"])) {
    return 'metal'
  }
  return 'stone'
}
function playBlockSound(block = "stone",crazy = false) {
  if (AudioObject.allowAudio) {
    var numbers = ["1","2","3","4"]
    if (crazy) {
      var crazy = ["cloth","grass","gravel","sand","snow","stone","wood","metal"]
      var block = crazy[Math.floor(Math.random()*crazy.length)];
    }
    var pre;
    var maindir = "../project/audio/block/"
    switch (block) {
      case "cloth":
        pre = "cloth/cloth"
        break;
        case "grass":
        pre = "grass/grass"
        break
        case "gravel":
        pre = "gravel/gravel"
        break;
        case "sand":
        pre = "sand/sand"
        break
        case "snow":
        pre = "snow/snow"
        break;
        case "stone":
        pre = "stone/stone"
        case "metal":
        pre = "stone/stone"
        break
        case "wood":
        pre = "wood/wood"
        break
    }
    var num = numbers[Math.floor(Math.random()*numbers.length)];
    var url = maindir + pre + num + ".ogg"
    var a = new Audio();
    a.src = url
    a.playbackRate = AudioObject.playbackRate
    a.volume = AudioObject.volume
    a.play();
  }
}
function playAnySound(sound_path,volume = 1,play_back_speed = 1) {
  try {
    var a = new Audio();
    a.src = sound_path
    a.playbackRate = play_back_speed
    a.volume = volume
    a.play()
  } catch (e) {
    console.log(e);
    return
  } finally {
    return
  }
}
