"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

function Header() {
  const path: string = usePathname();
  return (
    <>
        <div className={'mb-2 header'}>
            <ul>
                <li><Link className={`${path === "/" ? "active" : ""}`} href={"/"}> Laravel </Link></li>
                <li><Link className={`${path === "/itemServer" ? "active" : ""}`} href={"/itemServer2"}> Prisma </Link></li>
                <li><Link className={`${path === "/infoApi" ? "active" : ""}`} href={"/infoApi"}> API </Link></li>
            </ul>
        </div>
    </>
  )
}

export default Header