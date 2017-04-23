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
	document.getElementById("mainButton").onclick = testButton(app);
	let targetTable = createTargetTable(app, 50, 50, populationSize, friendGroupSize);
	app.stage.addChild(targetTable);
	let pickTable = createPickTable(app, 500, 50, populationSize, friendGroupSize);
	app.stage.addChild(pickTable);
	let testWin = () => {
		if (isComplete(targetTable)) {
			winner(app);
		}
	};
	targetTable.autoMoveRows = autoMoveRows(pickTable, targetTable, testWin);
	pickTable.autoMoveRows = autoMoveRows(pickTable, targetTable, testWin);

	document.getElementById("moveLeftButton").onclick = moveRow(pickTable, targetTable, -2, true, testWin);
	document.getElementById("moveRightButton").onclick = moveRow(targetTable, pickTable, 0, false, testWin);
}

function autoMoveRows(pickTable, targetTable, testWin) {
	return function () {
		moveRow(pickTable, targetTable, -2, true, testWin)();
		moveRow(targetTable, pickTable, 0, false, testWin)();
	};
}

function winner(app) {
	let basicText = new PIXI.Text("WINNER!!!", {
		fontFamily: 'Arial',
		fontSize: 24,
		fill: 0xFF0000,
		align: 'center'
	});
	basicText.x = 500;
	basicText.y = 0;
	app.stage.addChild(basicText);
}

function testButton(app) {
	return function () {
		app.stage.children.forEach(c => c.compact());
	};
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