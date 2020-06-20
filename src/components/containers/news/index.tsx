import React, { useState, useEffect } from 'react'
// import './index.css'
import { apiKey, categories } from 'constants/api'
import useNewsStyles from './styles'

const News: React.FC = () => {
  const [articles, setArticles] = useState([])
  useEffect(() => {
    //https://newsapi.org/docs/get-started
    fetch(
      'https://newsapi.org/v2/top-headlines?' +
        new URLSearchParams({
          apiKey,
          category: categories.science,
          language: 'en',
          country: 'us',
        })
    )
      .then((res) => res.json())
      .then((res) => {
        setArticles(res.articles)
        console.log('data', res)
      })
  }, [])

  const classes = useNewsStyles()

  return (
    <div className={classes.page}>
      <h1 className={classes.page__title}>Hello Andruha</h1>
      <div className={classes.articleContainer}>
        {articles.map(({ author, title, description, urlToImage }) => (
          <article className={classes.article} key={title}>
            <img src={urlToImage} className={classes.article__picture} alt="" />
            <div className={classes.article__inner}>
              <h2 className={classes.article__title}>{title}</h2>
              <p className={classes.article__text}>{description}</p>
              <p className={classes.article__author}>{author}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export default News
