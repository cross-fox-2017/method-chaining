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

// console.log(usersData["firstName"][0]);
 function titleCaseName(str) {


 }

 // Our object with the chainable methods using class in ES6

 class UserController {
   constructor(data){
     this.data =data;
     this.first_name = ""
     this.last_name = ""
     this.email = ""
     this.id = ""
     this.fullName= ""

   }

   titleCaseName(str) {

   }
   formatName(){
     this.fullName = `${this.first_name} ${this.last_name}`
     return this;
   }
   formatData(){
    //  console.log(`Id : ${this.id}`)
     return this
   }
   displayUser(){
     console.log(`Member name: ${this.fullName}`)
     console.log(`Id : ${this.id}`)
     console.log(`Email : ${this.email}`)

    //  console.log
   }
   findUser(n){
     for(let i=0; i<this.data.length;i++){
       if(this.data[i].email == n){
   //  this.email = usersData[]
     this.first_name = usersData[i]["firstName"];
     this.last_name = usersData[i]["lastName"];
     this.email = usersData[i]["email"];
     this.id = usersData[i]["id"];
     break;
    }
     }
     return this
   }
 }

 // Driver code
 let userController = new UserController(usersData);
 userController.findUser("awesomesquidward@yahoo.com").formatName().formatData().displayUser();
// console.log(userController.formatName())

 // result
 // Member name: Squidward Tentacles
 // ID: 104
 // Email: awesomesquidward@yahoo.com
