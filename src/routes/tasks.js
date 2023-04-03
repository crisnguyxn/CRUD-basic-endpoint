const express = require('express')
const router = express.Router()
const {getAllTasks, getOneTask, createTask, updateTask, deleteTask} = require('../controllers/tasks')

router.route('/').get(getAllTasks)
router.route('/:id').get(getOneTask)
router.route('/create').post(createTask)
router.route('/:id').patch(updateTask)
router.route('/:id').delete(deleteTask)

module.exports = router

