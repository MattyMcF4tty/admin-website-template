import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';

interface SideNavButtonProps {
  text: string;
  href: string;
  icon: IconDefinition;
  checkPath?: boolean
}

const SideNavButton = ({text, href, icon, checkPath}: SideNavButtonProps) => {


  return (
    <Link className='hover:bg-company-color-primary hover:text-white hover:w-[104%] duration-150 text-black flex items-center w-full pl-2 h-10 text-md hover:shadow-default'
    href={href}>
        <FontAwesomeIcon icon={icon} 
        className='w-5 mr-3'/>
        {text}
    </Link>  
  )
}

export default SideNavButton