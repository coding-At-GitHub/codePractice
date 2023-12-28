import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { removeTodo, updateTodo } from '../app/features/todo/todoSlice';

function TodoItem({ id, text }) {
    const [editing, setEditing] = useState(false);
    const [newVal, setNewVal] = useState('');
    useEffect(() => {
        // console.log(text);
    })
    const dispatch = useDispatch();

    const edititem = () => {
        setEditing(true);
        setNewVal(text);
    }
    const handlesave = () => {
        if(newVal.trim().length === 0 ){
            alert(' Task can not be Empty');
            setNewTask('');
            return;
          }
        const updatedTodo = {
            id:id,
            text:newVal
        }
        // console.log(`id is ${id} and new value is ${newVal}`);
        // console.log(updatedTodo);
        dispatch(updateTodo(updatedTodo));
        setEditing(false);
    }
    const deleteitem = () => {
        // e.preventDefault();
        dispatch(removeTodo(id));
    }


    return (
        <li key={id}>
            {editing ?
                (<div>
                    <input type='text' value={newVal} onChange={(e) => setNewVal(e.target.value)} ></input>
                    <button onClick={() => handlesave()}> save</button>
                </div>)
                :
                (<div>
                    <div>{text}</div>
                    <button onClick={() => edititem()}>Edit</button>
                    <button onClick={() => deleteitem()}>delete</button>
                </div>)
            }



        </li>
    )
}

export default TodoItem;
