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
    for (var i = 0; i < str.length; i++) {
      str[i].fullName = `${str[i].firstName} ${str[i].lastName}`
    }
   return str
 }

 // Our object with the chainable methods using class in ES6
 class UserController {
   constructor(){
      this.usersData = usersData
   }
   titleCaseName(str) {

   }
   findUser(str){
      for (var i = 0; i < str.length; i++) {
         if (usersData[i].email == str){
            return this.usersData[i]
         }
      }
      return `${str} is not found`
   }
   formatName(){
      this.fullName = `${this.firstName} ${this.lastName}`
      return this
   }
   formatData(){
      return this
   }
   displayUser(){
      return console.log(str)
   }
 }

 // Driver code
 let userController = new UserController;
 // console.log(titleCaseName(usersData));
 console.log(userController.findUser("awesomesquidward@yahoo.com").formatName())
 //.formatData().displayUser());

 // result
 // Member name: Squidward Tentacles
 // ID: 104
 // Email: awesomesquidward@yahoo.com
