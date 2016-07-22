"use strict";
let DragCmd = {
  executed: false,
  element: null,
  dragActionOptions: {
    startLeft: 0,
    endLeft: 0,
    startTop: 0,
    endTop: 0
  },
  execute: function (options) {
    var self = this;


    this.options = options || {}
    if (!this.executed) {

      $(this.element).css('top', this.dragActionOptions.endTop + 'px');
      $(this.element).css('left', this.dragActionOptions.endLeft + 'px');

      this.executed = true
    }
  },
  undo: function () {
    debugger
    if (this.executed) {
      $(this.element).css('top', this.dragActionOptions.startTop + 'px');
      $(this.element).css('left', this.dragActionOptions.startLeft + 'px');
      this.executed = false
    }
  },
  redo: function () {
    this.execute()
  }
}