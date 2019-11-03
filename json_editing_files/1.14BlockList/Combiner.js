window.onload = tablelize
var emarr = []
function tablelizeStates() {
  var table = document.createElement("table")
  table.id = "table"
  var thead = document.createElement('thead')
  var firstRow = document.createElement('tr')
  var state_name = document.createElement('th')
  var state_description = document.createElement('th')
  var texture_change = document.createElement('th')
  var str1 = document.createTextNode('Name')
  var str2 = document.createTextNode('Description')
  var str3 = document.createTextNode('tc')
  state_name.appendChild(str1)
  state_description.appendChild(str2)
  texture_change.appendChild(str3)
  firstRow.appendChild(texture_change)
  firstRow.appendChild(state_name)
  firstRow.appendChild(state_description)
  thead.appendChild(firstRow)
  table.appendChild(thead)
  document.body.appendChild(table);
  var checkhistory = "000111110000010111111111100110101011110001101101110100010010"
  for (var i = 0; i < block_states_raw.length; i++) {
    var table_row = document.createElement("tr")
    var td1 = document.createElement('td')
    var td2 = document.createElement('td')
    var td3 = document.createElement('td')
    var span1 = document.createElement('span')
    var span2 = document.createElement('span')
    var span3 = document.createElement('span')
    var checkbox = document.createElement('input')
    checkbox.type = "checkbox"
    var tn1 = document.createTextNode(block_states_raw[i].name)
    var tn2 = document.createTextNode(block_states_raw[i].description)
    var num = i + 1 + '.'
    var tn3 = document.createTextNode(num)
    span1.appendChild(tn1);
    span2.appendChild(tn2);
    span3.appendChild(tn3)
    td1.appendChild(span1);
    td2.appendChild(span2);
    td3.appendChild(span3)
    td3.appendChild(checkbox);
    table_row.appendChild(td3);
    table_row.appendChild(td1);
    table_row.appendChild(td2);
    table.appendChild(table_row);
    /*table_row.addEventListener("click",function(e) {
      if (this.children[0].children[0].checked) {
        this.children[0].children[0].checked = false
      }
      else {
        this.children[0].children[0].checked = true
      }
    })*/
    if (checkhistory[i] == "1") {
      checkbox.checked = "true"
      emarr.push(block_states_raw[i].name)
    }
  }
  //console.log(emarr);
  if (showSource) {
    var input = document.createElement('input')
    input.value = JSON.stringify(block_states_raw)
    input.style.float = "left"
    input.readOnly = true;
    document.body.appendChild(input)
  }
}
function uh() { //update history
  var string = ""
  var inputS = document.getElementsByTagName('input')
  for (var i = 0; i < inputS.length; i++) {
    if (inputS[i].checked == true){string += "1"}
    else {string += "0"}
  }
  return string
}
function tablelizeBlocks() {
  var table = document.createElement("table")
  table.id = "table"
  var thead = document.createElement('thead')
  var firstRow = document.createElement('tr')
  var bn = document.createElement('th')
  var bd = document.createElement('th')
  var str1 = document.createTextNode('Display')
  var str2 = document.createTextNode('Id')
  bn.appendChild(str1)
  bd.appendChild(str2)
  firstRow.appendChild(bn)
  firstRow.appendChild(bd)
  thead.appendChild(firstRow)
  table.appendChild(thead)
  document.body.appendChild(table);
  for (var i = 0; i < Blocklist14.length; i++) {
    var table_row = document.createElement("tr")
    var td1 = document.createElement('td')
    var td2 = document.createElement('td')
    var span1 = document.createElement('span')
    var span2 = document.createElement('span')
    var tn1 = document.createTextNode(Blocklist14[i].display)
    var tn2 = document.createTextNode(Blocklist14[i].id)
    var num = i + 1 + '.'
    var tn3 = document.createTextNode(num)
    span1.appendChild(tn1);
    span2.appendChild(tn2);
    td1.appendChild(span1);
    td2.appendChild(span2);
    table_row.appendChild(td1);
    table_row.appendChild(td2);
    table.appendChild(table_row);
  }
  if (showSource) {
    var input = document.createElement('input')
    input.value = JSON.stringify(Blocklist14)
    input.style.float = "left"
    input.readOnly = true;
    document.body.appendChild(input)
  }
}
function tablelize() {
  var val = 0
  window.showSource = false
  if (val == 0) {
    tablelizeStates()
  } else if (val == 1) {
    tablelizeBlocks()
  }
}
function merge(copy) {
  var sName,cBlock,cValue
  //First: Add the states:[] property to all elements in the Blocklist.
  for (var a = 0; a < Blocklist14.length; a++) {
    Blocklist14[a].states = []
  }
  //Add all States to the Blocks using many for loops...
  for (var i = 0; i < block_states_raw.length; i++) {
    sName = block_states_raw[i].name
    for (var j = 0; j < block_states_raw[i].data.length; j++) {
      var DefaultVal = block_states_raw[i].data[j].default
      for (var k = 0; k < block_states_raw[i].data[j].blocks.length; k++) {
        cBlock = block_states_raw[i].data[j].blocks[k]
        for (var l = 0; l < Blocklist14.length; l++) {
          //Blocklist14[l].states = []
          if (Blocklist14[l].display == cBlock) {
            var stateObj = {stateName:sName,values:[],default:DefaultVal}
            for (var m = 0; m < block_states_raw[i].data[j].values.length; m++) {
              stateObj.values.push(block_states_raw[i].data[j].values[m])
            }
            Blocklist14[l].states.push(stateObj)
          }
        }
      }
      for (var q = 0; q < block_states_raw[i].data[j].exception.length; q++) {
        var ExceBlock = block_states_raw[i].data[j].exception[q].block
        var ExceDefaultVal = block_states_raw[i].data[j].exception[q].value
        for (var r = 0; r < Blocklist14.length; r++) {
          //Blocklist14[l].states = []
          if (Blocklist14[r].display == ExceBlock) {
            var stateObj = {stateName:sName,values:[],default:ExceDefaultVal}
            for (var s = 0; s < block_states_raw[i].data[j].values.length; s++) {
              stateObj.values.push(block_states_raw[i].data[j].values[s])
            }
            Blocklist14[r].states.push(stateObj)
          }
        }
      }
    }
  }
  if (copy) {

  }
  return Blocklist14
}
