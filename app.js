'use strict'

let data = [
    {'task' : 'Study', 'status' : ''},
    {'task' : 'groceries', 'status': 'checked'}
]

const createItem = (task, status) => {
    const item = document.createElement('label')
    item.classList.add('todo_item')
    item.innerHTML = `
        <input type="checkbox" ${status}>
        <div>${task}</div>
        <input type="button" value="X">
    `
    document.getElementById('todoList').appendChild(item)

}

const clearTasks = () => {
    const todoList = document.getElementsById('todoList')
    while (todoList.firstChild) {
        todoList.removeChild(todoList.lastChild)
    }
} 

const refresh = () => {
   clearTasks()
    data.forEach (item => createItem (item.task, item.status))
}
refresh()