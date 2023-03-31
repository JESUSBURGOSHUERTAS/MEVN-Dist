import { Schema, model } from "mongoose";
const taskSchema = new Schema({
  title: {
    type: String,
    require: true,
    trim: true,
  },
  codigo: {
    type: String,
    require: true,
    trim: true,
  },
  precio: {
    type: Number,
    require: true,
    trim: true,
  },
  description: {
    type: String,
    require: true,
    trim: true,
  },
  done: {
    type: Boolean,
    default: false,
  },
},{
  versionKey: false
});

export default model("Task", taskSchema);
