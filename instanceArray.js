/*
  Your 3 Users will be the following. 
    0) Tyler, tylermcginnis33@gmail.com, 'iLoveJS'
    1) Cahlan, cahlan@devmounta.in, 'iLoveHashtags'
    2) Lenny, lenny@theLenster.com, 'iLoveLentilSoup'
*/

var User = function(name, email, pw){
  this.name = name;
  this.email = email;
  this.pw = pw;
}

//Create an Array called 'users' that will store all our instances of User.

  //code here
var users = [];

//Now create and push into your users array 3 seperate instances of User using the data from above in that exact order

  //code here
var tyler = new User('Tyler', 'tylermcginnis33@gmail.com', 'iLoveJS');
users.push(tyler);
console.log('Tyler\'s information is ' , users[0]);
//Console.log all of Tylers information

//code here
var cahlan = new User('Cahlan', 'cahlan@devmounta.in', 'iLoveHashtags');
users.push(cahlan);
console.log('Cahlan\'s information is ', users[1]);

  //code here
var lenny = new User('Lenny', 'lenny@theLenster.com', 'LoveLentilSoup');
users.push(lenny);
console.log('Lenny\'s information is ', users[2]);
//Now console.log all of Lennys information

//Now create another instance of User using your own information and then add that to your users array.

  //code here
var lezlee = new User('Lezlee', 'lezleeb@gmail.com', 'iLoveWebDev');
users.push(lezlee);
console.log('Lezlee\'s information is ', users[3]);
//Now loop through your users Array and console.log every users name. 

  //code here
var str = '';  
for(var i = 0; i < users.length; i++) {
  str += users[i].name + ', ';
}
console.log('All my users names are ', str);




