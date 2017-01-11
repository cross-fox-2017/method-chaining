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
   constructor(){
     this.search = 0;
     this.fullName = '';
     this.tampilan = '';
   }
   findUser(data){
     for(var i=0; i<usersData.length; i++){
       if(data == usersData[i].firstName){
         this.search = i
         return this
       }

       else if(data == usersData[i].lastName){
         this.search =i
         return this
       }

       else if(data == usersData[i].email){
         this.search = i
         return this
       }

       else if(data == usersData[i].id){
         this.search = i
         return this
       }
     }
   }

   formatName(){
     this.fullName = `${usersData[this.search].firstName} ${usersData[this.search].lastName}`
     return this
   }

   formatData(){
     this.tampilan = `Member name : ${this.fullName}\nID : ${usersData[this.search].id}\nEmail : ${usersData[this.search].email}`
     return this
   }

   displayUser(){
     return this.tampilan
   }

 }

 // Driver code
 let userController = new UserController;
 console.log(userController.findUser("awesomesquidward@yahoo.com").formatName().formatData().displayUser());

 // result
 // Member name: Squidward Tentacles
 // ID: 104
 // Email: awesomesquidward@yahoo.com
