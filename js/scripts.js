$( ()=> {
	// Modified from https://codepen.io/leaverou/pen/RmwzKv
	// Originally based on http://jsfiddle.net/MC53K/

	let origPathT = document.getElementById('origPathT');
	let relPathT = document.getElementById('relPathT');
	let absPathT = document.getElementById('absPathT');

	origPathT.oninput = evt => {
		let path = origPathT.value;
		origPath.setAttribute('d', path);

		let pathRel = Snap.path.toRelative(path);
		relativePath.setAttribute('d', pathRel);
		relPathT.value = pathRel;
		
		let pathAbs = Snap.path.toAbsolute(path);
		absolutePath.setAttribute('d', pathAbs);
		absPathT.value = pathAbs;
	};

	origPathT.onfocus = relPathT.onfocus = absPathT.onfocus = evt => this.select();

	origPathT.select();

	if(origPathT.value) origPathT.oninput();
});