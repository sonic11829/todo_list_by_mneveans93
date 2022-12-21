const express = require('express')
const router = express.Router()
const { dataController, apiController } = require('../../controllers/api/toDos')

// Index - /api/todos
router.get('/', dataController.index.bind(dataController), apiController.index)
// Delete - /api/todos/:id
router.delete('/:id', dataController.delete.bind(dataController), apiController.show)
// Update - /api/todos/:id
router.put('/:id', dataController.update.bind(dataController), apiController.show)
// Create - /api/todos
router.post('/', dataController.create.bind(dataController), apiController.show)
// Show - /api/todos/:id
router.get('/:id', dataController.show.bind(dataController), apiController.show)

module.exports = router
