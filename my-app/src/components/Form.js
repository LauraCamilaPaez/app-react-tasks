import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../styles-sheets/form.css';

function Form(props) {

    const [input, setInput] = useState('');

    const manageChange = e => {
        setInput(e.target.value);
    };

    const manageShipping = e => {
        e.preventDefault();

        const newTask = {
            id: uuidv4(),
            text: input,
            completed: false
        }

        props.onSubmit(newTask);
    };

    return (
        <form className='form-task'
              onSubmit={manageShipping}>
            <input
             className='input-task'
             type='text'
             placeholder='Write a Task!'
             name='text'
             onChange={manageChange}
            />
            <button className='button-task'>
                Add Task
                </button>
        </form>
    );
}

export default Form;