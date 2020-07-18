import React from "react";

import TodoItem from './TodoItem';
import noteData from './noteData';

class CheckList extends React.Component{
    constructor(){
        super();
        this.state = {
            todo : noteData
        }
    }

    render(){
        const itemComp =  this.state.todo.map( notes => <TodoItem key = {notes.id} note = {notes}/>)
    return (
        
        <div className = "todo-list">
            
                {itemComp}
                        
        </div>
                
        )
}
    
}

export default CheckList;