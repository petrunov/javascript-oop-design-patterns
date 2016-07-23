"use strict";

let CreateCmd = {
  type: 'CreateCmd',
  executed: false,
  receiverId: undefined,
  execute: function (options) {

    this.options = options || {}
    if (!this.executed) {
      if (this.receiverId === undefined) {
  			var self = this;
  			this.dragActionOptions = {
  				startLeft: 0,
  				endLeft: 0,
  				startTop: 0,
  				endTop: 0
  			}
  			let min = 50,
  				  max = 150

        function getRandomDarkColor() {
          var letters = '012345'.split('');
          var color = '#';        
          color += letters[Math.round(Math.random() * 5)];
          letters = '0123456789ABCDEF'.split('');
          for (var i = 0; i < 5; i++) {
              color += letters[Math.round(Math.random() * 15)];
          }
          return color;
        }  
  			this.width = Math.random() * (max - min) + min,
  			this.height = Math.random() * (max - min) + min,
  			this.background = getRandomDarkColor()

  			this.options.receiver = $('<div/>')
        this.options.receiver.attr('id', globalId++)
  			this.options.receiver.css('position', 'absolute')
  			this.options.receiver.css('width', this.width)
  			this.options.receiver.css('height', this.height)
        this.options.receiver.css('background', this.background)
  			this.options.receiver.css('cursor', 'pointer')
  			this.options.receiver.draggable({
  				start: function (event) {
  					self.dragActionOptions.startTop = $(this).css('top').split('px')[0];
  					self.dragActionOptions.startLeft = $(this).css('left').split('px')[0];
  				},
  				stop: function (event) {
  					self.dragActionOptions.endTop = $(this).css('top').split('px')[0];
  					self.dragActionOptions.endLeft = $(this).css('left').split('px')[0];
  					commander.execute(Object.assign({}, DragCmd), {receiver: $(this), dragActionOptions: Object.assign({}, self.dragActionOptions)})
  				}
  			})
  			this.options.receiver.resizable({
          handles: "n, e, s, w, ne, es, sw, wn",
          stop: function (e, ui) {
            commander.execute(Object.assign({}, ResizeCmd), {receiver: $(this), originalSize: ui.originalSize, size: ui.size})
          }
        })

        this.options.receiver.mousedown(function () {
          lastClicked = $(this)
        }) 

  			this.options.receiver.appendTo('body')

        this.receiverId = this.options.receiver.attr('id')
        this.executed = true
      } else {
        this.options.receiver = $('#' + this.receiverId)
      }
    }
  },
  undo: function () {
    if (this.executed) {
      this.options.receiver.remove()
      globalId-- // careful
      this.receiverId = undefined 
      this.executed = false
    }
  },
  redo: function () {
    this.execute()
  }
}