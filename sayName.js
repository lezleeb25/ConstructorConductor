//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

  //code here
var Person = function(name, age) {
	this.name = name;
	this.age = age;
}

//Now create three instances of Person with data you make up

  //code here
var staci = new Person('Staci', 29);
var mike = new Person('Mike', 39);
var karen = new Person('Karen', 49);

//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

  //code here
Person.prototype.sayName = function() {
	alert(this.name);
}

staci.sayName();
mike.sayName();
karen.sayName();