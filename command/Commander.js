"use strict";
var commander = {

  // stores a list of executed commands
  executed: [],

  // stores a list of reverted (undone) commands
  reverted: [],

  // execute a given command
  execute: function (command, options) {
    var options = options || {}
    command.execute(options)
    this.executed.push(command)
    this.reverted = []
  },

  // revert the commnand action
  undo: function () {
    let lastCmd = this.executed.pop()
    if (lastCmd) {
      lastCmd.undo()
      this.reverted.push(lastCmd)
    }
  },

  // perform again the same command in the exact same way as the first time it was performed
  redo: function () {
    let lastCmd = this.reverted.pop()
    if (lastCmd) {
      lastCmd.redo()
      this.executed.push(lastCmd)
    }
  },
  save: function () {
    let exportStr,
        reverted = this.executed.slice().concat(this.reverted.slice()).reverse()

    reverted.forEach(function (cmd) {
      cmd.executed = false
      if (cmd.receiverId) {
        if (cmd.options) {
          cmd.options.receiver = null
        }
      } else {
        if (cmd.options) {
          cmd.options.receiver = toJSON(cmd.options.receiver)
        }
      }  
    })

    exportStr = stringify(reverted)

    console.log(exportStr)
  },
  load: function (importStr) {
    let reverted = JSON.parse(importStr)
    reverted.forEach(function(cmd) {
      let types = {
        CreateCmd,
        DeleteCmd,
        DragCmd,
        ResizeCmd
      }
      // restore methods
      cmd = Object.assign(cmd, types[cmd.type])
    })

    this.reverted = reverted
  } 
}

// module.exports =  commander