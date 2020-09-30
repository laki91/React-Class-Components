import React from 'react'

const Todo = ({ task, index, mark, deletee }) => {
    return (
        <div className="col-4">
            <div className="card m-5 text-center">
                <div className="card-header">
                    <h4>{index+1}</h4>
                </div>
                <div className="card-body">
                    <h3 className={task.done? 'complete':'incomplete'}>{task.msg}</h3>
                </div>
                <div className="card-footer">
                    <button onClick={()=>{deletee(index)}} className='btn btn-dark float-left'>Delete</button>
                    <button onClick={()=>{mark(index)}} className='btn btn-success float-right'>Mark</button>
                </div>
            </div>
        </div>

    )
}

export default Todo;