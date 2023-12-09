import mongoose from 'mongoose';

const bd:string = 'tucodigo';
const port:string = '27017';
const host:string = 'localhost';

export class Database{
    constructor(){
        this.conectar();
    }

    conectar(){
        mongoose
        .connect(`mongodb://${'127.0.0.1'}:${port}/${bd}`) 
        .then(result=>console.log('Se conecto a mongodb'))
        .catch(error=>console.log(error));
    }
}