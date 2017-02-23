var mongoose = require('mongoose');
var Schema = mongoose.Schema 

var NerdSchema = new Schema({
    name: {type:String, required: true, minlength: 3},
    power : {type:String},
    status: {type: String}, 
    likes: {type: Number}
    
})

mongoose.model('Nerd', NerdSchema);