// game board
import * as PIXI from 'pixi.js';

import {
	createBlockGroup
} from './block';
import {
	createTable
} from './table';

export function init() {
	let app = new PIXI.Application(1920, 1080, {
		backgroundColor: 0xFFFFFF
	});
	document.body.appendChild(app.view);
	document.getElementById("mainButton").onclick = testButton(app);
	createTargetTable(app, 50, 50);
	createPickTable(app, 500, 50);
}

function testButton(app) {
	return function () {
		app.stage.children.forEach(c => c.compact());
		// reorderBlockGroups(app, 4);
	};
}

function createTargetTable(app, x, y) {
	let table = createTable();
	let blockPallet = 64;
	let numBlocks = 3;
	table.addChild(createBlockGroup(0, 0, numBlocks + 1, blockPallet, true));
	table.addChild(createBlockGroup(0, 0, numBlocks + 1, blockPallet, true));
	table.compact();
	table.x = x;
	table.y = y;
	app.stage.addChild(table);
}

function createPickTable(app, x, y) {
	let table = createTable();
	let blockPallet = 64;
	let numBlocks = 3;
	for (let i = 0; i < 10; i++) {
		table.addChild(createBlockGroup(0, 0, numBlocks, blockPallet, false));
	}
	table.compact();
	table.x = x;
	table.y = y;
	app.stage.addChild(table);
}
