import React from 'react';
import Todo from './Todo';

const ListTodo = ({tasks, mark, deletee}) => {

    const allTasks = tasks.map((task, index) => {
        return <Todo task={task} key={task.id} index={index} mark={mark} deletee={deletee} />
    })

    return (
        <div className="container">
            <div className="row">   
                {allTasks} 
            </div>
        </div>
    )
}

export default ListTodo;