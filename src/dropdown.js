import React, { useState } from 'react';

function Dropdown() {
  const [selectedOption, setSelectedOption] = useState(null);
  const options = ['Scam Q&A', 'Story Corner'];

  const handleSelect = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div>
      
      <select value={selectedOption} onChange={handleSelect}>
        <option value="">Category</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      {selectedOption && <p>Selected Option: {selectedOption}</p>}
    </div>
  );
}

export default Dropdown;
