// The data store:
var usersData = [{
    firstName: "SpongeBob",
    lastName: "SquarePants",
    email: "spongebob@crustycrab.com",
    id: 102
}, {
    firstName: "Patrick",
    lastName: "Star",
    email: "patric.star@gmail.com",
    id: 103
}, {
    firstName: "Squidward",
    lastName: "Tentacles",
    email: "awesomesquidward@yahoo.com",
    id: 104
}]


let email = [];
let dataOfUser = [];
let userProperties = ['firstName', 'lastName', 'email', 'id'];

// Our object with the chainable methods using class in ES6
class UserController {
 constructor(){
   this.firstName = ''
   this.lastName = ''
   this.email = ''
   this.id = 0
 }

 findUser(userEmail){
   for (var i = 0; i < usersData.length; i++) {
     email.push(usersData[i]['email'])
     if (email[i] == userEmail) {
       for (var j = 0; j < 4; j++) {
         dataOfUser.push( usersData[i][userProperties[j]])
       }
     }
   }

   this.firstName = dataOfUser[0]
   this.lastName = dataOfUser[1]
   this.email = dataOfUser[2]
   this.id = dataOfUser[3]

   return this
 }

 formatName(){
   this.name = `${this.firstName} ${this.lastName}`
   return this;
 }

 formatData(){
   this.formatData = `result \nMember name: ${this.name} \nID: ${this.id} \nEmail: ${this.email}`
   return this;
 }

 displayUser(){
   return console.log(this.formatData);
 }

}

// Driver code
let userController = new UserController;
userController.findUser("awesomesquidward@yahoo.com").formatName().formatData().displayUser();

// result
// Member name: Squidward Tentacles
// ID: 104
// Email: awesomesquidward@yahoo.com
