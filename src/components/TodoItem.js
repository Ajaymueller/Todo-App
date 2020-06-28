import React from 'react'
import PropTypes from 'prop-types';

const TodoItem = (props) => {

    const btnStyle = {
        background: "red", 
        color: '#fff', 
        border: 'none', 
        padding: '5px 9px', 
        borderRadius: '50%', 
        cursor: 'pointer', 
        float: 'right',
    }

  const getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }



    return (
        <div style={getStyle()}>
            <p>
            <input type="checkbox" onChange={props.markComplete.bind(props.id)} /> {' '}
            { props.title } 
            <button onClick={props.delTodo.bind(props.id)} style={btnStyle}>X</button>
            </p>
        </div>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
}

export default TodoItem
