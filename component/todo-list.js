import { createElement } from "../fonction/dom.js"

/**
 * @typedef {object} todo
 * @property {number} id
 * @property {string} title
 * @property {boolean} completed
 */

export class TodoList {
    #todo = []

    constructor(todo){
        this.#todo = todo
    }
    /**
     * 
     * @param {HTMLElement} element 
     */
    appendTo (element){
        element.innerHTML = ` <form class="d-flex pb-4">
            <input type="text">
            <button></button>
        </form>
        <main>
        <div class="btn-group mb-4 filter" role="group">
            <button type="button" class="btn btn-outline-primary active" data-filter="all">Toutes</button>
            <button type="button" class="btn btn-outline-primary data-filter="todo">faire</button>
            <button type="button" class="btn btn-outline-primary" data-filter="done">faites</button>
        </div>
        <ul class="list-group">
        </ul>
        </main>`

       const list = element.querySelector('.list-group')
       for(let todos of this.#todo){
        const tache = new TodoListItem(todo)
        todos.appendTo(list)
       }
    }
    
}
class TodoListItem {
    #element

    /**@type {Todo} */
    constructor (todo){
        const li = createElement('li',{
            class: 'todo list-group-item align-items-center'
        })
        const checkbox = createElement('input', {
            type: 'checkbox',
            class:'form-check-input',
            id: `todo-${todo.id}`,
            checked: todo.completed
        })
        li.append(checkbox)
        const label = createElement('label',{
            class:'ms-2 form-check-label',
            for: `todo-${todo.id}`
        })
        label.innerText = todo.title
        li.append(label)
        const button = createElement('button',{
            class:'ms-auto btn btn-danger btn-sm'
        })
        button.innerHTML = '<i class="bi-trash"></i>'
        li.append(button)
        this.#element = li
    }
    /**
     * 
     * @param {HTMLElement} element 
     */
    appendTo (element){
        element.append(this.#element)
    }
}