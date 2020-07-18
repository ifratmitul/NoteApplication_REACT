import React from "react";

import TodoItem from './TodoItem';
import noteData from './noteData';

class CheckList extends React.Component{
    constructor(){
        super();
        this.state = {
            todo : noteData
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todo.map( utodo => {
                if (utodo.id === id) {
                    return {
                        ...utodo,
                        completed : !utodo.completed 
                    }    
                }
                return utodo
            })
            return {
                todo: updatedTodos
            }
        })
    }

    render(){
        const itemComp =  this.state.todo.map( notes => <TodoItem key = {notes.id} note = {notes} handleChange = {this.handleChange}/>)
    return (
        
        <div className = "todo-list">
            
                {itemComp}
                        
        </div>
                
        )
}
    
}

export default CheckList;