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
let key = ['firstName','lastName','email','id'];
let userData = [];


// Our object with the chainable methods using class in ES6
class UserController {
 constructor(){
   this.firstName = '';
   this.lastName = '';
   this.email = '';
   this.id = 0;
 }

 findUser(str) {
   for(let i = 0; i < usersData.length; i++){
      email.push(usersData[i]['email']);
      if(email[i] === str){
        for(let j = 0; j < 4; j++){
          userData.push(`${usersData[i][key[j]]}`)
        }
      }
   }
   this.firstName = userData[0];
   this.lastName = userData[1];
   this.email = userData[2];
   this.id = userData[3];
  return this;
 }

 formatName() {
   this.fullName = `${this.firstName} ${this.lastName}`;
   return this;
 }

 formatData() {
   this.formatData = `Member name: ${this.fullName} \nID: ${this.id} \nEmail: ${this.email}`;
   return this;
 }

 displayUser() {
   return console.log(this.formatData);
 }
}


// Driver code
let userController = new UserController;
userController.findUser("patric.star@gmail.com").formatName().formatData().displayUser();

// result
// Member name: Squidward Tentacles
// ID: 104
// Email: awesomesquidward@yahoo.com
