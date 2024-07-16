const mongoose = require('mongoose');

const transectionSchema = new mongoose.Schema(
   {
   userid:{
      type:String,
      requires:[true],
   },
   amount:{
    type:Number,
    required:[true,'amount is required'],
   },
   type:{
    type:String,
    required:[true,'type is required'],
   },
   category:{
    type:String,
    required:[true,'category is required'],
   },
   reference:{
    type:String,
   },
   description:{
    type:String,
    required:[true,'description is required'],
   },
   date:{
    type:Date,
    required:[true,'date is required'],
   },

},
{timestamps: true})

const transectionModel = mongoose.model('transections',transectionSchema);
module.exports = transectionModel;
