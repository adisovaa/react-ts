import React from 'react'

interface ErrorMessage {
    error: string
}

export function ErrorMessage({error}: ErrorMessage) {
    return (
        <div>
            <p className='text-center text-red-600'>{error}</p>
        </div>
    )
}