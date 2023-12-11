import React, { useState } from 'react'

const Pagination = () => {
    const [page, setPage] = useState(1);

    const prevHandler = () => {
        if (page <= 1) return
        setPage(page - 1);
    }

    const nextHandler = () => {
        if (page >= 10) return
        setPage(page => page + 1);
    }

    return (
        <div>
            <button onClick={prevHandler}>prev</button>
            <p style={{ color: page === 1 ? "red" : "inherit" }}>1</p>
            <p style={{ color: page === 2 ? "red" : "inherit" }}>2</p>
            {
                page > 2 && page < 9 && (
                    <>
                        <span>...</span>
                        <p>{page}</p>
                    </>
                )
            }
            <span>...</span>

            <p>9</p>
            <p>10</p>
            <button onClick={nextHandler}>next</button>
        </div>
    )
}

export default Pagination