import React from 'react';
import '../styles-sheets/task.css';
import { AiOutlineClose } from 'react-icons/ai';


function Task({ id, text, completed, completeTask, deleteTask }) {
    return (
        <div className={ completed ? 'task-container completed' : 'task-container' }>
            <div className='task-text'
                 onClick={() => completeTask(id)}>
                {text}
            </div>
            <div className='container-icon-tasks'
                 onClick={() => deleteTask(id)}>
                <AiOutlineClose className='icon-task' />
            </div>
        </div>
    );
}
export default Task;