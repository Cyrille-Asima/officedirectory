const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required: [true, "Username name is required"]
    },
    email:{
        type:String,
        required: [true, "Email is required"],
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Please enter a valid email"
        }
    },
    password:{
        type:String,
        required: [true, "Password is required"],
        minlength: [8, "Password must be 8 characters or longer"],
    },
    

}, {timestamps:true})

UserSchema.virtual('confirmPassword')
.get(() => this._confirmPassword )
.set((value) => {this._confirmPassword = value;});

UserSchema.pre('validate', function(next) {
    if (this.password !== this.confirmPassword) {
    this.invalidate('confirmPassword', 'Password must match confirm password');
    }
    next();
});


UserSchema.pre('save', function(next) {
    bcrypt.hash(this.password, 10)
    .then(hash => {
        this.password = hash;
        next();
    }).catch((err)=> {
        console.log('error saving hash');
        console.log(err);
    });
});

// UserSchema.pre('save', async function(next){
//     try{
//         const hashedPassword = await bcrypt.hash(this.password, 10)
//         console.log('Hashed Password:',hashedPassword)
//         this.password = hashedPassword
//         next()
//     }catch{
//         console.log('Error in save',error)
//     }

// })




module.exports = mongoose.model('user', UserSchema)