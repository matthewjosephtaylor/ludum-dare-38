var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
renderer.setClearColor(0x3399ff);
document.body.appendChild(renderer.domElement);

// (width, height, depth)
var geometry = new THREE.BoxGeometry(5, 5, 5);
var material = new THREE.MeshLambertMaterial({
	color: 0xf6546a
})
var mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// (color, intensity)
var light = new THREE.PointLight(0xffffff, 1.2);
// (x, y, z)
light.position.set(0, 0, 6);
scene.add(light);

// move the camera back
camera.position.z = 10;

function render() {
	requestAnimationFrame(render);
	// mesh.rotation.x += 0.1;
	// mesh.rotation.y += 0.1;
	renderer.render(scene, camera);
}
render();

import {foo} from './ui';

foo();

require("copy!../index.html");