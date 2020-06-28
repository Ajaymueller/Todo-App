import React, {useState} from 'react'
import '../styles/TodoForm.css'

const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
    } 

    const handleChange = (e) => {
        setValue(e.target.value)
    };

    return (
        <div className="todo-form">
    <form onSubmit={handleSubmit}>
        <input type="text" 
        className="input" 
        value={value} 
        onChange={handleChange}
        placeholder="add todo" />
        <button onClick={handleSubmit}>Add todo</button>
    </form>
    </div>
    )
}

export default TodoForm;
