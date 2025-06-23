import Task from "../models/task.model.js";


const TaskController = {
    createTask: async (req, res)=>{
        try {
            const newTask = await Task.create(req.body)
            res.status(200).json(newTask)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    getAllTasks: async (req, res)=>{
        try {
            const allTasks = await Task.find()
            res.json(allTasks)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    getTaskById: async (req, res)=>{
        try {
            const task = await Task.findById(req.params.id)
            if(task){
                res.status(200).json(task)
            }else{
                res.status(404).json({ message: "Task not found!" });
            }
        } catch (error) {
            res.status(500).json(error)
        }
    },
    updateTask: async(req, res)=>{
        try {
            const id = req.params.id
            const options = {new: true, runValidators: true}
            const updatedTask = await Task.findByIdAndUpdate(id,req.body, options)
            if(updatedTask){
                res.status(200).json(updatedTask)
            }else{
                res.status(404).json({ message: "Task not found!" });
            }
        } catch (error) {
            res.status(500).json(error)
        }
    },
    deleteTask: async (req, res)=>{
        try {
            const id = req.params.id
            const deletedTask = await Task.findByIdAndDelete(id)
            if(deletedTask){
                res.status(200).json({deletedTask, message: "Task deleted successfully!"})
            }else{
                res.status(404).json({message:"Task not found"})
            }
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

export default TaskController