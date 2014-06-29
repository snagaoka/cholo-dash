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
};

/*
Creates an array excluding all values of the provided arrays using strict equality for comparisons, i.e. ===.
*/
_.difference = function (ar, values) {
	for (var i = ar.length - 1; i >= 0; i--) {
		for (var j = values.length - 1; j >= 0; j--) {
			if(ar[i] === values[j]) {
				ar.splice(i, 1);
			};
		};
	};
	return ar;
};

/*
This method is like _.find except that it returns the index of the first element that passes the callback check, instead of the element itself.
If a property name is provided for callback the created "_.pluck" style callback will return the property value of the given element.
If an object is provided for callback the created "_.where" style callback will return true for elements that have the properties of the given object, else false.
*/
_.findIndex = function (ar, callback) {
	for (var i = ar.length - 1; i >= 0; i--) {
		if(callback(ar[i]) === true) {
			return i;
		};
	};
};

module.exports = _;