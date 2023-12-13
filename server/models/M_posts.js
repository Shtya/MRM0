const {Schema, model} = require("mongoose") 
const postSchema = new Schema ({
    title : {type : String, required : true}, 
    category : {type : String, enum : ["Digital Marketing News" ,"Latest Updates & Insights" , "Tips & Strategies" ], message : "{VALUE is not supported"}, 
    description : {type : String, required : true}, 
    thumbnail : {type : String, required : true}, 
  }, {timestamps : true}) 
  
module.exports = model("posts" , postSchema)