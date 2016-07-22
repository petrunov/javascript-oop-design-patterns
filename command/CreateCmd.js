"use strict";

let CreateCmd = {
  executed: false,
  isCreated: false,
  execute: function (options) {

    this.options = options || {}
    if (!this.executed) {
		if(!this.isCreated) {
			var self = this;
			this.dragActionOptions = {
				startLeft: 0,
				endLeft: 0,
				startTop: 0,
				endTop: 0
			}
			let min = 50,
				max = 150

			this.width = Math.random() * (max - min) + min,
				this.height = Math.random() * (max - min) + min,
				this.background = '#' + Math.floor(Math.random() * 16777215).toString(16)

			this.receiver = $('<div/>')
			this.receiver.css('position', 'absolute')
			this.receiver.css('width', this.width)
			this.receiver.css('height', this.height)
			this.receiver.css('background', this.background)
			this.receiver.draggable({
				start: function (event) {
					self.dragActionOptions.startTop = $(this).css('top').split('px')[0];
					self.dragActionOptions.startLeft = $(this).css('left').split('px')[0];
				},
				stop: function (event) {
					self.dragActionOptions.endTop = $(this).css('top').split('px')[0];
					self.dragActionOptions.endLeft = $(this).css('left').split('px')[0];
					console.log(self.dragActionOptions)
					commander.execute(
						Object.assign({}, DragCmd, {element: this}, {dragActionOptions: Object.assign({}, self.dragActionOptions)})
					)
				}
			})
			this.receiver.resizable()

			this.receiver.appendTo('body')
			this.isCreated = true;
		}else {
			this.receiver.show();
		}

      this.executed = true
    }
  },
  undo: function () {
    debugger
    if (this.executed) {
      this.receiver.hide()
      this.executed = false
    }
  },
  redo: function () {
    this.execute()
  }
}