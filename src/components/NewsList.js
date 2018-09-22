import React from 'react';
import LoadingHOC from './HOC/Loading';

class NewsList extends React.Component{
  render(){
    return(
      <section className="newsList">
        {this.props.data.map(item => {
          return <article key={item.url}>
            <div className="imgContainer">
              <img src={item.urlToImage} title={item.title} alt={item.title} />
            </div>
            <div className="caption">{item.title}</div>
            <div className="desc">{item.description}</div>
          </article>
        })}
      </section>
    )
  }
}

export default LoadingHOC(NewsList);
