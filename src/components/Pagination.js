import React from 'react'

export default function Pagination({postsPerPage, totalPosts, paginate }) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <nav>
            <div className='pagination'>
                {pageNumbers?.map(number => (
                <span key={number} className='page-item'>
                    <button onClick={() => paginate(number)}  className='page-link'>
                        {number}
                    </button>
                </span>
                ))}
            </div>
        </nav>
    )
}
