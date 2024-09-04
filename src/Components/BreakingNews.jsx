import React from 'react'

const BreakingNews = ({ newsData }) => {
  const { url, title } = newsData[0] || {}

  return (
    <div className="flex flex-col md:flex-row bg-[#c31815] w-full p-4 md:p-5 items-center justify-center gap-4 md:gap-10">
      <button className="bg-white text-[#c31815] py-2 px-4 md:py-3 md:px-5 rounded-lg">
        <a href={url} target="_blank" rel="noopener noreferrer">Breaking News</a>
      </button>
      <p className="text-white text-base md:text-lg text-center md:text-left">
        {title}
      </p>
    </div>
  )
}

export default BreakingNews
