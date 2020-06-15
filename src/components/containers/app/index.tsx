import React, { useState, useEffect } from 'react';
import './index.css';
import {
  apiKey,
  categories
} from '../../../constants/api';

const App: React.FC = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    //https://newsapi.org/docs/get-started
    fetch('https://newsapi.org/v2/top-headlines?' + new URLSearchParams({
      apiKey,
      category: categories.science,
      language: 'en',
      country: 'us'
    }))
      .then(res => res.json())
      .then(res => {
        setArticles(res.articles);
        console.log('data', res);
      });
  }, []);

  return (
    <div className="page">
      <h1 className='page__title'>Hello Andruha</h1>
      <div className="article-container">
        {
          articles.map(({ author, title, description, urlToImage }) => (
            <article className="article" key={title}>
              <img src={urlToImage} className='article__picture' alt="" />
              <div className="article__inner">
                <h2 className="article__title">{title}</h2>
                <p className="article__text">{description}</p>
                <p className="article__author">{author}</p>
              </div>
            </article>
          ))
        }
      </div>
    </div>
  );
};

export default App;
