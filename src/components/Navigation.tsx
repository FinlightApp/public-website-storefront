'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react';

const links = [
  {
    label: "Home",
    href: "/"
  },
  {
    label: "Team",
    href: "/team"
  },
  {
    label: "Spotlight",
    href: "/spotlight"
  },
]

export default function Navigation() {

  const [isOpen, setIsOpen] = useState(false);

  return (
<nav className="flex items-center justify-between flex-wrap gap-4 lg:gap-10 px-8 py-6">
     <Link className="flex items-center flex-shrink-0 gap-3" href="/">
        <Image
          src="/logo.svg"
          alt="logo"
          style={{objectFit: "cover"}}
          width={40}
          height={40}
          loading="lazy"
        />
        <span>
          Doryho
        </span>
     </Link>
     <div className="block lg:hidden">
       <button
         onClick={() => setIsOpen(!isOpen)}
         className="flex items-center p-4 rounded text-gray-700 hover:text-gray-900"
       >
         <svg
           className={`fill-current h-4 w-4 ${isOpen ? "hidden" : "block"}`}
           viewBox="0 0 20 20"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
         </svg>
         <svg
           className={`fill-current h-4 w-4 ${isOpen ? "block" : "hidden"}`}
           viewBox="0 0 20 20"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
         </svg>
       </button>
     </div>
     <div
       className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}
     >
       <div className="text-sm lg:flex-grow">
        {links.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className='
                block lg:inline-block px-4 py-3
                text-base font-semibold leading-6
                text-gray-900 lg:text-gray-500
              '
            >
              {link.label}
            </Link>
          ))}
       </div>
       <div>
         <button className="inline-flex items-center px-6 py-3 rounded-lg text-lg font-semibold leading-7 text-purple-50 bg-purple-600 w-full lg:w-auto justify-center">
           Book a demo
         </button>
       </div>
     </div>
   </nav>
  )
}
