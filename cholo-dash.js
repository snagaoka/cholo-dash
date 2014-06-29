// utility functions
var _ = {};

/*
Creates an array with all falsey values removed. 
The values false, null, 0, "", undefined, and NaN are all falsey.
*/
_.compact = function(ar) {
	var newArray = []
	for (var i = ar.length - 1; i >= 0; i--) {
		if(ar[i] != false) {
			newArray.push(ar[i]);
		};
	};
	return newArray;
};

/*
Creates an array excluding all values object of the provided arrays using strict equality for comparisons, i.e. ===.
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
	for (var i = 0; i < ar.length; i++) {
		if(callback(ar[i]) === true) {
			return i;
		};
	};
};

/*
This method is like _.findIndex except that it iterates over elements of a collection from right to left.
If a property name is provided for callback the created "_.pluck" style callback will return the property value of the given element.
 an object is provided for callback the created "_.where" style callback will return true for elements that have the properties of the given object, else false.
*/
_.findLastIndex = function (ar, callback) {
	for (var i = ar.length - 1; i >= 0; i--) {
		if(callback(ar[i]) === true) {
			return i; 
		};
	};
};

/*
Gets the first element or first n elements of an array. 
If a callback is provided elements at the beginning of the array are returned as long as the callback returns truey. 
The callback is bound to thisArg and invoked with three arguments; (value, index, array).
If a property name is provided for callback the created "_.pluck" style callback will return the property value of the given element.
If an object is provided for callback the created "_.where" style callback will return true for elements that have the properties of the given object, else false.
*/
_.first = function (ar, callback, n) {
	var newArray = [];
	for (var i = 0; i < n; i++) {
		//if(callback(ar[i]) < n) {
		newArray.push(ar[i]);
		//};
	};
	return newArray;
};

module.exports = _;