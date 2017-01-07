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
   constructor(usersDataParam) {
     this.usersData = usersDataParam;
   }

   findUser(email) { // output = lokasi index ke 2
     for ( var i = 0; i < this.usersData.length; i++ ) {
       if ( this.usersData[i].email == email ) {
         this.userIndex = i;
         return this;
       }
     }
   }

   formatName() {
     var index = this.userIndex;
     this.nama = this.usersData[index].firstName + " " + this.usersData[index].lastName;
     return this
   }

   formatData() {
     // Member name: Squidward Tentacles
     // ID: 104
     // Email: awesomesquidward@yahoo.com
     var index = this.userIndex;
     this.dataNama = `Member name: ${this.nama} \nID: ${this.usersData[index].id} \nEmail: ${this.usersData[index].email}`
     return this
   }

   displayUser() {
     return this.dataNama
   }
 }

 // Driver code
 let userController = new UserController(usersData);

 console.log( userController.findUser("awesomesquidward@yahoo.com").formatName().formatData().displayUser() );


 // result
 // Member name: Squidward Tentacles
 // ID: 104
 // Email: awesomesquidward@yahoo.com
