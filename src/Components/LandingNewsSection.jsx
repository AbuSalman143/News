import React from 'react'

const LandingNewsSection = ({ newsData }) => {
  const { urlToImage, title, content, publishedAt, url, source } = newsData[0] || {}

  return (
    <div className='mt-32 h-auto flex flex-col md:flex-row gap-4 md:gap-10 border-2 bg-slate-50 p-4'>
      <div className='flex justify-center md:justify-start md:px-24'>
        <img src={urlToImage} className='w-full md:w-auto h-48 md:h-[100%] object-cover' alt="News" />
      </div>
      <div className='flex flex-col gap-3 items-start md:w-[60%] justify-center p-4'>
        <h1 className='font-bold text-xl md:text-2xl'>{title}</h1>
        <p className='text-sm md:text-base'>{content ? content.slice(0, -14) : ""}</p>
        <p className='text-red-900 text-sm'>Source: {source ? source.name : ""}</p>
        <p className='text-red-900 text-sm'>Published on: {publishedAt ? publishedAt.slice(0, 10) : ""}</p>
        <button className='font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none'>
          <a href={url} target="_blank" rel="noopener noreferrer">Read More</a>
        </button>
      </div>
    </div>
  )
}

export default LandingNewsSection;
