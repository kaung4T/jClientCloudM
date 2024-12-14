import React from 'react';
import Task from './task';
import { GetItemsAll } from './utils/hooks';
import { itemType } from '@/app/types/index';

async function ItemServer() {  
  const task: itemType[] | null = await GetItemsAll();

  if (!task) { return ( <><p className="text-center p-5"> Loading... </p></> )};

  return (
    <>
      <div className="context">
        <p className="text-center mb-14 text-lg">Backend Laravel</p>
        <Task task={task}></Task>
      </div>
    </>
  )
}

export default ItemServer