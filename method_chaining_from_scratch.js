 // The data store:
 "use strict"
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
   constructor(firstName, lastName, email, id) {
     this.firstName = firstName
     this.lastName = lastName
     this.email = email
     this.id = id
   }

   findUser(user) {
     for (var i = 0; i < usersData.length; i++) {
       if(usersData[i]['firstName'] == user || usersData[i]['lastName'] == user || usersData[i]['email'] == user || usersData[i]['id'] == user) {
         this.firstName = usersData[i]['firstName']
         this.lastName = usersData[i]['lastName']
         this.email = usersData[i]['email']
         this.id = usersData[i]['id']
       }
     }
     return this
   }

   formatName() {
    this.fullName = `${this.firstName} ${this.lastName}`
     return this
   }

   formatData() {
     this.data = `result\nMember name: ${this.firstName} ${this.lastName}\nID: ${this.id}\nEmail: ${this.email}`
     return this
   }

   displayUser() {
     console.log(this.data)
   }
 }

 // Driver code
 let userController = new UserController;
 console.log(userController.findUser("awesomesquidward@yahoo.com"))
 userController.findUser("awesomesquidward@yahoo.com").formatName().formatData().displayUser();


 // result
 // Member name: Squidward Tentacles
 // ID: 104
 // Email: awesomesquidward@yahoo.com
