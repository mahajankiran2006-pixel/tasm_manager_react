import mongoose from "mongoose"

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,

    },
    description: {
        type: String,
        require: false
    },
    complete: {
        type: Boolean,
        require: false,
        default: false,
    }
})
const Tasks = mongoose.model("Task", TaskSchema)
export default Tasks