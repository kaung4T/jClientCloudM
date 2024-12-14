"use client"

import React from 'react'
import { deleteTask } from './utils/taskServer';
import { AiFillDelete } from 'react-icons/ai';
import { itemTypePrisma } from '@/app/types/index';

function DeleteTask( { d } : { d: itemTypePrisma }) {
    async function deleteButton (id: string) {
        const task = await deleteTask(id);
        if (!task) { alert("no item") }
    }

  return (
    <>
        <div className="flex items-center text-sm cursor-pointer" onClick={ () => deleteButton(d.id)}>
            <span className="mr-1 text-neutral-60 hover:text-neutral-400 dark:text-neutral-300 dark:hover:text-neutral-500">Delete</span><AiFillDelete className="text-red-600" />
        </div>
    </>
  )
}

export default DeleteTask