import { createUser, deleteUser, findAllUsers, findUserByEmail, findUserById, updateUser } from "../services/user.service.js";
const errorMessage = "{message:'internal server error'}";
const noDataMessage = "{message:''}";
export const create = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log('1');
        if (!email && !password) {
            console.log('2');
            return res.status(404).json({ message: "Submit all fields" });
        }
        const verifyUser = await findUserByEmail(email);
        if (verifyUser) {
            console.log('3');
            return res.status(409).json({ message: "This user already exists" });
        }
        const bodyData = { email, password };
        await createUser(bodyData);
        console.log('4');
        return res.status(201).json({ message: "User created successfully" });
    }
    catch (error) {
        console.error(error);
        return res.status(504).json(errorMessage);
    }
};
export const listUsers = async (req, res) => {
    try {
        const users = await findAllUsers();
        if (users.length === 0) {
            return res.status(404).json({ message: "Theres no users " });
        }
        return res.status(200).json(users);
    }
    catch (error) {
        console.error(error);
        res.status(504).json(errorMessage);
    }
};
export const getUserProfile = async (req, res) => {
    try {
        const id = req.userId;
        if (!id) {
            return res.status(404).json('Cant find the id');
        }
        const user = await findUserById(id);
        if (!user) {
            return res.status(404).json({ message: "User not found " });
        }
        return res.status(200).json({
            user
        });
    }
    catch (error) {
        console.error(error);
        res.status(504).json(errorMessage);
    }
};
export const update = async (req, res) => {
    try {
        const { email, password } = req.body;
        const id = req.userId;
        console.log(id);
        if (!id) {
            return res.status(404).json({ message: "Invalid id" });
        }
        const user = await findUserById(id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        if (!email && !password) {
            return res.status(409).json({ message: "Submit at least one field" });
        }
        await updateUser(id, { email, password });
        return res.status(200).json({ message: "User updated successfully" });
    }
    catch (error) {
        console.error(error);
        res.status(504).json(errorMessage);
    }
};
export const destroy = async (req, res) => {
    try {
        const id = req.userId;
        if (!id) {
            return res.status(404).json({ message: "invalid id" });
        }
        const user = await findUserById(id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        await deleteUser(id);
        return res.status(200).json({ message: "User deleted successfully" });
    }
    catch (error) {
        console.error(error);
        res.status(504).json(errorMessage);
    }
};
//# sourceMappingURL=user.controller.js.map