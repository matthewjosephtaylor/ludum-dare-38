import {
	init
} from './board';

init();


// All the copy file stuff

require("copy!../index.html");
// yea...this is a bit of a hack
for (let i = 0; i < 64; i++) {
	require("copy!../img/32/" + i + ".png");
	require("copy!../img/64/" + i + ".png");
}