import mongoose,{ConnectOptions} from "mongoose";
import 'dotenv/config'

interface MyConnectOptions extends ConnectOptions {
    useNewUrlParser: boolean;
    useUnifiedTopology: boolean;
  }
  
  const options: MyConnectOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  

export const mongoConnect= async()=>{
    const dbLink= process.env.DB_LINK
   
console.log('Connecting to the database')
    await mongoose.connect(dbLink,options).then(()=> console.log('Connected to the database'))
.catch(error=> console.error(error))
}