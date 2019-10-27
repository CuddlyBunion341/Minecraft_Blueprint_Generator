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
        //rename(this.dataset.display,this.dataset.id,this.dataset.base);
      })
      added_e.addEventListener('mouseleave',function (e) {
      })
      if (i == 1) {
        selectElement(added_e)
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
        rename(this.dataset.display,this.dataset.id,this.dataset.base);
      })
      added_e.addEventListener('mouseleave',function (e) {
      })
      if (i == 0) {
        selectElement(added_e)
      }
    }
    return;
  }
}
function selectElement(element) {
  for (var i = 0; i < element.parentNode.children.length; i++) {
    element.parentNode.children[i].classList.remove('selected')
  }
  element.classList.add('selected')
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
    tt.style.left = e.clientX - bounding.width - 20
    tt.style.top = e.clientY - bounding.height / 2
  })
}
function rename(display,id,base) {
  var tt = document.getElementById('tooltip')
  while (tt.firstChild) {
    tt.removeChild(tt.firstChild);
  }
  if (id.includes(':')) {
    idc = id.replace(':','/')
  }
  else {
    idc = id + '/' + 0
  }
  var d_el = document.createElement("div")
  d_el.innerHTML = display + ' (' + textFusion('#0000',idc.split('/')[0]) + '/' + idc.split('/')[1] + ')'
  d_el.style.textShadow = '2px 2px #413E40'
  tt.appendChild(d_el)
  var b_el = document.createElement("div")
  b_el.innerHTML = base
  b_el.style.color = '#595659'
  b_el.style.textShadow = '2px 2px #141314'
}//<div id="tooltip" style="display: block; left: 500px; top: -15px; opacity: 0;"><div style="text-shadow: rgb(65, 62, 64) 2px 2px;">Polished Andesite (#0001/6)</div><div style="color: rgb(89, 86, 89); text-shadow: rgb(20, 19, 20) 2px 2px;">(minecraft:stone)</div></div>
