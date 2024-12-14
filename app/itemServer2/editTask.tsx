"use client"

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { FiDownload } from 'react-icons/fi';
import { AiFillCarryOut, AiFillEdit } from 'react-icons/ai';
import { FieldValues, useForm } from 'react-hook-form';
import { updateTask } from './utils/taskServer';
import DeleteTask from './deleteTask';
import { itemTypePrisma, zodIssueType } from '@/app/types/index';
import { addTaskSchemaPrisma } from '../zod';
import { useRouter } from 'next/navigation';

function EditTask({ d, i } : { d: itemTypePrisma, i: number }) {
    const { register, handleSubmit, reset, getValues, setValue } = useForm();
    const [ dataState, setDataSate ] = useState<string>(d.task);
    const [ inputState, setInputState ] = useState<Boolean | null>(false);
    const [ editState, setEditState ] = useState<Boolean | null>(false);
    const [ zodIssue, setZodIssue] = useState<zodIssueType[]>([]);

    const taskRef = useRef<HTMLInputElement | null>(null);
    const editClickRef = useRef<HTMLElement | null>(null);
    const updateClickRef = useRef<HTMLElement | null>(null);

    const router = useRouter();

    function updateForm (formData: FieldValues, id: string, index: number) {

        const validate = addTaskSchemaPrisma.safeParse({id: id, task: formData.updateTask});
        
        if (validate.error) {
            validate.error.issues.map((issues, index) => {
                issues.message === "Required" ? issues.message = "Add some new character!" : issues.message;
                zodIssue[index] = {
                    message: issues.message
                };
            });
            router.refresh();
            return;
        }
        setZodIssue([]);
        updateTask(formData, id, index);
        reset();
        
        setInputState(false);
        setEditState(false);
    }

    function updateClick (id: string, index: number) {
        setInputState(true);
        setEditState(true);
    }

    function inputChange (e: React.ChangeEvent<HTMLInputElement>, id: string, index: number) {
        setDataSate(e.target.value)
        setValue(`updateTask`, e.target.value);
    }

  return (
        <>
            <div className="mb-4 p-4 bg-neutral-200 dark:bg-neutral-800 rounded shadow-lg" key={i}> 
                <form onSubmit={handleSubmit((data) => { updateForm(data, d.id, i) }
                    )} className="flex justify-between">
                    <div>
                        <div className="flex items-center h-9">
                            <AiFillCarryOut className="mr-1 text-2xl text-gray-400" />
                            {
                                inputState ? (
                                    <input type="text" name="updateTask" key={i} value={ dataState } onChange={ (e) => { inputChange(e, d.id, i) }}
                                    ref={ (ref) => { taskRef.current = ref }} className="form-input-m block w-44 p-2 text-black text-sm bg-neutral-200 border-b border-gray-400 ring-blue-500 focus:border-blue-400 dark:bg-neutral-800 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-400" 
                                    />
                                ) : (
                                    <p className="p-2 text-sm border-b border-neutral-200 dark:border-neutral-800">{d.task}</p>
                                )
                            }
                        </div>
                        <div className="mt-3 text-sky-500">
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

                        <div className="flex mt-5">
                            { 
                                editState ? (
                                <button type="submit" className="flex items-center text-sm mr-3 cursor-pointer"
                                    ref={ (ref) => { updateClickRef.current = ref! }} >
                                    <span className="mr-1 text-neutral-600 hover:text-neutral-400 dark:text-neutral-300 dark:hover:text-neutral-400">Save</span> <FiDownload className="text-green-600" />
                                </button>
                                )
                                : (
                                <div className="flex items-center text-sm mr-3 cursor-pointer" onClick={ () => updateClick(d.id, i) }
                                    ref={ (ref) => { editClickRef.current = ref! }} >
                                    <span className="mr-1 text-neutral-600 hover:text-neutral-400 dark:text-neutral-300 dark:hover:text-neutral-400">Edit</span> <AiFillEdit className="text-green-600" />
                                </div>
                                )
                            }
                            <DeleteTask d={d} />
                        </div>
                    </div>
                    <div className="text-xs text-end text-neutral-400 dark:text-neutral-400">
                    </div>
                </form>
            </div>
        </>
  )
}

export default EditTask