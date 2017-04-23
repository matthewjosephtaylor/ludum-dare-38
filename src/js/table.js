// we need the concept of an ordered table that keeps things nice and neat.

import * as PIXI from 'pixi.js';


export function createTable() {
	let table = new PIXI.Container();
	table.compact = compact(table);
	return table;
}

function compact(table) {
	return function () {
		// let oldChildren = table.children;
		// table.removeChildren();
		let row = 0;
		table.children.forEach(function (child) {
			// table.addChild(child);
			child.x = 50;
			child.y = 50 + row;
			row += 72;
		});
	};
}