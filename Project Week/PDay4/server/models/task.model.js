import { model, Schema } from "mongoose";

const taskSchema = new Schema(
  {
    title: {
        type: String,
        required: [true, "Title is required"],
        minLength: [3, "Title must contain at least 3 characters"]
    },
    content: {
        type: String,
        required: [true, "Content ist required"],
        minLength:[10, "Content must contain at least 10 characters"]
    },
    priority: {
        type: String,
        enum:["Low", "Medium", "High"],
        required: [true, "Priority is required"]
    },
    dueDate: {
        type: Date,
        required: [true, "Due date is required"],
        min: [Date.now(), "Due date should be in the future"]
    },
  },
  { timestamps: true }
);
const Task = model("Task", taskSchema)
export default Task