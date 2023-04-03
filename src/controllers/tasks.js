const Task = require('../models/task')
const asyncWrapper = require('../middlewares/async')
const { customError } = require('../error/custom-error')
const getAllTasks = asyncWrapper(async (req, res) => {
    const tasks = await Task.find({})
    res.status(200).json({ tasks })
})

const getOneTask = asyncWrapper(async (req, res,next) => {
    const { id: taskId } = req.params
    const task = await Task.findOne({ _id: taskId })
    if (!task) {
        return next(customError(`The task with id:${taskId} is not existed`,404))
    }
    res.status(200).json({ task })
})

const createTask = asyncWrapper(async (req, res) => {
    const task = await Task.create(req.body);
    res.status(201).json({ task })
})

const updateTask = asyncWrapper(async (req, res) => {
    const { id: taskId } = req.params
    const updatedTask = req.body
    const task = await Task.findOneAndUpdate({ _id: taskId }, updatedTask, {
        new: true,
        runValidators: true
    })
    if (!task) {
        return next(customError(`The task with id:${taskId} is not existed`,404))
    }
    res.status(200).json({ task })
})

const deleteTask = asyncWrapper(async (req, res) => {
    const { id: taskId } = req.params
    const task = await Task.findOneAndDelete({ _id: taskId })
    if (!task) {
        return next(customError(`The task with id:${taskId} is not existed`,404))
    }
    res.status(200).json({ task })
})

module.exports = {
    getAllTasks, deleteTask, updateTask, createTask, getOneTask
}
