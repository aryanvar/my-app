import React,{useState} from 'react'
import './header.css'
const CurrencyDropdown = () => {
    const [selectedCurrency, setSelectedCurrency] = useState('');
    const handleSelectChange = (event) => {
        setSelectedCurrency(event.target.value);
    }
  return (
    <div>
      <select value={selectedCurrency} onChange={handleSelectChange} className='currency'>
        <option value="apple">$USD</option>
        <option value="banana">€EUR</option>
      </select>
    </div>
  );
}

export default CurrencyDropdown
