import React from 'react'
import { createTask } from './utils/taskServer';
import { FieldValues, useForm } from 'react-hook-form';
import { itemType } from '@/app/types/index';

function AddTask( { task } : { task: itemType[] }) {
    const { register, handleSubmit, reset } = useForm();

    function createForm (formData: FieldValues) {
        createTask(formData);
        reset();
        if (document.activeElement instanceof HTMLElement) {
            document.activeElement.blur();
        }
    }

  return (
    <>
        <form onSubmit={handleSubmit((data) => { createForm(data) })} className={'create-form-m mb-7 flex'}>
          <input type="text" {...register("createTask")} className={'mr-2 block form-input-m w-72 p-2 text-gray-900 border border-gray-300 rounded bg-gray-50 text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-300'}
          placeholder={'Add task'} />
          <button className={'px-3 py-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm w-full sm:w-auto text-center dark:bg-blue-500 dark:hover:bg-blue-700 dark:focus:ring-blue-800'} type='submit'>Add</button>
        </form>
    </>
  )
}

export default AddTask