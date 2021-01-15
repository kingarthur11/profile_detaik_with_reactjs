import React from 'react'
import Record from './Record'

export const Records = ({record}) => {
    
    return (
        <section className="container">            
            {record.map((group, index) => {                    
            return  <Record key={index} {...group}></Record>                    
            })}            
        </section>
    )
}

export default Records;