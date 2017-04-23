// UI module

import * as PIXI from 'pixi.js';
import * as CONST from './game-const';

export function selectify(object, selectable) {
	object.interactive = true;
	object.buttonMode = true;
	object.on('pointerdown', onClick);

	object.select = select(object);
	object.unselect = unselect(object);
	object.selectable = selectable;
	object.selected = false;
}

function onClick(event) {
    this.select();
}


function select(object) {
	return function () {
		if(!object.selectable) {
			return;
		}
		object.parent.children.forEach(c => {
			c.unselect();
		});
		object.selected = true;
		addShadow(object);
	};
}

function unselect(object) {
	return function () {
		object.selected = false;
		removeShadow(object);
	};
}

function addShadow(obj) {
	var gr = new PIXI.Graphics();
	gr.beginFill(0xAAAAAA, 0.5);
	gr.drawRect(-2, -2, (CONST.BLOCK_WIDTH * obj.children.length) + 4, CONST.BLOCK_HEIGHT + 4);
	gr.endFill();
	gr.shadow = true;
	obj.addChild(gr);
}

function removeShadow(obj) {
	obj.children.forEach(c => {
		if (c.shadow) {
			obj.removeChild(c);
		}
	});
}
