"use strict";
let DragCmd = {
  type: 'DragCmd',
  executed: false,
  execute: function (options) {
    let self = this;
    this.options = options || {}

    if (!this.executed) {
      if (this.receiverId === undefined && this.options.receiver.attr('id') !== undefined) {
        this.receiverId = this.options.receiver.attr('id')
      } else if (this.receiverId !== undefined) {
        this.options.receiver = $('#' + this.receiverId)
      }


      this.options.receiver.css('top', this.options.dragActionOptions.endTop + 'px');
      this.options.receiver.css('left', this.options.dragActionOptions.endLeft + 'px');

      this.executed = true
    }
  },
  undo: function () {
    if (this.executed) {
      this.options.receiver.css('top', this.options.dragActionOptions.startTop + 'px');
      this.options.receiver.css('left', this.options.dragActionOptions.startLeft + 'px');
      this.executed = false
    }
  },
  redo: function () {
    this.execute(this.options)
  }
}