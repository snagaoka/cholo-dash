// utility functions
var _ = {};

// ARRAY
/*
Creates an array with all falsey values removed. 
The values false, null, 0, "", undefined, and NaN are all falsey.
*/
_.compact = function(ar) {
	var newArray = []
	for (var i = ar.length - 1; i >= 0; i--) {
		if(ar[i] != false) {
			newArray.push(ar[i]);
		}
	}
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
			}
		}
	}
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
		}
	}
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
		}
	}
};


/*
Gets the first element or first n elements of an array. 
If a callback is provided elements at the beginning of the array are returned as long as the callback returns truey. 
The callback is bound to thisArg and invoked with three arguments; (value, index, array).
If a property name is provided for callback the created "_.pluck" style callback will return the property value of the given element.
If an object is provided for callback the created "_.where" style callback will return true for elements that have the properties of the given object, else false.

arg2 can be a callback function that accepts a function number.
*/
_.first = function (ar, arg2) {
	var newArray = [];
	if(typeof arg2 === 'function') { 
		for (var i = 0; i < ar.length; i++) {
			if(arg2(ar[i])) {
				newArray.push(ar[i]);
			}
		}
	} else { // assume number
		for (var i = 0; i < arg2; i++){
				newArray.push(ar[i]);
		}
	}
	return newArray;
};

/*
Flattens a nested array (the nesting can be to any depth).
How does the program know when a place in an array has more than one value. 
*/
_.flatten = function (ar) {
	var finalArray = [];
	// for(var i = 0; i < ar.length; i++){
		// makeFlat(ar[i]);
	// }
	makeFlat(ar);
	function makeFlat(tallArray) { //tallArray may be a number
		if(tallArray.hasOwnProperty("length")) { //if array then run makeFlat, else push to final
			//console.log("is an array?");
			for(var i = 0; i < tallArray.length; i++) {
				makeFlat(tallArray[i]); 
			}
		} else { //is not an array
			//console.log("is not an array?");
			finalArray.push(tallArray); //push to final
		}
	}
	return finalArray;
};

/* 
Gets the index at which the first occurrence of value is found using strict equality for comparisons, i.e. ===. 
If the array is already sorted providing true for fromIndex will run a faster binary search. 
*/
_.indexOf = function(ar, arg2, arg3) {
	if(typeof arg3 == ""){
		for(var i = 0; i < ar.length; i++) {
			if(ar[i] == arg2) {
				return i;
			}
		} 
	} else {
		//_.indexOf_2 = function(ar, arg2, arg3) {
			for(var i = arg3; i < ar.length; i++) {
				if(ar[i] == arg2) {
					return i;
				}
			} 
		//}; 
	} // ends else
}; // ends indexOf

/*
Removes all provided values from the given array using strict equality for comparisons, i.e. ===.
*/
_.pull = function(ar, ar1) { 
	for(var i = 0; i < ar.length; i++) {
		for(var j =0; j < ar1.length; j++) {
			if(ar[i] === ar1[j]) {
				ar.splice(j, 1)
			}
		}
	}
	return ar;
};

/*
Removes all elements from an array that the callback returns truey for and returns an array of removed elements. 
The callback is bound to thisArg and invoked with three arguments; (value, index, array).
If a property name is provided for callback the created "_.pluck" style callback will return the property value of the given element.
If an object is provided for callback the created "_.where" style callback will return true for elements that have the properties of the given object, else false.
*/
_.remove = function(ar, callback) {
	var newArray = [];
	for(var i = 0; i < ar.length; i++) {
		if(callback(ar[i] === true)){
			newArray.push(ar[i]);
		}
	}
	return newArray;
};



// COLLECTIONS


/*
Creates an array of elements from the specified indexes, or keys, of the collection. 
*/
_.at = function (ar, arg2) {
	var newArray = [];
	for (var i = ar.length - 1; i >= 0; i--) {
		for (var j = arg2.length -1; j>=0; j--) {
			if(i === arg2[j]){
				newArray.push(ar[i]);
			}
		}
	}
	return newArray;
};

/*
Checks if a given value is present in a collection using strict equality for comparisons, i.e. ===. 
If fromIndex is negative, it is used as the offset from the end of the collection.
*/
_.contains = function (ar, arg1, arg2) {
		if(typeof arg2 == ""){
			for (var i = 0; i < ar.length; i++) {
					if(ar[i] === arg1) {
						//console.log(function);
						return true;
					} else {
						return false;
					}
			}
		} else {
				for (var i = arg2; i < ar.length; i++) {
					if(ar[i] === arg1){
						return true;
					} else {
						return false;
					}
				}			
			}
};

_.map = function(ar, callback){
		var newArray = [];
		for (var i =0; i < ar.length; i++){
			 newArray.push(callback(ar[i]));
		}
		return newArray;
};

 _.max = function(ar){
 		var maxValue = "";
 		for(var i = 0; i < ar.length; i++){
 			if (ar[i] > maxValue){
 				maxValue = ar[i];
 			}
 		}
 		return maxValue;
 };

_.min = function(ar){
 		var minValue = ar[0]; //Why does it not work if I create a null value?
 		for(var i = 0; i < ar.length; i++){
 			if (ar[i] < minValue){
 				minValue = ar[i];
 			}
 		}
 		return minValue;
 };

 _.pluck = function(){} 

module.exports = _;







// _.shuffle = function(){}
// _.where = function(){}


// _.findKey = function(){}
// _.findLastKey = function() {}
// _.isArray = function(){}
// _.has = function(){}
// _.isArray = function(){}
// _.isBoolean = function(){}
// _.isObject = function(){}
// _.isNumber = function(){}
// _.isString = function(){}
