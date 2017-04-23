// game stuff
import {
	dragify
} from './ui';
import xs from 'xstream';

import * as PIXI from 'pixi.js';

// // create a texture from an image path
const blockHeight = 64;
const blockWidth = 64;
const goalBlockValue = 0x000000;


// // Scale mode for pixelation
// TODO MJT needed?
// blockTexture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;

export function createBlockPalette(size) {
	let result = [];
	for (let i = 0; i < size; i++) {
		let blockValue = goalBlockValue;
		// need to insure the blockValue is not the special begin/end blockValue
		while (blockValue == goalBlockValue) {
			blockValue = PIXI.utils.rgb2hex([Math.random(), Math.random(), Math.random()]);
		}
		result.push(blockValue);
	}
	return result;
}
export function createBlockPaletteR(size) {
	let result = [];
	for (let i = 0; i < size; i++) {
		let blockValue = PIXI.utils.rgb2hex([(i + 1) / size, 0, 0]);
		result.push(blockValue);
	}
	return result;
}

export function createBlockPaletteG(size) {
	let result = [];
	for (let i = 0; i < size; i++) {
		let blockValue = PIXI.utils.rgb2hex([0, (i + 1) / size, 0]);
		result.push(blockValue);
	}
	return result;
}
export function createBlockPaletteB(size) {
	let result = [];
	for (let i = 0; i < size; i++) {
		let blockValue = PIXI.utils.rgb2hex([0, 0, (i + 1) / size]);
		result.push(blockValue);
	}
	return result;
}

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

// goalBlock is optional
export function createBlockGroup(x, y, size, blockPalette, goalBlock) {
	let blockGroup = new PIXI.Container();
	for (let i = 0; i < size; i++) {
		let blockValue = Math.floor(Math.random() * blockPalette);
		// if (goalBlock && (i == Math.floor(size / 2))) {
		if ((i == Math.floor(size / 2))) {
			blockGroup.addChild(createSpriteBlock((i * blockWidth), y, blockValue, true));
		} else {
			blockGroup.addChild(createSpriteBlock((i * blockWidth), y, blockValue, false));
		}
	}
	dragify(blockGroup);
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
		block.drawRoundedRect(0, 0, blockWidth, blockHeight, blockHeight / 2);

	} else {
		block.drawRect(0, 0, blockWidth, blockHeight);

	}
	// block.clear();


	// block.rotation = count * 0.1;
	block.x = x;
	block.y = y;
	return block;
}



//// goalBlock is optional
// export function createBlockGroup(x, y, size, blockPalette, goalBlock) {
// 	let blockGroup = new PIXI.Container();
// 	for (let i = 0; i < size; i++) {
// 		let blockValue;
// 		if ((typeof goalBlock != 'undefined') && (i == Math.floor(size / 2))) {
// 			blockValue = goalBlock;
// 		} else {
// 			blockValue = blockPalette[Math.floor(Math.random() * blockPalette.length)];
// 		}
// 		blockGroup.addChild(createSpriteBlock((i * blockWidth), y, blockValue));
// 		// blockGroup.addChild(createGraphicsBlock((i * blockWidth), y, blockValue));
// 		// blockGroup.addChild(createTextBlock((i * blockWidth), y, blockValue));
// 	}
// 	dragify(blockGroup);
// 	blockGroup.x = x;
// 	blockGroup.y = y;
// 	return blockGroup;
// }


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