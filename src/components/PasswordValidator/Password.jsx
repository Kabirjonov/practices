import React, { useState } from 'react'
import Header from '../Header/Header'
import './password.css'
import validator from 'validator'

export default function Password() {

    const [message, setMessage] = useState('')

    const validate = (value) => {
        if (validator.isStrongPassword(value, {
            minLength: 8, minLowercase: 1,
            minUppercase: 1, minNumbers: 1,
            minSymbols: 1,
        })) {
            console.log('kuchli kalit');
            
            setMessage('Password is strong')
        } else {
            console.log('zaif kalit');
            
            setMessage('Password is not strong')
        }
    }

    return (
        <>
            <Header title='Checking Password Strength in React' />
            <div className="container">
                <form action="#" className='d-grid align-items-center justify-content-center'>
                    <label htmlFor="password" className='text-light text-start mb-1'>
                        Enter Password:
                    </label>
                    <input
                        type="text"
                        id="password"
                        placeholder='Password'
                        onChange={(e) => validate(e.target.value)}
                        className=''
                    />
                    {message && <p>{message}</p>}

                    {/* usefully https://www.geeksforgeeks.org/create-a-password-strength-checker-using-html-css-and-javascript/ */}
                </form>
            </div>
        </>
    )
}

