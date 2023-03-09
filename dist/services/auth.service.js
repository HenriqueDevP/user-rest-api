import 'dotenv/config';
import jwt from 'jsonwebtoken';
export const createToken = (id) => {
    return jwt.sign({ id: id }, process.env.SECRET, { expiresIn: "7d" });
};
//# sourceMappingURL=auth.service.js.map