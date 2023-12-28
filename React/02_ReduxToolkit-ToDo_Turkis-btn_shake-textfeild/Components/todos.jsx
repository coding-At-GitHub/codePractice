import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
// import {  useDispatch } from 'react-redux';
// import { removeTodo, updateTodo } from '../app/features/todo/todoSlice';
import TodoItem from './TodoItem';
import { Box, Button } from '@mui/material';
// import { Scale } from '@mui/icons-material';


function Todos() {

    const todos = useSelector((state) => state.todos);
    // const dispatch = useDispatch();
    useEffect(() => {
        // console.log("logging");
    })


    return (
        <div>
            <h1>
                List
            </h1>
            {/* <Box

            >
                <Button
                    sx={{
                        width: '300px',
                        backgroundColor: 'gray',
                        color: 'white',
                        fontSize: '40px',
                        mx: '100px',
                        my: 2,
                        p: '10px',
                        cursor: 'pointer',
                        '&:hover': {
                            backgroundColor: 'palegreen',
                            opacity: 0.3,
                            transform: 'scale(2)',
                            transitionDuration: '0.5s'
                        }
                    }}
                >
                    Hover effect
                </Button>
            </Box> */}
            <div>
                <ul>
                    {todos.map((todo) => (
                        <TodoItem key={todo.id} id={todo.id} text={todo.text} />
                        // <li key={todo.id}>
                        //     {todo.text}
                        //     <button
                        //     // onClick={()=> dispatch(updateTodo(todo.id))}
                        //     >Edit</button>

                        //     <button
                        //     onClick={()=> dispatch(removeTodo(todo.id))}
                        //     >Delete</button>
                        //     </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Todos;
