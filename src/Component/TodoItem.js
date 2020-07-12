import React from 'react';


export default function TodoItem(props) {
    console.log(props.note)
    return (

    <div className= "todo-item">
        <div className="checkbox">
            <label >
                <input type="checkbox" checked = {props.note.complete}/>
                {props.note.title + " " + props.note.date}
            </label>
        </div>

    </div>

        )
}
