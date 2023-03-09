import express from 'express';
import { mongoConnect } from './database/index.js';
import loginRoutes from './routes/login.routes.js';
import userRoutes from './routes/user.routes.js';
const app = express();
app.use(express.json());
app.use('/user', userRoutes);
app.use('/user', loginRoutes);
mongoConnect();
app.listen(3000, () => console.log('Server runinig on port 3000'));
//# sourceMappingURL=index.js.map