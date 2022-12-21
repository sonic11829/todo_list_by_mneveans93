const ToDo = require('../../models/toDo')

const dataController = {
    //handle error
    checkForError (err, res) {
        if (err) {
            res.status(400).send({
                msg: err.message
            })
            return true
        } else {return false}
    },
    //index
    index (req, res, next) {
        ToDo.find({}, (err, foundToDos) => {
            if (this.checkForError(err, res) === false) {
                res.locals.data.toDos = foundToDos
                next()
            }
        })
    },
    //destroy
    delete (req, res, next) {
        ToDo.findByIdAndDelete(req.params.id, (err, deletedToDo) => {
            if (this.checkForError(err, res) === false) {
                res.locals.data.toDo = deletedToDo
                next()
            }
        })
    },
    //update
    update (req, res, next) {
        ToDo.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedToDo) => {
            if (this.checkForError(err, res) === false) {
                res.locals.data.toDo = updatedToDo
                next()
            }
        })
    },
    //create
    create (req, res, next) {
        ToDo.create(req.body, (err, createdToDo) => {
            if (this.checkForError(err, res) === false) {
                res.locals.data.toDo = createdToDo
                next()
            }
        })
    },
    //show
    show (req, res, next) {
        ToDo.findById(req.params.id, (err, foundToDo) => {
            if (this.checkForError(err, res) === false) {
                res.locals.data.toDos = foundToDo
                next()
            }
        })
    }
}

const apiController = {
    index (req, res, next) {
        res.json(res.locals.data.toDos)
    },
    show (req, res, next) {
        res.json(res.locals.data.toDo)
    }
}

module.exports = { dataController, apiController }