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

 function titleCaseName(str) {

 }

 // Our object with the chainable methods using class in ES6
 class UserController {
   constructor(){
     this._firsName = ''
     this._lastName = ''
     this._id = 0
     this._email = ''
     this._result = ''
   }
   titleCaseName(str) {

   }
   findUser(email){
     for (var i = 0; i < usersData.length; i++) {
       if (usersData[i].email === email) {
         this._firsName = usersData[i].firstName
         this._lastName = usersData[i].lastName
         this._email = usersData[i].email
         this._id = usersData[i].id
       }
     }
     return this
   }
   formatName(){
     this._result = `${this._firsName} ${this._lastName}`
     return this
   }
   formatData(){
     this._result = `Member Name: ${this._firsName} ${this._lastName} ID: ${this._id} Email: ${this._email}`
     return this
   }
   displayUser(){
     return this._result
   }
 }

 // Driver code
 let userController = new UserController;
 // console.log(userController.formatData());
 // console.log(userController.formatName());
 console.log(userController.findUser("awesomesquidward@yahoo.com").formatName().formatData().displayUser())

 // result
 // Member name: Squidward Tentacles
 // ID: 104
 // Email: awesomesquidward@yahoo.com
