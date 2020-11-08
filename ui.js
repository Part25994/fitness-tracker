// YOU EYE DOT JAY ESS

var root = document.getElementById('ui-root')
console.log(root)
let presets = {
  challenge: {
    1: {},
    setup: function() {
      this.i = 0
      root.innerHTML = ""
      root.addChild(this[this.i])
    }
  }
}

function loadPreset(pst) {
  let preset = presets[pst]
  preset.setup(elements)
}
