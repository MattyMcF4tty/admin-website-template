'use client';

import { faAngleUp, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React, { useState, useEffect } from 'react'


/**
 * 
 * @param text This is the text on the dropdown and the path to all the pages under it.
 *  
 * @param text This is the text on the dropdown and the path to all the pages under it.
 *  
 */
const AdminSidebarDropdown = ({text, pages}: {text:string, pages: string[]}) => {
  const dropdownUrl = `/${text.toLowerCase()}`;
  const pathname = usePathname();
  const [active, setActive] = useState(false);
  const [urlMatch, setUrlMatch] = useState(pathname.includes(dropdownUrl));

  useEffect(() => {
    setActive(pathname.includes(dropdownUrl));
    setUrlMatch(pathname.includes(dropdownUrl));
  }, [pathname, dropdownUrl]);

  return (
    <div className='w-full '>
      <button
        className={`text-sm bg-white z-20 w-full text-left ${active ? 'font-semibold' : ''} ${urlMatch ? 'hover:cursor-default' : ''}`}
        type='button' onClick={() => {
          if (!urlMatch)
          setActive(!active)
        }}
      >
        {text}
        <FontAwesomeIcon icon={faChevronUp} className={`ml-2 duration-150 ${active ? 'rotate-180' : 'font-thin'}`}/>
      </button>

      {active && (
        <div>
          {pages.map((pageName) => (
            <DropdownButton text={pageName} buttonPath={dropdownUrl} key={pageName} />
          ))}
        </div>
      )}  
    </div>
  );
};

export default AdminSidebarDropdown;

// DropdownButton component
export const DropdownButton = ({text, buttonPath}: {text:string, buttonPath:string}) => {
  const path = `${buttonPath}/${text.toLowerCase()}`;
  const active = usePathname().includes(path);

  return (
    <div className={`border-l-2 pl-2
    hover:border-company-color-primary hover:border-opacity-40
    ${active ? 'border-company-color-primary border-opacity-40' : ''}`}>
      <Link
        className={`flex flex-col font-light w-full rounded-md px-4 py-1 text-sm
        hover:font-normal
        ${active ? 'bg-company-color-primary bg-opacity-25 font-normal' : ''}`}
        href={`/admin/${path}`}
      >
        {text}
      </Link>
    </div>
  );
};
