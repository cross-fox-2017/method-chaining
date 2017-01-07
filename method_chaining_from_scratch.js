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
 }];


 // Our object with the chainable methods using class in ES6
 class UserController {

    constructor(){
        this.data = usersData;
        this.key = "";
        this.result = []
    }

    findUser(string){

      this.string = string;

      return this;
    }

    formatName(){

          for(let i = 0; i < this.data.length;i++){

                    if(this.string == this.data[i]["email"])
                    {
                    this.key = i;
                    return this;
                    }

          }
    }

    formatData(){

        this.result.push(this.data[this.key]);
        return this
    }

    displayUser(){

      console.log(` Member name : ${this.result[0]['firstName']} ${this.result[0]['lastName']} \n ID : ${this.result[0]['id']} \n ${this.result[0]['email']}`);
    }


 }

 // Driver code
 let userController = new UserController;
 userController.findUser("awesomesquidward@yahoo.com").formatName().formatData().displayUser();
 // userController.findUser("awesomesquidward@yahoo.com").formatName();

 // result
 // Member name: Squidward Tentacles
 // ID: 104
 // Email: awesomesquidward@yahoo.com
