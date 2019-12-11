import React from 'react';
import './App.css';

class TodoListTask extends React.Component {

    onIsDoneChanged = (e) => {
        alert(e.currentTarget.checked);
    }

    render = () => {
        return (
                <div className="todoList-task">
                    <input type="checkbox" checked={this.props.isDone}
                           onChange={this.onIsDoneChanged}/>
                    <span>{this.props.title}</span>,
                    priority: {this.props.priority}
                </div>
        );
    }
}

export default TodoListTask;

