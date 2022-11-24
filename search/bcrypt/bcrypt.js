const bcrypt = require("bcryptjs")
let user = { 
    name:"theju",
    email:"theju@.com",
    password:"12345"
}
let salt = bcrypt.genSaltSync(10);
let newPassword = bcrypt.hashSync(user.password, salt);
let newEmail = bcrypt.hashSync(user.email, salt)
console.log(newPassword)
console.log(newEmail)