//Just like you can add methods to your own constructor, you can also add methods and properties to built in classes in JavaScript like Arrays and Objects.

//Add a reverse method to the String 'class' so that every instance of String can call reverse and reverse itself.
  
  //code here
//String.prototype.reverse=function(){return this.split("").reverse().join("");}

String.prototype.reverse = function() {
	return this.split("").reverse().join("");
}
var x = 'This is my long string to reverse';
x.reverse();



// ///////////////////////////////////////////////
// Test Reverse
var revStr ='This is my long string to reverse';
var myReverse = function(revStr) {
  return revStr.split("").reverse().join("");
}
alert(myReverse(revStr));


String.prototype.reverse = function() {
  return this.split("").reverse().join("");
};

alert("Hello world!!!".reverse()); // !!!dlrow olleH
alert("rise to vote sir".reverse()); // ris etov ot esir
alert("smart trams".reverse()); // smart trams
