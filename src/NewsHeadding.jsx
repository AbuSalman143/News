import React from 'react';

const NewsHeadding = ({ newsType }) => {
  return (
    <div className='mt-32 sm:mt-32 md:mt-32 lg:mt-32 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-red-600'>
      {newsType.toUpperCase()} RELATED NEWS
    </div>
  );
};

export default NewsHeadding;
