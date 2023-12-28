import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
// import { useDispatch } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addTodo } from '../app/features/todo/todoSlice';
import TurkisButton from './TurkisButton';
import toast, { Toaster } from 'react-hot-toast';

// Define keyframe animation
const shakeKeyframes = `
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(-8px);
    }
    50% {
      transform: translateX(8px);
    }
    75% {
      transform: translateX(-4px);
    }
    100% {
      transform: translateX(4px);
    }
  }
`;

const toastEmpty = () => toast.error('Empty Task can not be added',{
  duration: 1000,
  position: 'top-center',
});

function AddTodo() {
  const [newTask, setNewTask] = useState('');
  const dispatch = useDispatch();
  const [shake, setShake] = useState(false);
  const [moveOn, setMoveOn] = useState(false);
  const handleMouseMove = (e) => {
    setMoveOn(!moveOn);
  };

  const buttonStyle = {
    position: 'relative',
    top: '0px',
    left: moveOn ? '5px' : '200px',
    transition: 'left 0.01s ease-out',
  };

  const todohandler = (e) => {
    e.preventDefault();
    if (newTask.trim().length === 0) {
      toastEmpty();
      setShake(true);
      setTimeout(() => {
        setShake(false);
      }, 500);
      setNewTask('');
      return;
    }
    dispatch(addTodo(newTask));
    setNewTask('');
  }

  const inputStyles = {
    border: '1px solid #ccc',
    padding: '8px',
    borderRadius: '4px',
    width: '200px',
    marginBottom: '10px',
    // Add the animation styles to the input when shake is true
    animation: shake ? 'shake 0.5s' : 'none',
  };

  return (
    <div>
       <style>{shakeKeyframes}</style>
       <Toaster />
       {/* <Toaster position="top-right" reverseOrder={false} /> */}
      <h6 className="text-3xl font-bold underline">
        Hello work
      </h6>
      <input
        value={newTask}
        style={inputStyles}
        type='text'
        placeholder='Add new task'
        onChange={(e) => setNewTask(e.target.value)}
      >
      </input>
      {/* <br /> */}
      <button onClick={todohandler}>Add</button>
      <button
        onMouseOver={handleMouseMove}
        style={buttonStyle}
      >Turkis Button</button>
    </div>
  )
}

export default AddTodo;
