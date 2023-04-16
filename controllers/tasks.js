const Task = require("../models/task")

const getAllTasks = (req, res) => {
    res.send("get all tasks")
}

const getTask = (req, res) => {
    const { id } = req.params
    res.json({ "id": id })
}

const createTask = async (req, res) => {
    const task = await Task.create(req.body)
    res.status(201).json({ task })
}

const updateTask = (req, res) => {
    const { id } = req.params
    res.json({ "id": id })
}
const deleteTask = (req, res) => {
    const { id } = req.params
    res.json({ "id": id })
}

module.exports = {
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
}