import { NextPage } from "next";
import Link from "next/link";

import React from 'react'

const Home:NextPage = () => {

  return (
    <main className="flex flex-col min-h-screen w-full items-center justify-center">
      <h1 className="text-company-color-primary font-semibold text-4xl">Select mode</h1>

      <div className='flex bg-white p-4 rounded-md mt-2 flex-col shadow-default'>
        <div className="mb-6 flex flex-col items-center">
          <p>Select the website you want to go to.</p>
          <p>At the user website you will be able to order and cancel prebooks to a location of your choosing.</p>
          <p>This prebook will then be visible on the admin website. Where it can be delivered by the company.</p>
        </div>

        <div className="flex justify-evenly">
          <Link href="admin" className="bg-company-color-primary hover:bg-opacity-75 text-white px-4 rounded-sm py-1 flex justify-center items-center min-w-[100px]">User</Link>
          <Link href="admin" className="bg-company-color-primary hover:bg-opacity-75 text-white px-4 rounded-sm py-1 flex justify-center items-center min-w-[100px]">Admin</Link>
        </div>
      </div>
    </main>
  )
}

export default Home
