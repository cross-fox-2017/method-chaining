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
 // function titleCaseName(str) {
 //
 // }

 // Our object with the chainable methods using class in ES6
 class UserController {

   constructor() {
     this.input   = usersData;
     this.Temp    = "";
     this.result  = [];
   }

   findUser(str){
     this.str = str;
     return this;
   }

   formatName(){
     for (let i = 0; i < this.input.length; i++) {
       if(this.str == this.input[i]["email"]){
         this.Temp = i;
         return this;
       }
     }
   }

   formatData(){
     this.result.push(this.input[this.Temp]);
     return this;
   }

   displayUser(){
     console.log(`Member Name : ${this.result[0]['firstName']} ${this.result[0]['lastName']}\nID : ${this.result[0]['id']}\nEmail : ${this.result[0]['email']}`)
   }
 }

 // Driver code
 let userController = new UserController;
 userController.findUser("awesomesquidward@yahoo.com").formatName().formatData().displayUser();

 // result
 // Member name: Squidward Tentacles
 // ID: 104
 // Email: awesomesquidward@yahoo.com
