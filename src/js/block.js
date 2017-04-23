// all things block related

import {
	selectify
} from './ui-select';

import * as PIXI from 'pixi.js';
import * as CONST from './game-const';

export function createSpriteBlock(x, y, blockValue, isGoalBlock) {

	//TODO MJT do something special for goalBlock;
	let blockTexture = PIXI.Texture.fromImage("img/64/" + blockValue + ".png");
	let block = new PIXI.Sprite(blockTexture);
	block['blockValue'] = blockValue;

	// block.interactive = true;
	// block.buttonMode = true;
	// block.anchor.set(0.5);
	if (isGoalBlock) {
		block.scale.set(1.1);
	}

	block.x = x;
	block.y = y;
	return block;
}

function getBlockValues(object) {
	return function () {
		let result = [];
		object.children.forEach(c => {
			result.push(c.blockValue);
		});
		return result;
	}
}

export function createBlockGroup(x, y, size, blockPalette, selectable) {
	let blockGroup = new PIXI.Container();
	let previousValues = [];
	for (let i = 0; i < size; i++) {
		let blockValue = Math.floor(Math.random() * blockPalette);
		// There are better ways but this works well enough for now.
		while(previousValues.indexOf(blockValue) != -1) {
			blockValue = Math.floor(Math.random() * blockPalette);
		}
		// if (goalBlock && (i == Math.floor(size / 2))) {
		if ((i == Math.floor(size / 2))) {
			blockGroup.addChild(createSpriteBlock((i * CONST.BLOCK_WIDTH), y, blockValue, true));
		} else {
			blockGroup.addChild(createSpriteBlock((i * CONST.BLOCK_WIDTH), y, blockValue, false));
		}
	}
	selectify(blockGroup, selectable);
	blockGroup.getBlockValues = getBlockValues(blockGroup);
	blockGroup.x = x;
	blockGroup.y = y;
	return blockGroup;
}

export function createGraphicsBlock(x, y, blockValue) {
	// let count = 0.1;
	let block = new PIXI.Graphics();
	block['blockValue'] = blockValue;
	let color = blockValue;
	block.lineStyle(1, 0xFFFFFF, 1);
	block.beginFill(color, 1);
	if (blockValue == goalBlockValue) {
		block.drawRoundedRect(0, 0, CONST.BLOCK_WIDTH, CONST.BLOCK_HEIGHT, CONST.BLOCK_HEIGHT / 2);

	} else {
		block.drawRect(0, 0, CONST.BLOCK_WIDTH, CONST.BLOCK_HEIGHT);
	}
	block.x = x;
	block.y = y;
	return block;
}


export function createTextBlock(x, y, blockValue) {
	let colorValue = PIXI.utils.hex2string(blockValue);
	let basicText = new PIXI.Text(colorValue, {
		fontFamily: 'Arial',
		fontSize: 24,
		fill: blockValue,
		align: 'center'
	});
	// let basicText = new PIXI.Text(colorValue);
	basicText.x = x;
	basicText.y = y;
	return basicText;

}