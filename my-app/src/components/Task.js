import React from 'react';
import '../styles-sheets/task.css';
import { AiOutlineClose } from 'react-icons/ai';


function Task({ text, completed }) {
    return (
        <div className={ completed ? 'task-container completed' : 'task-container' }>
            <div className='task-text'>
                {text}
            </div>
            <div className='container-icon-tasks'>
                <AiOutlineClose className='icon-task' />
            </div>
        </div>
    );
}
export default Task;