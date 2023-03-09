import { Schema, model } from "mongoose";
import bcrypt from 'bcrypt';
const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    }
});
userSchema.pre('save', async function (next) {
    this.password = await bcrypt.hash(this.password, 8);
    next();
});
const User = model('User', userSchema);
export default User;
//# sourceMappingURL=user.model.js.map