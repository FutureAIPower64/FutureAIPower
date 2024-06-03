'use client'
import React from 'react'

function BlogHead({ head, desc }) {
    return (
        <div className='dark:text-white pb-2 mb-3'>
            <h1 className='text-2xl font-semibold pb-1 '>{head}</h1>
            <h5 className='text-dark-text text-gray-700 text-sm dark:text-blue-100 pb-2'>{desc}</h5>
        </div>
    )
}

export default BlogHead;