import {
	createBlockGroup,
	createBlockPalette,
	createBlockPaletteR,
	createBlockPaletteG,
	createBlockPaletteB,
} from './game';

var app = new PIXI.Application(1920, 1080, {
	backgroundColor: 0xFFFFFF
});
document.body.appendChild(app.view);

// // // create a texture from an image path
// var texture = PIXI.Texture.fromImage('img/block.png');

// // // Scale mode for pixelation
// texture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;

for (var i = 0; i < 1; i++) {
	// let block = createBlock(
	// 	Math.floor(Math.random() * app.renderer.width),
	// 	Math.floor(Math.random() * app.renderer.height)
	// );
	// block.addChild(createBlock(30,0));
	// block.addChild(createBlock(60,0));
	// block.addChild(createBlock(90,0));
	// app.stage.addChild(block);
	// app.stage.addChild(createBlockGroup(0, 0, [0xFF0000, 0x00FF00, 0x0000FF]));
	// app.stage.addChild(createBlockGroup(0, 0, [0xFF0000, 0x00FF00, 0x0000FF]));
	// app.stage.addChild(createBlockGroup(0, 0, [0xFF0000, 0x00FF00, 0x0000FF]));
	// app.stage.addChild(createBlockGroup(0, 0, [0xFF0000, 0x00FF00, 0x0000FF]));
	// let ps = 4;
	// let blockPallet = createBlockPaletteR(ps).concat(createBlockPaletteG(ps)).concat(createBlockPaletteB(ps));

	let blockPallet = 64;
	let numBlocks = 3;

	app.stage.addChild(createBlockGroup(0, 0, numBlocks + 1, blockPallet, true));
	app.stage.addChild(createBlockGroup(0, 0, numBlocks + 1, blockPallet, true));

	for (let j = 0; j < 10; j++) {
		app.stage.addChild(createBlockGroup(0, 0, numBlocks, blockPallet));
	}

	// app.stage.addChild(createBlockGroup(0, 0, numBlocks + 1, blockPallet, 0x000000));
	// app.stage.addChild(createBlockGroup(0, 0, numBlocks + 1, blockPallet, 0x000000));
	// app.stage.addChild(createBlockGroup(0, 0, numBlocks, blockPallet));
	// app.stage.addChild(createBlockGroup(0, 0, numBlocks, blockPallet));
	// app.stage.addChild(createBlockGroup(0, 0, numBlocks, blockPallet));
	// app.stage.addChild(createBlockGroup(0, 0, numBlocks, blockPallet));
	// app.stage.addChild(createBlockGroup(0, 0, numBlocks, blockPallet));
	// app.stage.addChild(createBlockGroup(0, 0, numBlocks, blockPallet));
	reorderBlockGroups(numBlocks + 1);
}



function reorderBlockGroups(groupASize) {
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



require("copy!../index.html");

// yea...this is a bit of a hack
for (let i = 0; i < 64; i++) {
	require("copy!../img/32/" + i + ".png");
	require("copy!../img/64/" + i + ".png");
}