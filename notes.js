//
var obj = {};
obj.key1 = 'val1';

//Maker function
// ////////////////////////////////////
var Person = function(name, age, gender) {
	return {
		name: name,
		age: age,
		gender: gender
		sayName: function() {
			console.log(this.name);
		}
	}
}

var me = Person('Ben', 23, 'M');
console.log(me);


//Constructor function
//prototype allows inheritance
//This is a class
var Person = function(name, age, gender) {
	this.name = name;
	this.age = age;
	this.gender = gender;
	//return this
};

Person.prototype.sayName = function() {
	console.log(this.name);
};

//another class
var Student = function(name, age, gender, subject, goodGrades) {
	Person.call(this, name, age, gender); //this binds the this
	this.subject = subject;
	this.goodGrades = goodGrades;
};
Student.prototype = Object.create(Person.prototype);
Student.prototype.gradesImprove = function() {
	this.goodGrades = true;
};


var me = new Person('Ben', 23, 'M');
me.sayName();

var shay = new Student('Shay', 24, 'F','Music', true);
console.log(shay);
shay.sayName();



console.log(me);


// ///////////////////////////////////////////////
var Desk = function(material, surfaceArea, hasDrawers) {
	this.brand = 'Ikea';
	this.inventoryLevel = inventoryLevel;
	this.material = material;
	this.surfaceArea = surfaceArea;
	this.hasDrawers = hasDrawers;
};
Desk.prototype.changeInventory = function(difference) {
	this.inventoryLevel += difference;
};

var schoolDesk = new Desk('wood', 4, false, 5000);
console.log(schoolDesk);


var WoodDesk = function(material, surfaceArea, hasDrawers, inventoryLevel, woodType) {
	Desk.call(this, material, surfaceArea, hasDrawers, inventoryLevel);
	this.woodType = woodType;
};

WoodDesk.prototype = Object.create(Desk.prototype);
var cherryDesk = new WoodDesk('wood', 4, true, 400, 'cherry');
cherryDesk.changeInventory(50);
console.log(cherryDesk);












