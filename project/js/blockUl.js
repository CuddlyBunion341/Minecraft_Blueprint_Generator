function fillUl(arr) {
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
      var pltstr = '<div class="pal_content_image" style="background-position: ' + b_posX + 'px ' + b_posY + 'px;" data-base = "(minecraft:' + base + ')" data-display = "' + display + '" data-id = "' + idc + '"></div>'
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
  }
function selectElement(element) {
  for (var i = 0; i < element.parentNode.children.length; i++) {
    element.parentNode.children[i].classList.remove('selected')
  }
  element.classList.add('selected')
}
function getMaterial() {
  return document.getElementById('block_ul').getElementsByClassName('selected')[0].dataset.id
}
