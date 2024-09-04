import React from 'react';

const Search = ({ inputValue, setInputValue, searchInput }) => {
  return (
    <div className="rounded p-3 flex flex-col md:flex-row gap-3 items-center justify-center w-full">
      <input
        placeholder="Search News here..."
        className="border-2 w-full md:w-[60%] rounded-lg bg-white py-2 px-4 md:px-5"
        aria-label="Search News"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button 
        className="border-2 border-black py-2 px-5 md:px-7 bg-slate-900 text-white text-sm font-bold rounded-lg w-full md:w-auto"
        onClick={() => searchInput(inputValue)}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
