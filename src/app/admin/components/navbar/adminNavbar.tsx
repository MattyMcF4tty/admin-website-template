'use client';

import React from 'react';
import Link from 'next/link';
import Button from '@/src/components/ui/Button';
import { useRouter } from 'next/navigation';

const AdminNavbar = () => {
  const router = useRouter();
  async function handleSignOut() {
    console.log('Signing out');
    await fetch('/api/auth/signout', {
      method: 'POST',
    });
  }

  return (
    <div className="absolute w-screen bg-white h-12 flex flex-row justify-between shadow-lg border-b-2 border-company-color-primary">
      {/* Logo */}
      <Link href={'/'} className="flex flex-row items-center">
        <img src="/CompanyLogo.png" alt="Company Logo" className="h-full" />
        <div className="flex flex-col">
          <p className="text-sm text-black font-semibold">{process.env.NEXT_PUBLIC_COMPANY_NAME}</p>
          {/* <p className='text-xs text-black font-semibold'>Admin</p> */}
        </div>
      </Link>

      <div>
        {/* When clicked call api endpoint /auth/signout */}
        <Button onClick={handleSignOut}>Sign Out</Button>
      </div>
      {/* User */}
    </div>
  );
};

export default AdminNavbar;
