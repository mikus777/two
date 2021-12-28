import React from 'react'

const  Search = ({inputValue,onChange}) => {
    return (
        <div>
            Filter shown with: <input value={inputValue} onChange={onChange} />
        </div>
    )
}

export default Search