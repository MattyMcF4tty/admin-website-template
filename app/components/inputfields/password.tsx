'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';

interface PasswordInputProps {
    setPassword: (password: string) => void
}

const PasswordInput = ({setPassword}: PasswordInputProps) => {
    const [email, setPasswordState] = useState("");
    const [focused, setFocused] = useState(false);
    const enabled = focused || email != "";

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
        setPasswordState(e.target.value)
    }

    return (
        <div className='pt-2'>
            <div className={`border-b-[2px] flex flex-row h-10 ${enabled ? "border-company-color-primary" : "border-disabled"} items-center px-1 duration-100`}>
                <FontAwesomeIcon icon={faUser} className={`mr-2 ${enabled ? "text-company-color-primary" : "text-disabled"} duration-100`}/>

                <div className='relative flex items-center'>
                    <h5 className={`z-0 absolute ${enabled ? "bottom-6 text-xs" : "bottom-0"} duration-150 pl-1 text-gray-500 font-semibold`}>Password</h5>
                    <input 
                    className="w-full z-10 bg-transparent outline-none placeholder:italic px-1 border-company-color-primary" 
                    id="password" name="password"
                    type="password"
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

export default PasswordInput;