import React, { useState } from 'react'
import { createTask } from './utils/taskServer';
import { FieldValues, useForm } from 'react-hook-form';
import { itemTypePrisma, zodIssueType } from '@/app/types/index';
import { addTaskSchema } from '../zod';
import { useRouter } from 'next/navigation';

function AddTask( { task } : { task: itemTypePrisma[] }) {
    const { register, handleSubmit, reset } = useForm();
    const [ zodIssue, setZodIssue] = useState<zodIssueType[]>([]);

    const router = useRouter();
    
    function createForm (formData: FieldValues) {
        const verify = addTaskSchema.safeParse({task: formData.createTask});
        if (verify.error) {
          verify.error.issues.map((issues, index) => {
            zodIssue[index] = {
              message: issues.message
            };
          });
          router.refresh();
          return;
        }
        setZodIssue([]);
        createTask(formData);
        reset();
    }

  return (
    <>
        <form onSubmit={handleSubmit((data) => { createForm(data) })} className="create-form-m mb-7">
          <div className="flex max-md:flex-wrap">
            <input type="text" {...register("createTask")} className="mr-2 block form-input-m w-72 p-2 text-gray-900 border border-gray-300 rounded bg-gray-50 text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-neutral-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-300"
            placeholder="Add task" />
            <button className="max-md:mt-3 px-5 py-2 text-neutral-600 bg-neutral-200 hover:bg-neutral-300 focus:outline-none font-medium rounded text-sm w-full sm:w-auto text-center dark:text-neutral-300 dark:bg-neutral-800 dark:hover:bg-neutral-700" type="submit">Add</button>
          </div>
          <div className="mt-3 text-sky-600">
            { 
                zodIssue ? (
                    zodIssue.map((d, i) => 
                        i !== zodIssue.length - 1 && zodIssue.length > 1 ? <div key={i}>{ d.message } and</div> : <div key={i}>{ d.message }</div>
                    )
                ) : (
                    <div></div>
                )                                 
            }
          </div>
        </form>
    </>
  )
}

export default AddTask