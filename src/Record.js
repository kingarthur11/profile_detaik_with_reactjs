import React from 'react'

const Record = ({FirstName, LastName, Gender, Latitude, Longitude, CreditCardNumber,
    CreditCardType, Email, DomainName, PhoneNumber, MacAddress, URL, UserName,
    LastLogin, PaymentMethod}) => {

    return (
        <>
        <article className='single-tour'>
            <div>
                <h4 className='one'> FirstName: {FirstName}</h4>
                <h4 className='two'> LastName: {LastName}</h4>
                <h4 className='three'> Gender: {Gender}</h4>
                <h4 className='four'> Latitude: {Latitude}</h4>
                <h4 className='five'> Longitude: {Longitude}</h4>
                <h4 className='six'> CreditCardNumber: {CreditCardNumber}</h4>
                <h4 className='seven'> CreditCardType :{CreditCardType}</h4>
                <h4 className='eight'> Email: {Email}</h4>
                <h4 className='nine'> DomainName: {DomainName}</h4>
                <h4 className='ten'> PhoneNumber: {PhoneNumber}</h4>
                <h4 className='eleven'> MacAddress: {MacAddress}</h4>
                <h4 className='twelve'> URL: {URL}</h4>
                <h4 className='thirteen'> UserName: {UserName}</h4>
                <h4 className='fourteen'> LastLogin: {LastLogin}</h4>
                <h4 className='fifteen'>PaymentMethod: {PaymentMethod}</h4>
            </div>
        </article>  
        </>
    )
}

export default Record;