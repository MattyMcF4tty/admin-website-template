import React from 'react'
import PrebookCounter from '../components/prebookStats/counter'

// https://www.google.com/search?q=order+dashboard+design&tbm=isch&ved=2ahUKEwi74fHiotaCAxUGExAIHd0vBjwQ2-cCegQIABAA&oq=order+dashboard+design&gs_lcp=CgNpbWcQAzIHCAAQgAQQEzoECCMQJzoGCAAQBxAeOggIABAIEAcQHlCbBVjvCGCQCmgAcAB4AIABYogB3wOSAQE3mAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=sEBdZbvJO4amwPAP3d-Y4AM&bih=595&biw=1280#imgrc=O_Kj1qJ0oPybrM

const AdminPage = () => {
  return (
    <div className='w-full min-h-screen'>
      {/* Counters */}
      <div className='w-4/5 flex flex-row justify-between'>
        <PrebookCounter counterText="Current" counter={2}/>
        <PrebookCounter counterText="Current" counter={2}/>
        <PrebookCounter counterText="Current" counter={2}/>
        <PrebookCounter counterText="Current" counter={2}/>
      </div>
    </div>
  )
}

export default AdminPage