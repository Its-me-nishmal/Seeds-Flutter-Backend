import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: { type: String },
    email: { type: String, unique: true },
    name: { type: String },
    password: { type: String },
    phone: { type: Number, unique: true }
});

const User = mongoose.model('User', userSchema);

export default User;
