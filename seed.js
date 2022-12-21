require('dotenv').config()

const db = require('./config/database')
const ToDo = require('./models/toDo')

const toDoListData = [
    {
      title: "Learn more about React",
      completed: true
    },
    {
      title: "Write a new Component",
      completed: false
    },
    {
      title: "Add some style",
      completed: false
    }
]

ToDo.deleteMany({}).then(() => {
    ToDo.create(toDoListData).then((createdToDos) => {
        console.log('Created To-Dos: ', createdToDos)
        db.close()
    })
})
