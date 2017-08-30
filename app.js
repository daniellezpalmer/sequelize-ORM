const models = require("./models");
function createUser() {
  const user = models.User.build({
    name: 'Danielle Palmer',
    email: 'daniellzpalmer@gamil.com',
    bio: 'student'
  });
  user.save().then(function (newUser) {
    console.log(newUser.dataValues);
  })
}
createUser();

 //^^^^^C OF CRUD^^^^^//

 function listUsers() {
   models.User.findAll().then(function(users) {
     users.forEach(function(user) {
       console.log(user.dataValues);
     })
   })
 }
 listUsers();

//^^^^^R OF CRUD^^^^^//
