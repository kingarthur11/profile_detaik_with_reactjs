import React from 'react'

const SearchBar = ({keyword, setKeyword}) => {
    const BarStyle = {width: "20rem", bacckground:"#F2F1F9", border: "4px solid #fff", padding:"0.5rem"}
    return (
        <div>
            <input
                style={BarStyle} 
                value={keyword}
                placeholder="search..."
                onChange={(e) => setKeyword(e.target.value)}
            />
            
        </div>
        
    )
}

export default SearchBar
