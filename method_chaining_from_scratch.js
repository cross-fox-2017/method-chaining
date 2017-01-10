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
     this.firstName  = ''
     this.lastName   = ''
     this.fullName   = ''
     this.id         = 0
     this.email      = ''
     this._formatData = []
   }

   findUser(email) {
     for(var i = 0; i < usersData.length; i++){
       if(usersData[i].email == email){
         this.firstName = usersData[i].firstName
         this.lastName  = usersData[i].lastName
         this.id        = usersData[i].id
         this.email     = usersData[i].email
       }
     }
     return this;
   }

   formatData() {
     this._formatData.push(this.fullName)
     this._formatData.push(this.id)
     this._formatData.push(this.email)

     return this;
   }

   displayUser() {
     console.log(`Member Name : ${this._formatData[0]} \n ID : ${this._formatData[1]} \n Email : ${this._formatData[2]} `)
     return this;
   }

   formatName() {
     this.fullName = this.firstName + ' ' + this.lastName
     return this;
   }
 }

 // Driver code
 let userController = new UserController;
 userController.findUser("awesomesquidward@yahoo.com").formatName().formatData().displayUser();

 // result
 // Member name: Squidward Tentacles
 // ID: 104
 // Email: awesomesquidward@yahoo.com
