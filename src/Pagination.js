import React from 'react'

const Pagination = ({postPerPage, totalPosts, paginate}) => {
    const pageNumber = [];
    for(let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
        pageNumber.push(i)
    }
    return (
        <div className="page">
            
            <ul className="pagination">
                {pageNumber.map(number => (
                    <li key={number}>
                        <a className="cdp" onClick={() => paginate(number)} href='!#'>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        
        </div>
        
    )
}

export default Pagination;