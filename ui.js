// YOU EYE DOT JAY ESS

let elements = document.getElementById('ui-root');
let presets = {
  challenge: {
    1: {},
    setup: function() {
    }
  }
}

function loadPreset(pst) {
  let preset = presets[pst]
  preset.setup(elements)
}
