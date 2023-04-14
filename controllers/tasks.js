const getAllTasks = (req, res) => {
    res.send("get all tasks")
}

const getTask = (req, res) => {
    const {id} = req.params
    res.json({"id": id})
}

const createTask = (req, res) => {
    res.json(req.body)
}

const updateTask = (req, res) => {
    const {id} = req.params
    res.json({"id": id})
}
const deleteTask = (req, res) => {
    const {id} = req.params
    res.json({"id": id})
}

module.exports = {
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
}