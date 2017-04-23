// game board
import * as PIXI from 'pixi.js';

import {createBlockGroup} from './block';

function reorderBlockGroups(app, groupASize) {
	let groupA = 0;
	let groupB = 0;
	app.stage.children.forEach(function (child) {
		if (child.children.length == groupASize) {
			child.x = 50;
			child.y = 50 + groupA;
			groupA += 72;
		} else {
			child.x = 500;
			child.y = 50 + groupB;
			groupB += 72;
		}
	});
}

function testButton(app) {
	return function () {
		reorderBlockGroups(app, 4);
	};
}

function createBlockGroups(app) {

	let blockPallet = 64;
	let numBlocks = 3;

	app.stage.addChild(createBlockGroup(0, 0, numBlocks + 1, blockPallet, true));
	app.stage.addChild(createBlockGroup(0, 0, numBlocks + 1, blockPallet, true));

	for (let j = 0; j < 10; j++) {
		app.stage.addChild(createBlockGroup(0, 0, numBlocks, blockPallet, false));
	}

	reorderBlockGroups(app, numBlocks + 1);
}

export function init() {
	let app = new PIXI.Application(1920, 1080, {
		backgroundColor: 0xFFFFFF
	});
	document.body.appendChild(app.view);
	document.getElementById("mainButton").onclick = testButton(app);
	createBlockGroups(app);
}