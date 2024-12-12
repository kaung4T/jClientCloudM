"use client"

import React from 'react';
import EditTask from './editTask';
import AddTask from './addTask';
import { itemType } from '@/app/types/index';

function Task( { task } : { task: itemType[] }) {
    
  return (
    <>
        <AddTask task={task} />
        {
          task.map( (d, i) =>
            <div key={i}>
                <EditTask d={d} i={i} />
            </div>
          )
        }
    </>
  )
}

export default Task