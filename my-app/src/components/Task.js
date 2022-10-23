import React from 'react';
import '../styles-sheets/task.css';
import { AiOutlineClose } from 'react-icons/ai';


function Task({ text }) {
    return (
        <div className='task-container'>
            <div className='task-text'>
                {text}
            </div>
            <div className='icon-task'>
                <AiOutlineClose />
            </div>
        </div>
    );
}
export default Task;