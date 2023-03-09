import express from 'express'
import morgan from 'morgan'
import cors from  'cors'
import areasRoutes from './routes/areas.routes.js'
import login from './routes/login.routes.js'
import {PORT} from './keys.js'


const app = express();

//Setting 
app.set( PORT ) 

//Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());


//Routes
app.use( areasRoutes);
app.use( login);


//Static files

//Start server
app.listen(PORT, () =>{
    console.log('SERVER ON PORT ', PORT);
})