import React from 'react';


function TodoItem(props) {
    const completedStyle = {
        fontStyle  : "italic",
        color: '#cdcdcd',
        textDecoration : 'line-through'
    }
        return (

    <div className= "todo-item">
        <div >
            <label >
                <input 
                type="checkbox" 
                checked = {props.note.completed} 
                onChange = {() => props.handleChange(props.note.id)}/>

                <p style = {props.note.completed ? completedStyle : null }>{props.note.text }</p>
            </label>
        </div>

    </div>

        )
}
export default TodoItem