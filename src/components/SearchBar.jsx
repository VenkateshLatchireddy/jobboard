import React, { useState, useEffect, useRef } from 'react';

const SearchBar = ({ searchTerm, onSearchChange }) => {
  const [localValue, setLocalValue] = useState(searchTerm);
  const inputRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    setLocalValue(searchTerm);
  }, [searchTerm]);

  const handleChange = (e) => {
    const value = e.target.value;
    setLocalValue(value);
    
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      onSearchChange(value);
    }, 200); // Faster response
  };

  const handleClear = () => {
    setLocalValue('');
    onSearchChange('');
    inputRef.current?.focus();
  };

  return (
    <div className="relative">
      <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>

      <input
        ref={inputRef}
        type="text"
        value={localValue}
        onChange={handleChange}
        placeholder="Search jobs..."
        className="w-full h-10 pl-9 pr-8 text-sm bg-gray-50 border border-gray-200 
                   rounded-lg focus:bg-white focus:border-primary-500 focus:ring-2 
                   focus:ring-primary-100 transition-all duration-200 outline-none"
      />

      {localValue && (
        <button
          onClick={handleClear}
          className="absolute right-2 top-1/2 transform -translate-y-1/2
                   p-1 rounded-full hover:bg-gray-200 transition-colors"
        >
          <svg className="w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default SearchBar;