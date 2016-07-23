"use strict";
let DeleteCmd = {
  type: 'DeleteCmd',
	executed: false,
	execute: function (options) {
		this.options = options || {}
		if (!this.executed) {
			if (this.receiverId === undefined && this.options.receiver.attr('id') !== undefined) {
        this.receiverId = this.options.receiver.attr('id')
      } else if (this.receiverId !== undefined) {
        this.options.receiver = $('#' + this.receiverId)
      }
      
			this.options.receiver = this.options.receiver;
			$(this.options.receiver).hide();
			this.executed = true;
		}
	},
	undo: function () {
		if (this.executed) {
			$(this.options.receiver).show();
			this.executed = false;
		}
	},
	redo: function () {
		this.execute(this.options)
	}

}

