import Button from '@/components/ui/button';
import ContentBox from '@/components/ui/contentBox';
import Inputfield from '@/components/ui/inputfield';
import React, { FC } from 'react';

interface SignUpProps {}

const SignUp: FC<SignUpProps> = ({}) => {
  return (
    <form
      action="/auth/signup"
      method="post"
      className="flex justify-center items-center w-full h-screen"
    >
      <ContentBox
        padding={'small'}
        className="max-w-[35rem] max-h-[40rem] flex flex-col items-center "
      >
        <h1 className="text-2xl">Sign up</h1>
        <Inputfield name="email" type="email" />
        <Inputfield name="password" type="password" />
        <Button variant="default" type="submit">
          Sign up
        </Button>
      </ContentBox>
    </form>
  );
};

export default SignUp;
