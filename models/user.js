const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://error:error@hotel-management-system.vvigqvp.mongodb.net/express_crud");


const userSchema = mongoose.Schema({
    image: String,
    email: String,
    name: String

})

module.exports = mongoose.model('User', userSchema); 
