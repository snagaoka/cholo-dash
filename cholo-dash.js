// utility functions
var _ = {};

/*
Creates an array with all falsey values removed. 
The values false, null, 0, "", undefined, and NaN are all falsey.
*/
_.compact = function (ar) {
	for (var i = ar.length - 1; i >= 0; i--) {
		if(ar[i] == false) {
			ar.splice(i,1);
		};
	};
	return ar;
}

module.exports = _;