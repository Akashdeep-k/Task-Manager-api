const Task = require("../models/task")

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({})
        res.status(200).json(tasks)
    }
    catch (err) {
        res.status(500).json({ msg: err })
    }
}

const getTask = async (req, res) => {
    try {
        const { id:taskID } = req.params
        const task = await Task.findOne({ _id: taskID })
        if (!task) {
            return res.status(404).json({msg: `No task with id ${taskID}`})
        }
        else {
            return res.status(200).json(task)
        }
    }
    catch (err) {
        res.status(500).json({ msg: err })
    }
}

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({ task })
    }
    catch (err) {
        res.status(500).json({ msg: err })
    }
}

const updateTask = (req, res) => {
    const { id } = req.params
    res.json({ "id": id })
}
const deleteTask = async (req, res) => {
    try{
        const { id:taskID } = req.params
        const task = await Task.findOneAndDelete({_id: taskID})
        if(!task){
            return res.status(404).json({msg: `No task with id ${taskID}`})
        }
        else{
            res.status(200).json(task)
        }
    }
    catch(err){
        res.status(500).json({ msg: err })
    }
}

module.exports = {
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
}