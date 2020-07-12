import React from "react";

import TodoItem from './TodoItem';
import noteData from './noteData';

function  CheckList(){
    const itemComp =  noteData.map( notes => <TodoItem key = {notes.id} note = {notes}/>)
return (
        
    <div className = "todo-list">
        
            {itemComp}
                    
    </div>
            
    )
}

export default CheckList;