/**
 * Created by Yana_Ivanova on 7/22/2016.
 */
"use strict";

let ResizeCmd = {
    executed: false,

    execute: function () {
        if (!this.executed) {
            this.executed = true;
            $(this.element).css('width', this.width);
            $(this.element).css('height', this.height);

        }
    },
    undo: function () {
        if (this.executed) {
            this.executed = false;
            $(this.element).css('width', this.originalWidth);
            $(this.element).css('height', this.originalHeight);

        }
    },
    redo: function () {
        this.execute()
    }

}