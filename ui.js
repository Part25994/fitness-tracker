// YOU EYE DOT JAY ESS

let presets = {
  challenge: {
    // stage 1: friend selection
    1: `
      <p>Select a Friend</p>
      <button onclick="friend">Mega Chad</button>
      <button onclick="friend">Jane</button>
    `,
    // stage 2: challenge selection
    2: ``,
    // stage 3: confirmation
    3: ``,
    setup: function() {
      this.i = 1
      let root = document.getElementById("ui-root")
      root.innerHTML = ""
      root.innerHTML = this[this.i]
      let onclick = function() {
        
      }
    }
  }
}

function loadPreset(pst) {
  let preset = presets[pst]
  preset.setup()
}
