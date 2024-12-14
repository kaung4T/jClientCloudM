"use client"

import React from 'react';
import EditTask from './editTask';
import AddTask from './addTask';
import { itemTypePrisma } from '@/app/types/index';


function Task( { task } : { task: itemTypePrisma[] }) {
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