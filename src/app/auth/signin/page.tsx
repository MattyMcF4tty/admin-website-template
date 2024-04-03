'use client';

import React, { FC, useState } from 'react';
import ContentBox from '@/src/components/ui/ContentBox';
import Inputfield from '@/src/components/ui/Inputfield';
import Button from '@/src/components/ui/Button';
import { supabase } from '@/src/lib/supabase';
import { usePathname, useRouter } from 'next/navigation';

interface SignInPageProps {}

const SignInPage: FC<SignInPageProps> = () => {
  const [data, setData] = useState<{ email: string; password: string }>({
    email: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const router = useRouter();
  const pathname = usePathname();

  function handleChange(e: any) {
    const { name, value } = e.target;
    setData((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSignIn() {
    let { data: userData, error } = await supabase.auth.signInWithPassword({
      email: data.email,
      password: data.password,
    });

    if (userData.session || userData.user) {
      if (pathname === '/auth/signin') {
        router.push('/');
      }

      router.refresh();
    } else if (error) {
      setErrorMessage(error.message);
    }
  }

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <ContentBox
        padding={'small'}
        className="max-w-[35rem] max-h-[40rem] flex flex-col items-center "
      >
        <h1 className="text-2xl">Sign In</h1>
        <Inputfield name="email" type="email" onChange={handleChange} />
        <Inputfield name="password" type="password" onChange={handleChange} />
        {errorMessage && <p>{errorMessage}</p>}
        <Button variant="default" onClick={handleSignIn}>
          Sign In
        </Button>
      </ContentBox>
    </div>
  );
};

export default SignInPage;
