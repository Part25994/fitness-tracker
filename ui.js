// YOU EYE DOT JAY ESS

let presets = {
  challenge: {
    // stage 1: friend selection
    1: `
      <p>Select a Friend</p>
      <button onclick="friend">Mega Chad</button>
      <button onclick="friend">Jane</button>
      <button onclick="friend">Superhero15</button>
    `,
    // stage 2: challenge selection
    2: `
     <li><button onclick="challenge">Most pushups in a minute</button></li>
     <li><button onclick="challenge">Most situps in a minute</button></li>
     <li><button onclick="challenge">Most steps in a day</button></li>
     <li><button onclick="challenge">most steps in a week</button></li>
     <li><button onclick="challenge">Most burpees in a minute</button></li>
     <input type="text">Other</input>
    `,
    // stage 3: confirmation
    3: ``,
    setup: function() {
      this.i = 1
      let root = document.getElementById("ui-root")
      let obj = this
      root.innerHTML = ""
      root.innerHTML = this[this.i]
      let onclick = function() {
        obj.i = obj.i + 1
        root.innerHTML = obj[obj.i]
      }
      root.children[1].onclick = onclick
      root.children[2].onclick = onclick
      root.children[3].onclick = onclick
    }
  }
}

function loadPreset(pst) {
  let preset = presets[pst]
  preset.setup()
}
