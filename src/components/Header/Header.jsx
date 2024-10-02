import React from 'react'

export default function Header({ title, text }) {
    return (
        <div >
            <div className='p-5'>
                <h1 className='text-light'>{title}</h1>
                <p className='text-light'>{text}</p>
            </div>
        </div>
    )
}
