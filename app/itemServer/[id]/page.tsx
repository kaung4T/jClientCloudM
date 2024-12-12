'use client'

import { useParams, usePathname } from 'next/navigation';
import React from 'react';

function SingleItem() {

    let path = useParams();

  return (
    <>
      <div className={'context'}></div>
    </>
  )
}

export default SingleItem