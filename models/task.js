const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide task name"],
        trim: true,
        maxlength: [20, "Name can't exceed more than 20 characters"]
    },
    completed: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model("Task", taskSchema, "My Tasks")