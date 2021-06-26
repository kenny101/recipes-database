import { useEffect, useState } from "react"
export default function InfiniteCardScroll(query, pageNumber) {
    useEffect(() => {
        axios({
            method: 'GET',
            
        })
    }, [query, pageNumber])
    return (

        <div>

        </div>
    )
}

