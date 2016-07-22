"use strict";
let IncCmd = {
  executed: false,


  execute: function (options) {
    this.options = options || {}
    console.log(options)
    if (!this.executed) {
      this.receiver = options.receiver
      console.log(this.receiver)
      this.receiver.num++
      this.executed = true
    }
  },


  undo: function () {
    if (this.executed) {
      this.receiver.num--
      this.executed = false
    }
  },

  
  redo: function () {
    this.execute(this.options)
  }
}


module.exports = IncCmd