import React from 'react';


function TodoItem(props) {
        return (

    <div className= "todo-item">
        <div >
            <label >
                <input 
                type="checkbox" 
                checked = {props.note.completed} 
                onChange = {() => props.handleChange(props.note.id)}/>

                {props.note.text }
            </label>
        </div>

    </div>

        )
}
export default TodoItem