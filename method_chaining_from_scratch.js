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
    this.first = '';
    this.last = '';
    this.id = 0;
    this.email = '';
  }
  findUser(email){
    for (var i = 0; i < usersData.length; i++) {
      if (usersData[i].email === email) {
        this.first = usersData[i].firstName
        this.last = usersData[i].lastName
        this.email = usersData[i].email
        this.id = usersData[i].id
      }
    }
    return this
  }
  formatName(){
    this.fullName = `${this.first} ${this.last}`;
    return this
  }
  formatData(){
    this.data = `Member name: ${this.fullName} \nID: ${this.id} \nEmail: ${this.email}`;
   return this;
  }
  displayUser(){
    return console.log(this.data);
  }
 }

 // Driver code
 let userController = new UserController;
 userController.findUser("awesomesquidward@yahoo.com").formatName().formatData().displayUser();

 // result
 // Member name: Squidward Tentacles
 // ID: 104
 // Email: awesomesquidward@yahoo.com
