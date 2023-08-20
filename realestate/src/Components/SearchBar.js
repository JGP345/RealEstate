import React, { useState } from 'react';


const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('Search by');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    console.log(`Search term is: ${searchTerm}`);
  };

  const toggleDropdown = (event) => {
    event.stopPropagation();
    setDropdownOpen(!dropdownOpen);
  };

  const handleSelect = (value, event) => {
    event.preventDefault();
    event.stopPropagation();
    setSelectedValue(value);
    setDropdownOpen(false);
  };

  const options = ['All', 'Nearby Me', 'Cities', 'Neighborhoods', 'Address', 'MLS#', 'Schools', 'ZIP Code', 'County', 'Keyword'];

  return (
    <form className='search-container' onSubmit={handleSearch}>
      <div className='input-group'>
        <div className='dropdown' onClick={toggleDropdown}>
          <button className='hover-button dropdown-button'>{selectedValue}</button>
          {dropdownOpen && 
            <div id="myDropdown" className="dropdown-content">
              {options.map((option, index) => (
                <a href="#" onClick={(event) => handleSelect(option, event)} key={index}>{option}</a>
              ))}
            </div>
          }
        </div>
        <input 
          type="text" 
          placeholder="Search..." 
          value={searchTerm} 
          onChange={handleInputChange} 
          className='form-control'
        />
       
      </div>
      <button className='hover-button search-button' type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
