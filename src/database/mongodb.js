import mongoose from 'mongoose';
import {DB_URI } from '../config.js'

export const dbConnect = async () =>{
     mongoose.connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },(err, res)=>{
        if (!err){
            console.log('****CONEXION CORRECTA***')
        }else{
            console.log('****ERROR DE CONEXION***')
        }
    })
}
