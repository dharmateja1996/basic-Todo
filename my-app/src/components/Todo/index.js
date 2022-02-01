import React from 'react'
import TodoForm from '../TodoForm'
import TodoList from '../TodoList'
import './index.css'

const Todo = () =>{

    const [todoList, setTodoList] = React.useState([])
    const addTodo = (todo) => {
        const newTodo = [todo, ...todoList]
        setTodoList(newTodo)
    }
console.log(todoList)

function onRemoveTodo(id){
    const filterList  = [...todoList].filter(eachItem => eachItem.id !== id)
    setTodoList(filterList)
}


    return (
        <div className="todo-container">
            <h1 className='todos-heading'>My Todos List</h1>
            <TodoForm onSubmit= {addTodo} lengthOfTodo={todoList.length}/>
            <ul className='todo-list'>
                {todoList.map(eachItem => <TodoList key={eachItem.id} todoItem = {eachItem}
                 onRemoveTodo={onRemoveTodo}/>)}
            </ul>

        </div>
    )
}

export default Todo