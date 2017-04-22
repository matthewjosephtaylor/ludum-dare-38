// UI module


function mouseDownForCamera(camera, objects) {
	return function (event) {
		let mouse3D = new THREE.Vector3((event.clientX / window.innerWidth) * 2 - 1, //x
			-(event.clientY / window.innerHeight) * 2 + 1, //y
			0.5); //z
		var raycaster = new THREE.Raycaster();
		raycaster.setFromCamera(mouse3D, camera);
		let intersects = raycaster.intersectObjects(objects);
		// Change color if hit block
		if (intersects.length > 0) {
			intersects[0].object.material.color.setHex(Math.random() * 0xffffff);
		}
	}
}

export function uiInit(camera, objects) {
	console.log("initializing Ui...");
	document.addEventListener("mousedown", mouseDownForCamera(camera, objects));
}