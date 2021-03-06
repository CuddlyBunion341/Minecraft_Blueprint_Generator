function fillUl() {
  if (GridObject.version == "1.12") {
    var arr = blocklist_1_12
    var b_ul = document.getElementById('block_ul')
    for (var i = 0; i < arr.length; i++) {
      var base = arr[i].block
      var display = arr[i].display
      var idc = arr[i].id
      if (idc.includes('/')) {
        var idm = idc.split('/')[1]
      }
      else {
        var idm = 0;
      }
      var id = idc.split('/')[0]
      idc = idc.replace("/", ":");
      b_posY = '-48'
      b_posX = '-' + (parseInt(idm) * 48)
      b_posY = '-' + ((parseInt(id)) * 48)
      var pltstr = '<div class="pal_content_image v1_12" style="background-position: ' + b_posX + 'px ' + b_posY + 'px;" data-base = "(minecraft:' + base + ')" data-display = "' + display + '" data-id = "' + idc + '"></div>'
      var frag = document.createRange().createContextualFragment(pltstr);
      b_ul.appendChild(frag)
      var added_e = b_ul.children[b_ul.children.length - 1]
      added_e.addEventListener("click", function(e){
        selectElement(this,e.altKey,e.shiftKey)
      });
      added_e.addEventListener('mouseenter',function (e) {
        rename(this.dataset.display,this.dataset.id,this.dataset.base,e);
      })
      added_e.addEventListener('mouseleave',function (e) {
      })
      if (i == 1) {
        selectElement(added_e,true)
      }
    }
    return;
  }
  if (GridObject.version == "1.14") {
    var arr = blocklist_1_14
    var b_ul = document.getElementById('block_ul')
    for (var i = 0; i < arr.length; i++) {
      var base = arr[i].id
      var display = arr[i].display
      if (arr[i].texture_cord) {
        var texture_cord = arr[i].texture_cord
      }
      else {
        var texture_cord = [-1,-1]
      }
      b_posX = (texture_cord[0] * 48) * -1
      b_posY = (texture_cord[1] * 48) * -1
      var pltstr = '<div class="pal_content_image v1_14" style="background-position: ' + b_posX + 'px ' + b_posY + 'px;" data-base = "' + base + '" data-display = "' + display + '" title="' + base + '"></div>'
      var frag = document.createRange().createContextualFragment(pltstr);
      b_ul.appendChild(frag)
      var added_e = b_ul.children[b_ul.children.length - 1]
      added_e.addEventListener("click", function(e){
        selectElement(this,e.altKey,e.shiftKey)
      });
      added_e.addEventListener('mouseenter',function (e) {
        rename(this.dataset.display,this.dataset.id,this.dataset.base,e);
      },false)
      added_e.addEventListener('mouseleave',function (e) {
      })
      if (i == 1) {
        selectElement(added_e,true)
      }
    }
    return;
  }
}
function selectElement(element,ignore_sound = false) {
  if (element.classList.contains('selected')) {
    return
  }
  for (var i = 0; i < element.parentNode.children.length; i++) {
    element.parentNode.children[i].classList.remove('selected')
  }
  element.classList.add('selected')
  if (!ignore_sound) {
    playAnySound("../project/audio/menu/wood%20click.ogg",0.5)
  }
}
function updateBlockStates(block) {

}
function getMaterial() {
  if (GridObject.version == "1.12") {
    return document.getElementById('block_ul').getElementsByClassName('selected')[0].dataset.id
  }
  if (GridObject.version == "1.14") {
    return document.getElementById('block_ul').getElementsByClassName('selected')[0].dataset.base
  }
}
function prepUl() {
  document.getElementById('block_ul').addEventListener('mousemove', function(e) {
    var x = e.clientX
    var y = e.clientY
    var tt = document.getElementById('tooltip')
    var bounding = tt.getBoundingClientRect();
    if (tt.style.opacity == 1) {
      tt.style.left = e.pageX - bounding.width - 20 + "px"
      tt.style.top = e.pageY - bounding.height / 2 + "px"
    }
  })
  document.getElementById('tooltip').addEventListener('transitionend', function(e) {
    if (this.style.opacity == 0) {
      this.style.display = 'none'
    }
  })
  document.getElementById('block_ul').addEventListener('mouseenter',function(e) {
    var tt = document.getElementById('tooltip')
    tt.style.opacity = 1
    tt.style.display = 'block'
  })
  document.getElementById('block_ul').addEventListener('mouseleave',function(e) {
    var tt = document.getElementById('tooltip')
    tt.style.opacity = 0
  })
}
function rename(display,id,base,e) {
  var tt = document.getElementById('tooltip')
  var d_el = document.getElementById("d_el")
  var b_el = document.getElementById("b_el")
  if (GridObject.version == "1.12") {
    var idc;
    if (id.includes(':')) {
      idc = id.replace(':','/')
    }
    else {
      idc = id + '/' + 0
    }
    d_el.innerHTML = display + ' (' + textFusion('#0000',idc.split('/')[0]) + '/' + idc.split('/')[1] + ')'
    b_el.innerHTML = base
  }
  if (GridObject.version == "1.14") {
    d_el.innerHTML = display
    b_el.innerHTML = base
  }
  var bounding = tt.getBoundingClientRect();
  tt.style.left = e.pageX - bounding.width - 20 + "px"
  tt.style.top = e.pageY - bounding.height / 2 + "px"
  return;
}
function filter(value,list) {
  var shortcut = {
    startOfInput:"^",
    endOfInput:"$",
    excactly:"=",
  }
  list = document.getElementById('block_ul')
  value = value.toLowerCase();
  var child_nodes = list.getElementsByClassName('pal_content_image')
  /*switch (testShortCut(value,shortcut)) {
    case shortcut.startOfInput:
      console.log("startOI");
      break;
    case shortcut.endOfInput:
      console.log("endOI");
      break;
    case shortcut.excactly:
      console.log("exactlyI");
      break;
    default:
      break;
  }*/
  for (var i = 0; i < child_nodes.length; i++) {
    var child_node = child_nodes[i]
    if (GridObject.version == "1.12") {
      var testValues = [child_node.dataset.base,child_node.dataset.display,child_node.dataset.id]
    }
    if (GridObject.version == "1.14") {
      var testValues = [child_node.dataset.base,child_node.dataset.display]
    }
    child_node.style.display = "none"
    for (var a = 0; a < testValues.length; a++) {
      if (testValues[a].toLowerCase().indexOf(value) != -1) {
        child_node.style.display = "inline-block"
      }
    }
  }
}
function testShortCut(value,shortcutObj) {
  for (var property in shortcutObj) {
    if (shortcutObj.hasOwnProperty(property)) {
      if (value.indexOf(shortcutObj[property]) != -1) {
        return shortcutObj[property];
      }
    }
  }
}
function textFusion(x,y,pos) {
  //(#0001/0)
  //x = #0000
  //y = 1
  //result = #0001
  // #0000
  //     1
  var l1 = x.lenght
  var l2 = y.length
  var z;
  for (var i = 0; i < l2; i++) {
    x = x.slice(0, x.length-1);
  }
  x = x + y
  return x;
}
setupArr.push("prepUl()")
setupArr.push("fillUl()")
