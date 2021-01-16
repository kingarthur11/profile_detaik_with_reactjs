import React from 'react'

const Filter = ({FirstName, LastName, Gender, Latitude, Longitude, CreditCardNumber,
    CreditCardType, Email, DomainName, PhoneNumber, MacAddress, URL, UserName,
    LastLogin, PaymentMethod}) => {
    const BarStyle = {width: "20rem", bacckground:"#F2F1F9", border: "4px solid #fff", padding:"0.5rem"}
    return (
        <div style={BarStyle}>
           
             <select >
                <option value={FirstName}> FirstName </option>
                <option value={LastName}> LastName </option>
                <option value={Gender}> Gender </option>
                <option value={Latitude}> Latitude </option>
                <option value={Longitude}> Longitude </option>
                <option value={CreditCardNumber}> CreditCardNumber</option>
                <option value={CreditCardType}> CreditCardType</option>
                <option value={Email}> Email </option>
                <option value={DomainName}> DomainName </option>
                <option value={PhoneNumber}> PhoneNumber </option>
                <option value={MacAddress}> MacAddress </option>
                <option value={URL}> URL </option>
                <option value={UserName}> UserName </option>
                <option value= {LastLogin}> LastLogin</option>
                <option value={PaymentMethod}>PaymentMethod </option>
            </select> 
        </div>
    )
}

export default Filter
