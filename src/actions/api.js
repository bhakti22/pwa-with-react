import { storeNews, logApiError } from './index';

export function getNews(){
  return dispatch => {
    fetch('https://newsapi.org/v2/everything?q=bitcoin&from=2018-08-22&sortBy=publishedAt&apiKey=c87724319390454380574f0022e72c6d')
    .then(response => response.json())
    .then(body => {
      dispatch(storeNews(body.articles))
    })
    .catch(err => dispatch(logApiError(err)))
  }
}
