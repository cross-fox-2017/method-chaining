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

//  function titleCaseName(str) {
//     for (var i = 0; i < str.length; i++) {
//       str[i].fullName = `${str[i].firstName} ${str[i].lastName}`
//     }
//    return str
// }

 // Our object with the chainable methods using class in ES6
 class UserController {
   constructor(){
      this.users = "users"
   }
   titleCaseName(str) {

   };
   findUser (str){
      for (var i = 0; i < str.length; i++) {
         if (usersData[i].email == str){
            this.users = usersData[i]
            break;
         }
      }
      return this
   };
   formatName (){
      this.users.fullName = `${this.users.firstName} ${this.users.lastName}`
      return this
   };
   formatData(){
      this.users.format = `Member name: ${this.users.fullName} \nID: ${this.users.id} \nE-mail: ${this.users.email}`
      return this
   };
   displayUser(){
      return this.users.format
   }
 }

 // Driver code
 let userController = new UserController;
 // console.log(titleCaseName(usersData));
 console.log(userController.findUser("awesomesquidward@yahoo.com").formatName().formatData().displayUser())
 // console.log(userController.formatName());
 //.formatData().displayUser());

 // result
 // Member name: Squidward Tentacles
 // ID: 104
 // Email: awesomesquidward@yahoo.com
