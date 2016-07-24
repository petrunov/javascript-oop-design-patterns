"use strict";
var commander = {

  player: 0,

  time: 100,

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

  // perform again the same command in the exact same way as the first this.time it was performed
  redo: function () {
    let lastCmd = this.reverted.pop()
    if (lastCmd) {
      lastCmd.redo()
      this.executed.push(lastCmd)
    }
  },
  rewind: function() {
    clearInterval(this.player)
    this.player = undefined
    this.player = setInterval(function () {
      if (commander.executed.length === 0) {
        clearInterval(this.player)
        return
      }
      commander.undo()
    }, this.time)
  },
  play: function() {
    clearInterval(this.player)
    this.player = undefined
    this.player = setInterval(function () {
      if (commander.reverted.length === 0) {
        clearInterval(this.player)
        return
      }
      commander.redo()
    }, this.time)
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