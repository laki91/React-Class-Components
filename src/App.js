import React, { Component } from 'react';
import Jumbotron from './Component/Jumbotron';
import Input from './Component/Input';
import ListTodo from './Component/ListTodo';
import "./App.css"

class App extends Component {

    state = {
        tasks: [

        ]
    }

    componentDidMount(){
        let data = [];
        if(localStorage.data){
            data = JSON.parse(localStorage.data)
        }
        this.setState({
            tasks: data
        })
    }

    mark = (index) => {
        const copyTasks = [...this.state.tasks]
        copyTasks[index].done = !copyTasks[index].done;
        localStorage.data = JSON.stringify(copyTasks)
        this.setState({
            tasks: copyTasks
        })
        
    }

    deletee = (index) => {
        const copyTasks = [...this.state.tasks]
        copyTasks.splice(index,1)
        localStorage.data = JSON.stringify(copyTasks)
        this.setState({
            tasks: copyTasks
        })
    }

    addNew = (task) => {
        task.id = Math.floor(Math.random()*(10000-10)-10);
        localStorage.data = JSON.stringify([...this.state.tasks,task])
        this.setState({tasks: [...this.state.tasks, task]})
    }

    render(){
        return(
            <div className="wrapp"> 
                <Jumbotron />
                <Input addNew={this.addNew}/>
                <ListTodo tasks={this.state.tasks} mark={this.mark} deletee={this.deletee}/>
            </div>        
        )
    }
}

export default App;