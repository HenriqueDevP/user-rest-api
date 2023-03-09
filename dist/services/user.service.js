import User from "../models/user.model.js";
export const createUser = (body) => {
    return User.create(body);
};
export const findUserByEmail = (email) => {
    return User.findOne({ email: email });
};
export const findUserById = (id) => {
    return User.findById(id);
};
export const findAllUsers = () => {
    return User.find();
};
export const updateUser = (id, body) => {
    return User.findOneAndUpdate({ _id: id }, body);
};
export const deleteUser = (id) => {
    return User.findOneAndDelete({ _id: id });
};
//# sourceMappingURL=user.service.js.map