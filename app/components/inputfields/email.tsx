'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';

interface EmailInputProps {
    setEmail: (email: string) => void
}

const EmailInput = ({setEmail}: EmailInputProps) => {
    const [email, setEmailState] = useState("");
    const [focused, setFocused] = useState(false);
    const enabled = focused || email != "";

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
        setEmailState(e.target.value)
    }

    return (
        <div className='pt-2'>
            <div className={`border-b-[2px] flex flex-row h-10 ${enabled ? "border-company-color-primary" : "border-disabled"} items-center px-1 duration-100`}>
                <FontAwesomeIcon icon={faUser} className={`mr-2 ${enabled ? "text-company-color-primary" : "text-disabled"} duration-100`}/>

                <div className='relative flex items-center'>
                    <h5 className={`z-0 absolute ${enabled ? "bottom-6 text-xs" : "bottom-0"} duration-150 pl-1`}>Email</h5>
                    <input 
                    className="w-full z-10 bg-transparent" 
                    id="email" name="email"
                    type="email"
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    value={email}
                    onChange={(e) => handleChange(e)}
                    />
                </div>
            </div>
        </div>

    )
}

export default EmailInput;