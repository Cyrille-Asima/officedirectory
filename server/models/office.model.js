const mongoose = require('mongoose')

const OfficeSchema = new mongoose.Schema({

    firstName: {
        type:String,
        required: [true,"First Name is required!"],
        minLength:[3, "Must be at least 3 characters!"],

        },

    lastName: {
        type:String,
        required: [true,"Last Name is required!"],
        minLength:[3, "Must be at least 3 characters!"],
    },

    department: {
        type:String,
        required: [true,"Department is required!"],
        minLength:[3, "Must be at least 3 characters!"],
    },
    
    position: {
        type:String,
        required: [true,"Position is required!"],
        minLength:[3, "Must be at least 3 characters!"],
    },
    
    background: {
        type:String,
        required: [true,"Background is required!"],
        minLength:[3, "Must be at least 3 characters!"],
    },
    
    role: {
        type:String,
        required: [true,"Role is required!"],
        minLength:[3, "Must be at least 3 characters!"],
    },
    
    employeeSince: {
        type:Number,
        required: [true,"Employee duration is required!"],
        // minLength:[3, "Must be at least 3 characters!"],
    },
    
    email: {
        type:String,
        required: [true,"Email is required!"],
        minLength:[3, "Must be at least 3 characters!"],
    },
    
    number: {
        type:Number,
        required: [true,"Number is required!"],
        minLength:[10, "Must be at least 10 characters!"],
    },
    
    image: {
        type:String,
        required: [true,"Profile image is required!"],
    },

    



}, {timestamps:true}) 

const Office = mongoose.model('Office', OfficeSchema)

module.exports = Office
