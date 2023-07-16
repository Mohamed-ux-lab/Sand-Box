import { TodoList } from "./component/todo-list.js";
import { fechtJSON } from "./fonction/api.js";
import { createElement } from "./fonction/dom.js";

try{
    const todo = await fechtJSON ('https://jsonplaceholder.typicode.com/todos?_limit=5')
    const list = new TodoList(todo)
    list.appendTo(document.querySelector('#todolist'))
}catch(e){
    const alertElement = createElement('div', {
        class : 'alert alert-danger m-2',
        role : 'alert'
    })
    alertElement.innerText = 'Impossile de contacter le serveur' 
    document.body.prepend (alertElement)
}