import React, { useEffect, useState } from 'react';
import Header from './Components/Header';
import NewsCards from './Components/NewsCards';
import Search from './Components/Search';
import LandingNewsSection from './Components/LandingNewsSection';
import BreakingNews from './Components/BreakingNews';
import NewsHeadding from './NewsHeadding';
import Footer from './Components/Footer';

const App = () => {
  const [newsData, setNwesData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [newsType, setNewsType] = useState("india");
  const [toggelLaddingComponet, setToggelLandingComponent] = useState(true);

  const apiKey = "96a81111dfac4400ad4de608d0734f35";
  let url = `https://newsapi.org/v2/everything?q`;

  async function newsApi() {
    let response = await fetch(`https://newsapi.org/v2/everything?q=${newsType}&apiKey=${apiKey}`);
    let data = await response.json();
    setNwesData(data.articles);
  }

  useEffect(() => {
    newsApi();
  }, [newsType]);

  const changeNews = (input) => {
    input ? setNewsType(input) : setNewsType("india");
    setToggelLandingComponent(false);
  }

  const searchInput = (input) => {
    setNewsType(input);
  }

  return (
    <div className='flex flex-col justify-center w-full px-4 sm:px-6 md:px-10 lg:px-20'>
      <Header setToggelLandingComponent={setToggelLandingComponent} changeNews={changeNews} />
      
      {!toggelLaddingComponet && <NewsHeadding newsType={newsType} />}
      
      {toggelLaddingComponet && (
        <>
          <LandingNewsSection newsData={newsData} />
          <BreakingNews newsData={newsData} />
          <Search inputValue={inputValue} setInputValue={setInputValue} searchInput={searchInput} />
        </>
      )}

      <div className={`flex flex-wrap gap-6 sm:gap-10 md:gap-16 lg:gap-20 w-full justify-center mt-12`}>
        {newsData.map((item, index) => (
          <NewsCards newsData={item} key={index} />
        ))}
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
