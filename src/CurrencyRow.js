import React from 'react'

const CurrencyRow = (props) => {
    // destructure props 
    const {
        currencyOptions,
        selectedCurrency,
        handleChangeCurrency
    } = props;
    return (
        <main>
        
            <input type="number" className='input'/>
            <select value={selectedCurrency} onChange={handleChangeCurrency}
            className='select'>
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
