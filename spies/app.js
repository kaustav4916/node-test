module.exports.handleSignup =(email,password) =>{
//check if the email already exits
//Save the user to the database
db.saveUser({email,password});
//Send the welcome email
};