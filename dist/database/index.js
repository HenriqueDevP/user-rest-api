import mongoose from "mongoose";
import 'dotenv/config';
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};
export const mongoConnect = async () => {
    const dbLink = process.env.DB_LINK;
    console.log('Connecting to the database');
    await mongoose.connect(dbLink, options).then(() => console.log('Connected to the database'))
        .catch(error => console.error(error));
};
//# sourceMappingURL=index.js.map