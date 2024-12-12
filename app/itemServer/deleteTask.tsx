"use client"

import React from 'react'
import { deleteTask } from './utils/taskServer';
import { AiFillDelete } from 'react-icons/ai';
import { itemType } from '@/app/types/index';

function DeleteTask( { d } : { d: itemType }) {
    async function deleteButton (id: number) {
        const task = await deleteTask(id);
        if (!task) { alert("no item") }
    }

  return (
    <>
        <div className={'flex items-center text-sm cursor-pointer'} onClick={ () => deleteButton(d.id)}>
            <span className={'mr-1'}>Delete</span><AiFillDelete className={'text-red-600'} />
        </div>
    </>
  )
}

export default DeleteTask