import React,{useState} from 'react'
import "./header.css";

const LanguageDropdown = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('');
    const handleSelectChange = (event) => {
        setSelectedLanguage(event.target.value);
    }
  return (
    <div>
      <select value={selectedLanguage} onChange={handleSelectChange} className='language'>
        <option>EN</option>
        <option>English</option>
        <option>Duchest</option>
        <option>France</option>
      </select>
    </div>
  );
}


export default LanguageDropdown
