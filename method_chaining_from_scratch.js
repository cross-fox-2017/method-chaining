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

   constructor() {
     this.input   = userData;
     this.Temp    = "";
     this.reulst  = [];
   }

   formatName(){
     for (let i = 0; i < this.input.length; i++) {
       if(this.string == this.input[i]){

       }

     }
   }
 }

 // Driver code
 let userController = new UserController;
 userController.findUser("awesomesquidward@yahoo.com").formatName().formatData().displayUser();

 // result
 // Member name: Squidward Tentacles
 // ID: 104
 // Email: awesomesquidward@yahoo.com
