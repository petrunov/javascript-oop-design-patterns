"use strict";
let ResizeCmd = {
  type: 'ResizeCmd',
  executed: false,
  execute: function (options) {
    
    this.options = options || {}

    if (!this.executed) {
      if (this.receiverId === undefined && this.options.receiver.attr('id') !== undefined) {
        this.receiverId = this.options.receiver.attr('id')
      } else if (this.receiverId !== undefined) {
        this.options.receiver = $('#' + this.receiverId)
      }

      this.options.receiver.css('width', this.options.size.width)
      this.options.receiver.css('height', this.options.size.height)
      this.executed = true
    }
  },

  undo: function () {
    if (this.executed) {
      this.options.receiver.css('width', this.options.originalSize.width)
      this.options.receiver.css('height', this.options.originalSize.height)
      this.executed = false
    }
  },
  
  redo: function () {
    this.execute(this.options)
  }
}
