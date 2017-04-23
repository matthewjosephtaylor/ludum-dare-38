// game board
import * as PIXI from 'pixi.js';

import {
	createBlockGroup
} from './block';
import {
	createTable
} from './table';
import {
	hasConnection,
	isComplete
} from './game';

export function init(populationSize, friendGroupSize) {
	let app = new PIXI.Application(1920, 1080, {
		backgroundColor: 0xFFFFFF
	});
	document.body.appendChild(app.view);
	document.getElementById("retryButton").onclick = () => reload(app, populationSize, friendGroupSize);
	reload(app, populationSize, friendGroupSize);

	// document.getElementById("moveLeftButton").onclick = moveRow(pickTable, targetTable, -2, true, testWin);
	// document.getElementById("moveRightButton").onclick = moveRow(targetTable, pickTable, 0, false, testWin);
}

function reload(app) {
	let populationSize = document.getElementById("populationSize").value;
	if (populationSize > 64) {
		populationSize = 64;
		document.getElementById("populationSize").value=populationSize;
	}
	let friendGroupSize = document.getElementById("friendGroupSize").value;
	if (friendGroupSize> 7) {
		friendGroupSize= 7;
		document.getElementById("friendGroupSize").value=friendGroupSize;
	}
	app.stage.removeChildren();
	let targetTable = createTargetTable(app, 50, 50, populationSize, friendGroupSize);
	app.stage.addChild(targetTable);
	let pickTable = createPickTable(app, 500, 50, populationSize, friendGroupSize);
	app.stage.addChild(pickTable);
	let testWin = () => {
		if (isComplete(targetTable)) {
			removeBlankRow(targetTable);
			winner(app);
		}
	};
	targetTable.autoMoveRows = autoMoveRows(pickTable, targetTable, testWin);
	pickTable.autoMoveRows = autoMoveRows(pickTable, targetTable, testWin);
}

function removeBlankRow(table) {
	table.children.filter(c => c.children.length <= 0).forEach(c => table.removeChild(c));
}

function autoMoveRows(pickTable, targetTable, testWin) {
	return function () {
		moveRow(pickTable, targetTable, -2, true, testWin)();
		moveRow(targetTable, pickTable, 0, false, testWin)();
	};
}

function winner(app) {
	let basicText = new PIXI.Text("The friends meet YOU WIN!!!", {
		fontFamily: 'Arial',
		fontSize: 24,
		fill: 0xFF0000,
		align: 'center'
	});
	basicText.x = 500;
	basicText.y = 0;
	app.stage.addChild(basicText);
}

function moveRow(source, target, targetIndex, shouldTestForConnection, testWinFunction) {
	return function () {
		source.children.forEach(c => {
			if (c.selected) {
				if (shouldTestForConnection) {
					let idx;
					if (targetIndex < 0) {
						idx = target.children.length + targetIndex;
					} else {
						idx = targetIndex;
					}
					if (hasConnection(target.children[idx - 1], c)) {
						source.removeChild(c);
						target.addChildAt(c, idx);
					} else {
						// console.log("no soup for you!");
					}
				} else {
					source.removeChild(c);
					target.addChildAt(c, targetIndex);
				}
				c.unselect();
			}
		});
		source.compact();
		target.compact();
		testWinFunction();
	};
}


function createTargetTable(app, x, y, populationSize, friendGroupSize) {
	let table = createTable();
	table.addChild(createBlockGroup(0, 0, friendGroupSize, populationSize, false));
	table.addChild(createBlockGroup(0, 0, 0, populationSize, false)); // spacer
	table.addChild(createBlockGroup(0, 0, friendGroupSize, populationSize, false));
	table.compact();
	table.x = x;
	table.y = y;
	return table;
}

function createPickTable(app, x, y, populationSize, friendGroupSize) {
	let table = createTable();
	for (let i = 0; i < 10; i++) {
		table.addChild(createBlockGroup(0, 0, friendGroupSize, populationSize, true));
	}
	table.compact();
	table.x = x;
	table.y = y;
	app.stage.addChild(table);
	return table;
}