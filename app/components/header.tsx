import Link from 'next/link';
import React from 'react';

function Header() {
  return (
    <>
        <div className={'mb-2 header'}>
            <ul>
                <li><Link href={'/'}> Serverless </Link></li>
                <li><Link href={'/itemServer'}> Server </Link></li>
                <li><Link href={'/infoApi'}> API </Link></li>
            </ul>
        </div>
    </>
  )
}

export default Header