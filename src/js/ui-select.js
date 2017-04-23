// UI module

import * as PIXI from 'pixi.js';

export function selectify(object) {
	object.interactive = true;

	object.buttonMode = true;

	object
		.on('pointerdown', onClick)
}

function onClick(event) {
    this.select();
}

function onDragEnd() {
    if (this.dragging) {
        this.dragging = false;
        // this.displayGroup = this.oldGroup;
        this.scale.x /= 1.1;
        this.scale.y /= 1.1;
        // set the interaction data to null
        this.data = null;
    }
}

function onDragMove() {
    if (this.dragging) {
        var newPosition = this.data.getLocalPosition(this.parent);
        this.x = newPosition.x - this.dragPoint.x;
        this.y = newPosition.y - this.dragPoint.y;
    }
}
