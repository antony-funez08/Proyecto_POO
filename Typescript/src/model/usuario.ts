import mongoose, { Document, Schema } from 'mongoose';

export interface Iusuario extends Document {
  _id?: mongoose.Types.ObjectId,
  nombre: string;
  imagenPerfil: string;
  boards:Array<string>;
}

const usuarioSchema: Schema = new Schema({

  _id: mongoose.Types.ObjectId,
  nombre:         String,
  imagenPerfil:   String,
  boards:         Array<String>,


});

export default mongoose.model<Iusuario>('users', usuarioSchema);