var bsr = Array.from(block_states_raw)
for (var b = 0; b < bsr.length; b++) {
  var StateName = bsr[b].name
  for (var d = 0; d < bsr[b].data.length; d++) {
    bsr[b].data[d].exception = []
    if (!isNaN(JSON.stringify(bsr[b].data[d].values).split(",").join("").split('"').join('').split(']').join('').split('[').join(''))) {
      bsr[b].data[d].default = bsr[b].data[d].values[0]
      continue;
    }
    for (var bi = 0; bi < bsr[b].data[d].blocks.length; bi++) {
      var ftarr = []
      var block = bsr[b].data[d].blocks[bi]
      if (bsr[b].data[d].values.includes("none")) {
        bsr[b].data[d].default = "none";
        continue;
      }
      if (JSON.stringify(bsr[b].data[d].values) == JSON.stringify(["false","true"])) {
        bsr[b].data[d].default = "false"
        if (block != "Campfire" || StateName != "lit") {
          if (block != "Redstone Torch" || StateName != "lit") {
            if (block != "Redstone Wall Torch" || StateName != "lit") {
              if (block != "Conduit" || StateName != "waterlogged") {
                  if (block != "Sea Pickle" || StateName != "waterlogged") {
                    if (block != "Bubble Column" || StateName != "drag") {
                      if (block != "Brown Mushroom Block") {
                        if (block != "Red Mushroom Block") {
                          if (block != "Mushroom Stem") {
                            if (!block.toLowerCase().includes("wall") || StateName != "up") {
                              continue;
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        var apobj = {block:block,value:"true"}
        bsr[b].data[d].exception.push(apobj)
        bsr[b].data[d].blocks.splice(bi,1)
        bi--
        continue;
      }
      if (JSON.stringify(bsr[b].data[d].values) == JSON.stringify(["x","y","z"])) {
        bsr[b].data[d].default = "y";
        continue;
      }
      if (JSON.stringify(bsr[b].data[d].values) == JSON.stringify(["x","z"])) {
        bsr[b].data[d].default = "z";
        continue;
      }
      if (JSON.stringify(bsr[b].data[d].values) == JSON.stringify(["ceiling", "double_wall", "floor", "single_wall"])) {
        bsr[b].data[d].default = "floor";
        continue;
      }
      if (JSON.stringify(bsr[b].data[d].values) == JSON.stringify(["ceiling", "floor", "wall"])) {
        bsr[b].data[d].default = "wall";
        continue;
      }
      if (JSON.stringify(bsr[b].data[d].values) == JSON.stringify(["compare","subtract"])) {
        bsr[b].data[d].default = "compare";
        continue;
      }
      if (JSON.stringify(bsr[b].data[d].values) == JSON.stringify(["east","north","south","west"])) {
        bsr[b].data[d].default = "north"
        continue;
      }
      if (JSON.stringify(bsr[b].data[d].values) == JSON.stringify(["foot","head"])) {
        bsr[b].data[d].default = "foot"
        continue;
      }
      if (JSON.stringify(bsr[b].data[d].values) == JSON.stringify(["down","east","north","south","up","west"])) {
        bsr[b].data[d].default = "north"
        if (block == "End Rod" || block == "Jigsaw Block" || block.toLowerCase().includes("shulker box")) {
          var apobj = {block:block,value:"up"}
          bsr[b].data[d].exception.push(apobj)
          bsr[b].data[d].blocks.splice(bi,1)
          bi--
          continue;
        }
        if (block == "Observer") {
          var apobj = {block:block,value:"south"}
          bsr[b].data[d].exception.push(apobj)
          bsr[b].data[d].blocks.splice(bi,1)
          bi--
          continue;
        }
        continue;
      }
      if (JSON.stringify(bsr[b].data[d].values) == JSON.stringify(["down","east","north","south","west"])) {
        bsr[b].data[d].default = "down"
        continue;
      }
      if (JSON.stringify(bsr[b].data[d].values) == JSON.stringify(["lower","upper"])) {
        bsr[b].data[d].default = "lower"
        continue;
      }
      if (JSON.stringify(bsr[b].data[d].values) == JSON.stringify(["bottom","top"])) {
        bsr[b].data[d].default = "bottom"
        continue;
      }
      if (JSON.stringify(bsr[b].data[d].values) == JSON.stringify(["left","right"])) {
        bsr[b].data[d].default = "left"
        continue;
      }
      if (JSON.stringify(bsr[b].data[d].values) == JSON.stringify(["left","right","single"])) {
        bsr[b].data[d].default = "single"
        continue;
      }
      if (JSON.stringify(bsr[b].data[d].values) == JSON.stringify(["ascending_east","ascending_north","ascending_south","ascending_west","east_west","north_south"])) {
        bsr[b].data[d].default = "north_south"
        continue;
      }
      if (JSON.stringify(bsr[b].data[d].values) == JSON.stringify(["east_west","north_east","north_south","north_west","south_east","south_west","ascending_east","ascending_north","ascending_south","ascending_west"])) {
        bsr[b].data[d].default = "north_south"
        continue;
      }
      if (JSON.stringify(bsr[b].data[d].values) == JSON.stringify(["inner_left", "inner_right", "outer_left", "outer_right", "straight"])) {
        bsr[b].data[d].default = "straight"
        continue;
      }
      if (JSON.stringify(bsr[b].data[d].values) == JSON.stringify(["bottom","top","double"])) {
        bsr[b].data[d].default = "bottom"
        continue;
      }
      if (bsr[b].data[d].values.includes("harp")) {
        bsr[b].data[d].default = "harp"
        continue;
      }
      if (bsr[b].data[d].values.includes("data")) {
        bsr[b].data[d].default = "data"
        continue;
      }
      if (bsr[b].data[d].values.includes("sticky")) {
        bsr[b].data[d].default = "normal"
        continue;
      }
    }
  }
}
//console.log(bsr) //displays the new block_states object
