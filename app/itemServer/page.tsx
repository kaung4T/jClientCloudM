import React from 'react';
import Task from './task';
import { GetItemsAll } from './utils/hooks';
import { itemType } from '@/app/types/index';

async function ItemServer() {  
  const task: itemType[] | null = await GetItemsAll();

  if (!task) { return ( <><p className={'text-center p-5'}> Loading... </p> <p className={'text-red-600 text-center p-5'}> Somethings wrong with fetching Data! Please make sure to run Laravel Server and MySQL Apache </p></> )};

  return (
    <>
      <div className={'context'}>
        <p className={'text-center mb-7 text-lg'}>Backend Laravel</p>
        <Task task={task}></Task>
      </div>
    </>
  )
}

export default ItemServer