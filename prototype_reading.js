
var blah = function(arr, callback) {
	var temp;
	var tempArr = arr;
	for(var i = arr.length - 1; i > 0; i--) {
		for(var j = 0; j < tempArr.length; j++) {


		}
	}
}


var colorArr = ['yellow', 'blue', 'red', 'purple', 'red', 'yellow'];
blah(colorArr, function(noDups) {
	console.log('No duplicates: ' + noDups);
});


//Callback on duplicates - Ben's example

var removeDuplicates = function(arr, cb) {
	var uniqObj = {};
	var uniqArr = [];

	for(var i =0; i <arr.length; i++) {
		uniqObj[arr[i]] = null;
	}
	for (var key in uniqObj) {
		uniqArr.push(key);
	}
	cb(uniqArr);

};

removeDuplicates(['a','a','a','b','c','e','ee'], function(arr){
	console.log(arr);
});

// /////////////////////////////////////////////////////////





// /////////////////////////////////////////////////////////
function PrintStuff (myDocuments) {
    this.documents = myDocuments;
}

PrintStuff.prototype.print = function () {
    console.log(this.documents);
};

var newObj = new PrintStuff ("I am a new Object and I can print.");

newObj.print (); //I am a new Object and I can print.




function PrintStuff (myDocuments) {
	this.documents = myDocuments;
}
​
​// We add the print () method to PrintStuff prototype property so that other instances (objects) can inherit it:​
PrintStuff.prototype.print = function () {
	console.log(this.documents);
};
​
​// Create a new object with the PrintStuff () constructor, thus allowing this new object to inherit PrintStuff's properties and methods.​
​var newObj = new PrintStuff ("I am a new Object and I can print.");
​
​// newObj inherited all the properties and methods, including the print method, from the PrintStuff function. Now newObj can call print directly, even though we never created a print () method on it.​
newObj.print (); //I am a new Object and I can print.


// //////////////////////////////////////////////////////

function Plant () {
​this.country = "Mexico";
​this.isOrganic = true;
}
​
​// Add the showNameAndColor method to the Plant prototype property​
Plant.prototype.showNameAndColor =  function () {
console.log("I am a " + this.name + " and my color is " + this.color);
}
​
​// Add the amIOrganic method to the Plant prototype property​
Plant.prototype.amIOrganic = function () {
​if (this.isOrganic)
console.log("I am organic, Baby!");
}
​
​function Fruit (fruitName, fruitColor) {
​this.name = fruitName;
​this.color = fruitColor;
}
​
​// Set the Fruit's prototype to Plant's constructor, thus inheriting all of Plant.prototype methods and properties.​
Fruit.prototype = new Plant ();
​
​// Creates a new object, aBanana, with the Fruit constructor​
​var aBanana = new Fruit ("Banana", "Yellow");
​
​// Here, aBanana uses the name property from the aBanana object prototype, which is Fruit.prototype:​
console.log(aBanana.name); // Banana​
​
​// Uses the showNameAndColor method from the Fruit object prototype, which is Plant.prototype. The aBanana object inherits all the properties and methods from both the Plant and Fruit functions.​
console.log(aBanana.showNameAndColor()); // I am a Banana and my color is yellow.






