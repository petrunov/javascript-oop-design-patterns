const Commander = {
  executed: [],
  reverted: [],
  execute: function (command) {
    command.execute()
    this.executed.push(command)
  },
  undo: function () {
    let lstCmd = this.executed.pop()
    if (lstCmd) {
      lstCmd.undo()
      this.reverted.push(lstCmd)
    }
  },
  redo: function () {
    let lastCmd = this.reverted.pop()
    if (lastCmd) {
      lastCmd.redo()
    }
  }
}


module.exports = Commander