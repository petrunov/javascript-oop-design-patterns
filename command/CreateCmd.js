"use strict";

let CreateCmd = {
  executed: false,
  execute: function (options) {
    this.options = options || {}
    if (!this.executed) {

      let min = 50,
      max = 150

      this.width = Math.random() * (max - min) + min,
      this.height = Math.random() * (max - min) + min,
      this.background = '#'+Math.floor(Math.random() * 16777215).toString(16)

      this.receiver = $('<div/>')
      this.receiver.css('position', 'absolute')
      this.receiver.css('width', this.width)
      this.receiver.css('height', this.height)
      this.receiver.css('background', this.background)
      this.receiver.draggable()
      this.receiver.resizable()


      this.receiver.appendTo('body')

      this.executed = true
    }
  },
  undo: function () {
    if (this.executed) {
      this.receiver.remove()
      this.executed = false
    }
  },
  redo: function () {
    this.execute()
  }
}