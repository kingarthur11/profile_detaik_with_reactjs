import React from 'react'

const SearchBar = ({keyword, setKeyword}) => {
    const BarStyle = {display: "block", width: "20rem", bacckground:"#F2F1F9", border: "4px solid #fff", padding:"0.5rem", margin: "2rem auto"}
    return (
        <div className="search-container">
            <h1 className="profile">PROFILE DETAILS</h1>
            <input
                className="search-bar"
                style={BarStyle} 
                value={keyword}
                placeholder="search..."
                onChange={(e) => setKeyword(e.target.value)}
            />
            
        </div>
        
    )
}

export default SearchBar
