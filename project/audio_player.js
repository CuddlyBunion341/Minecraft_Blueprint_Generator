var AudioObject = {
  allowAudio:true,
  playbackRate:1,
  pitch:1,
  volume:1,
}
function getSound(block) {
  if (block.includes('wool') || block.includes('carpet') || block == "cake" || block == "cactus") {
    return 'cloth';
  }
  if (block.includes('grass') || block.includes('shroom') || block.includes('sapling') || block.includes('leav') || block.includes('flower')) {
    return 'grass';
  }
  if (block.includes('dirt') || block == "podzol" || block == "gravel" || block == "clay" || block == "mycelium") {
    return 'gravel';
  }
  if (block.includes('sand') || block.includes('concrete_powder')) {
    return 'sand';
  }
  if (block.includes('snow')) {
    return 'snow';
  }
  if (block.includes('plank') || block.includes('wood') || block.includes('log') || block.includes('acacia') || block.includes('oak') || block.includes('birch') || block.includes('spruce') || block.includes('jungle')) {
    return 'wood';
  }
  return 'stone'
}
function playAudio(block = "snow",crazy = false) {
  if (AudioObject.allowAudio) {
    var numbers = ["1","2","3","4"]
    if (crazy) {
      var crazy = ["cloth","grass","gravel","sand","snow","stone","wood"]
      var block = crazy[Math.floor(Math.random()*crazy.length)];
    }
    var pre;
    var maindir = "../project/audio/"
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
