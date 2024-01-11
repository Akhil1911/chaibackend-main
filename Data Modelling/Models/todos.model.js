import mongoose, { Mongoose } from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectID,
      ref: "User",
    },
    SubTodos: [
      {
        type: mongoose.Schema.Types.ObjectID,
        ref: "SubTodo",
      },
    ],
  },
  { timestamps: true }
);

export const Todo = mongoose.model("Todo", todoSchema);
