var app = new PIXI.Application(800, 600, {backgroundColor : 0x1099bb});
document.body.appendChild(app.view);

// // create a texture from an image path
 var texture = PIXI.Texture.fromImage('img/block.png');

// // Scale mode for pixelation
 texture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;

for (var i = 0; i < 10; i++) {
    createBunny(
        Math.floor(Math.random() * app.renderer.width), 
        Math.floor(Math.random() * app.renderer.height)
    );
}

function createBunny(x, y) {

    // create our little bunny friend..
    var bunny = new PIXI.Sprite(texture);

    // enable the bunny to be interactive... this will allow it to respond to mouse and touch events
    bunny.interactive = true;

    // this button mode will mean the hand cursor appears when you roll over the bunny with your mouse
    bunny.buttonMode = true;

    // center the bunny's anchor point
    bunny.anchor.set(0.5);

    // make it a bit bigger, so it's easier to grab
    bunny.scale.set(3);

    // setup events for mouse + touch using
    // the pointer events
    bunny
        .on('pointerdown', onDragStart)
        .on('pointerup', onDragEnd)
        .on('pointerupoutside', onDragEnd)
        .on('pointermove', onDragMove);

        // For mouse-only events
        // .on('mousedown', onDragStart)
        // .on('mouseup', onDragEnd)
        // .on('mouseupoutside', onDragEnd)
        // .on('mousemove', onDragMove);

        // For touch-only events
        // .on('touchstart', onDragStart)
        // .on('touchend', onDragEnd)
        // .on('touchendoutside', onDragEnd)
        // .on('touchmove', onDragMove);

    // move the sprite to its designated position
    bunny.x = x;
    bunny.y = y;

    // add it to the stage
    app.stage.addChild(bunny);
}

function onDragStart(event) {
    // store a reference to the data
    // the reason for this is because of multitouch
    // we want to track the movement of this particular touch
    this.data = event.data;
    this.alpha = 0.5;
    this.dragging = true;
}

function onDragEnd() {
    this.alpha = 1;
    this.dragging = false;
    // set the interaction data to null
    this.data = null;
}

function onDragMove() {
    if (this.dragging) {
        var newPosition = this.data.getLocalPosition(this.parent);
        this.x = newPosition.x;
        this.y = newPosition.y;
    }
}



// var scene = new THREE.Scene();
// var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// var renderer = new THREE.WebGLRenderer();

// renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
// renderer.setClearColor(0x3399ff);
// document.body.appendChild(renderer.domElement);

// // (width, height, depth)
// var geometry = new THREE.BoxGeometry(5, 5, 5);
// var material = new THREE.MeshLambertMaterial({
// 	color: 0xf6546a
// })
// var mesh = new THREE.Mesh(geometry, material);
// scene.add(mesh);

// // (color, intensity)
// var light = new THREE.PointLight(0xffffff, 1.2);
// // (x, y, z)
// light.position.set(0, 0, 6);
// scene.add(light);

// // move the camera back
// camera.position.z = 10;

// function render() {
// 	requestAnimationFrame(render);
// 	// mesh.rotation.x += 0.1;
// 	// mesh.rotation.y += 0.1;
// 	renderer.render(scene, camera);
// }
// render();

// import {uiInit} from './ui';

// uiInit(camera, [mesh]);

require("copy!../index.html");
require("copy!../img/block.png");