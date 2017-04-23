// UI module

export function dragify(object) {
	console.log('dragifying', object);
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
	// store a reference to the data
	// the reason for this is because of multitouch
	// we want to track the movement of this particular touch
	this.data = event.data;
	// this.alpha = 0.5;
	// this.scale.set(2);
	this.dragging = true;
}

function onDragEnd() {
	// this.alpha = 1;
	// this.scale.set(1);
	this.dragging = false;
	// set the interaction data to null
	this.data = null;
}

function onDragMove() {
	if (this.dragging) {
		var newPosition = this.data.getLocalPosition(this.parent);
		// var newPosition = event.data.getLocalPosition(this.parent);
		// console.log("--------------------------");
		// console.log('this', this);
		// console.log('this.data', this.data);
		// console.log('this.parent', this.parent);
		// console.log('newPosition', newPosition);
		// console.log('event', event);
		// console.log('this.parent.x', this.parent.x);
		// console.log('this.parent.y', this.parent.y);
		// console.log('this.x', this.x);
		// console.log('this.y', this.y);
		// console.log("--------------------------");

		this.x = newPosition.x;
		this.y = newPosition.y;
	}
}