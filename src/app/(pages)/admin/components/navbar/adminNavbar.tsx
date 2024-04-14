'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Session } from '@supabase/supabase-js';
import Button from '@/components/ui/button';
import { useSupabase } from '@/hooks/useSupabase';

const AdminNavbar = () => {
  const router = useRouter();
  const { getSession } = useSupabase();
  const [user, setUser] = useState<Session | null>(null);

  useEffect(() => {
    async function init() {
      setUser(await getSession());
    }

    init();
  }, []);

  const handleSignOut = async () => {
    console.log('Signing out');
    await fetch('/api/auth/signout', {
      method: 'POST',
    });
  };

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
      {user && <div>{user.user.email}</div>}
    </div>
  );
};

export default AdminNavbar;
