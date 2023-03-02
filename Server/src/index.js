import express from 'express'
import morgan from 'morgan'
import cors from  'cors'
import postsRoutes from './routes/posts.routes.js'
import areasRoutes from './routes/areas.routes.js'
import taskRoutes from './routes/tasks.routes.js'
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
app.use( taskRoutes);


//Static files

//Start server
app.listen(PORT, () =>{
    console.log('SERVER ON PORT ', PORT);
})