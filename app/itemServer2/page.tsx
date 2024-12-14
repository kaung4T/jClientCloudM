import React from 'react';
import Task from './task';
import { GetItemsAll } from './utils/hooks';
import { itemTypePrisma } from '@/app/types/index';

async function ItemServer2() {  
  const task: itemTypePrisma[] | null = await GetItemsAll();

  if (!task) { return ( <><p className="text-center p-5"> Loading... </p></> )};

  return (
    <>
      <div className="context">
        <p className="text-center mb-14 text-lg">Backend Prisma</p>
        <Task task={task}></Task>
      </div>
    </>
  )
}

export default ItemServer2