"use strict";

let DeleteCmd = {

	executed: false,
	execute: function (options) {
		this.options = options || {}
		if (!this.executed) {

			//this.receiver = this.options.receiver;
			$(this.receiver).hide();
			this.executed = true;
		}
	},
	undo: function () {
		if (this.executed) {
			$(this.receiver).show();
			this.executed = false;
		}
	},
	redo: function () {
		this.execute()
	}

}
//

