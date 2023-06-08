require('dotenv').config();
const express=require('express');
const sequelize=require('./db');
const models=require('./model/models.js');
const cors=require('cors');
const fileupload=require('express-fileupload');
const router=require('./routes/index.js');
const errorHandler=require('./middleware/ErrorHandleMiddleware');


const PORT=process.env||5000;
const app=express();
app.use(cors());
app.use(express.json());
app.use('/api',router);
app.use(fileupload({}));


/* middleware для ошибок */
app.use(errorHandler);
app.get('/',(req,res)=>{
    res.status(200).json({message:'работает'});
})








const start=async ()=>{
    try{
        await sequelize.authenticate();
        await sequelize.sync({alter:true});
        app.listen(PORT,()=>{
    console.log('server is working')
})
    }
    catch (e){
        console.log(e);
    }
}

start();