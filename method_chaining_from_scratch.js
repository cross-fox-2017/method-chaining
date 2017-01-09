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
   constructor(){
     this.indexSearched = 0
     this.fullName = ''
     this.formatTampilan = ''
   }
  //  titleCaseName(str){
   //
  //  }

   findUser(dataSearched){
     for(var i=0; i<usersData.length; i++){
       if(dataSearched == usersData[i].firstName){
         this.indexSearched = i
         return this
       }

       if(dataSearched == usersData[i].lastName){
         this.indexSearched =i
         return this
       }

       if(dataSearched == usersData[i].email){
         this.indexSearched = i
         return this
       }

       if(dataSearched == usersData[i].id){
         this.indexSearched = i
         return this
       }
     }
   }

   formatName(){
     this.fullName = `${usersData[this.indexSearched].firstName} ${usersData[this.indexSearched].lastName}`
     return this
   }

   formatData(){
     this.formatTampilan = `Member name : ${this.fullName}\nID : ${usersData[this.indexSearched].id}\nEmail : ${usersData[this.indexSearched].email}`
     return this
   }

   displayUser(){
     return this.formatTampilan
   }

 }

 // Driver code
 let userController = new UserController;
 console.log(userController.findUser("awesomesquidward@yahoo.com").formatName().formatData().displayUser());

 // result
 // Member name: Squidward Tentacles
 // ID: 104
 // Email: awesomesquidward@yahoo.com
