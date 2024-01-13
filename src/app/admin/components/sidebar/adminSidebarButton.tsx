'use client';

// Import usePathname from 'next/navigation'
import { usePathname } from 'next/navigation';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';

interface SidebarButtonProps {
  text: string;
  href: string;
  icon: IconDefinition;
}

const SidebarButton = ({ text, href, icon }: SidebarButtonProps) => {
  const pathname = usePathname();

  // Check if the current path includes the href
  const isActive = pathname.includes(href);

  if (isActive) {
    return (
      <p className='h-10 w-full text-white bg-company-color-primary shadow-default flex items-center pl-4 rounded-r-md'>
        <FontAwesomeIcon className='w-5 mr-3' icon={icon}/>
        {text}
      </p>
    )
  }
  return (
    <Link href={'/admin/' + href} className='duration-100 text-black flex items-center w-full h-10 text-md pl-4
    hover:w-full hover:bg-company-color-primary hover:text-white hover:shadow-default hover:rounded-r-md'>
        <FontAwesomeIcon className='w-5 mr-3' icon={icon}/>
        {text}
    </Link>  
  );
};

export default SidebarButton;
