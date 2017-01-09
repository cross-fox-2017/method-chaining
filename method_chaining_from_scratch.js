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

   constructor(name,namaDepan,namaBelakang,emails,idNum,fullName,data){
     this.name= this;
     this.namaDepan =namaDepan
     this.namaBelakang=namaBelakang
     this.emails=emails
     this.idNum=idNum
     this.fullName= fullName
     this.data= data
   }

   findUser(user){
     for(var i=0;i<usersData.length;i++){
       if(usersData[i]['firstName'] === user || usersData[i]['lastName'] === user || usersData[i]['email'] === user || usersData[i]['id'] === user){
         this.namaDepan = usersData[i]['firstName']
         this.namaBelakang = usersData[i]['lastName']
         this.emails= usersData[i]['email']
         this.idNum = usersData[i]['id']

       }

     }
     return this.name;

   }
   formatName(){

    this.fullName= `${this.namaDepan} ${this.namaBelakang}`

    return this.name;
   }
   formatData(){
     this.data = `result \n Member Name: ${this.fullName} \n ID: ${this.idNum} \n Email: ${this.emails}`
     return this.name;
   }
   displayUser(){
     console.log(this.data)
   }
 }

 // Driver code
 let userController = new UserController;
 userController.findUser("awesomesquidward@yahoo.com").formatName().formatData().displayUser();

 // result
 // Member name: Squidward Tentacles
 // ID: 104
 // Email: awesomesquidward@yahoo.com
