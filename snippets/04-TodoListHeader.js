import React from 'react';
import './App.css';

class TodoListHeader extends React.Component {

    constructor(props) {
        super(props);
        this.newTasksTitileRef = React.createRef();
    }

    onAddTaskClick = () => {
        let newText = this.newTasksTitileRef.current.value;
        this.newTasksTitileRef.current.value = "";
        // передаём новый текст наружу
        this.props.addTask(newText);

    }

    render = () => {
        return (
            <div className="todoList-header">
                <h3 className="todoList-header__title">What to Learn</h3>
                <div className="todoList-newTaskForm">
                    <input type="text" placeholder="New task name" ref={this.newTasksTitileRef}/>
                    <button onClick={ this.onAddTaskClick }>Add</button>
                </div>
            </div>
        );
    }
}

export default TodoListHeader;

