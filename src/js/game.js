// game stuff
// and here is where I would put my game -- if I _had_ one :)

export function hasConnection(groupA, groupB) {
	let bbv = groupB.getBlockValues();
	return groupA.getBlockValues().filter(a => bbv.indexOf(a) > -1).length > 0;
}

export function isComplete(table) {
	console.log("TESTING COMPLETENESS OF", table);
	//filter out the spacer
	let blockGroups = table.children.filter((bg) => bg.getBlockValues().length > 0);

	let result = true;
	//skip top
	for (let i = 1; i < blockGroups.length; i++) {
		if (!hasConnection(blockGroups[i], blockGroups[i - 1])) {
			result = false;
			break;
		}
	}
	return result;
}