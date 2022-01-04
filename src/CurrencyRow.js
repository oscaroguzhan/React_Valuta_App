import React from 'react'

const CurrencyRow = (props) => {
    // destructure props 
    const {
        currencyOptions
    } = props;
    return (
        <main>
        
            <input type="number" className='input'/>
            <select className='select'>
            {currencyOptions.map(option => (
                <option key= {option} value={option}>
                   {option}
                </option>
            ))}
                
            </select>
        </main>
    )
}

export default CurrencyRow
