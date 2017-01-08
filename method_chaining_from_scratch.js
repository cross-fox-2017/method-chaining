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

 // Our object with the chainable methods using class in ES6
 class UserController {
   constructor() {
    this.user = ""
   } 

   findUser(emailUser){
      for (let i = 0; i < usersData.length; i++) {
         if (usersData[i].email == emailUser){
            this.user = usersData[i]
         }
      }
      return this
   }

   formatName() {
    this.user.userName = `${this.user.firstName} ${this.user.lastName}`
    return this
   }

   formatData() {
    this.user.formatDataUser = `Member name : ${this.user.userName}, ID : ${this.user.id}, Email : ${this.user.email}` 
    return this
   }

   displayUser() {
    return this.user.formatDataUser
   }
 }
 // Driver code
 let userController = new UserController;
 console.log(userController.findUser("awesomesquidward@yahoo.com").formatName().formatData().displayUser())

 // result
 // Member name: Squidward Tentacles
 // ID: 104
 // Email: awesomesquidward@yahoo.com
