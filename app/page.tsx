export default function Home() {

  return (
    <main className="flex flex-col min-h-screen w-full items-center justify-center">
      <h1>Select mode</h1>

      <div className='flex bg-white p-4 rounded-md mt-2 flex-col'>
        <div className="mb-6 flex flex-col items-center">
          <p>Select the website you want to go to.</p>
          <p>At the user website you will be able to order and cancel prebooks to a location of your choosing.</p>
          <p>This prebook will then be visible on the admin website. Where it can be delivered by delivered by the company.</p>
        </div>

        <div className="flex justify-evenly">
          <button className="w-48">User</button>
          <button className="w-48">Admin</button>
        </div>
      </div>
    </main>
  )
}
