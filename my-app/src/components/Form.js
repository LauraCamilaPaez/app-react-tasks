import React from 'react';

function Form(props) {
    return (
        <form className='form-task'>
            <input
             className='input-task'
             type='text'
             placeholder='Write a Task!'
             name='text'
            />
            <button className='button-task'>
                Add Task
                </button>
        </form>
    );
}

export default Form;