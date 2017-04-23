// UI module

import * as PIXI from 'pixi.js';

export function dragify(object) {
	// console.log('dragifying', object);
	// enable the block to be interactive... this will allow it to respond to mouse and touch events
	object.interactive = true;

	// this button mode will mean the hand cursor appears when you roll over the block with your mouse
	object.buttonMode = true;

	// center the block's anchor point
	// object.anchor.set(0.5);

	// setup events for mouse + touch using
	// the pointer events
	object
		.on('pointerdown', onDragStart)
		.on('pointerup', onDragEnd)
		.on('pointerupoutside', onDragEnd)
		.on('pointermove', onDragMove);
}

function onDragStart(event) {
    if (!this.dragging) {
        this.data = event.data;
        this.dragging = true;
        this.scale.x *= 1.1;
        this.scale.y *= 1.1;
        this.dragPoint = event.data.getLocalPosition(this.parent);
        this.dragPoint.x -= this.x;
        this.dragPoint.y -= this.y;
    }
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
