import PropTypes from 'prop-types';

import NewsCard from '../NewsCard';

import stylees from './NewsList.module.css';

const NewsList = ({ articles }) => {
  return (
    <div className={stylees.newsList}>
      {articles.map((artcile, index, arr) => {
        if (!artcile.urlToImage || !artcile.author || !artcile.content) {
          return null;
        }

        return (
          <NewsCard 
            key={index}
            src={artcile.urlToImage}
            title={artcile.title}
            publishedAt={artcile.publishedAt}
            author={artcile.author}
            sourceName={artcile.source.name}
            description={artcile.description}
            url={artcile.url}
            notLastChild={!(arr.length === index + 1)}
          />
        )
      })}
    </div>
  )
}

NewsList.propTypes = {
  articles: PropTypes.array
}

export default NewsList;