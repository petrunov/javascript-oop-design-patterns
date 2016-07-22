"use strict";
const commander = {

  // stores a list of executed commands
  executed: [],

  // stores a list of reverted (undone) commands
  reverted: [],

  // execute a given command
  execute: function (command, options) {
    var options = options || {}
    command.execute(options)
    this.executed.push(command)
  },

  // revert the commnand action
  undo: function () {
    let lstCmd = this.executed.pop()
    if (lstCmd) {
      lstCmd.undo()
      this.reverted.push(lstCmd)
    }
  },

  // perform again the same command in the exact same way as the first time it was performed
  redo: function () {
    let lastCmd = this.reverted.pop()
    if (lastCmd) {
      lastCmd.redo()
      this.executed.push(lastCmd)
    }
  }
}

// module.exports = commander