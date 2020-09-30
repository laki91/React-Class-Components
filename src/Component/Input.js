import React, { Component } from 'react';

class Input extends Component {

    state ={
        msg: '',
        done: false
    }

    newMsg = (e) => {
        this.setState({
            msg: e.target.value
        })  
    }

    add = () => {
        this.props.addNew(this.state)
        this.setState({
            msg: ''
        })
        
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-8 offset-2">
                        <div className="input-group">
                            <input onChange={this.newMsg} type="text" className='form-control' placeholder='new msg'
                            value={this.state.msg} />
                            <div className="input-grup-append" >
                                <button onClick={this.add} className='btn btn-primary'>Add</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Input;