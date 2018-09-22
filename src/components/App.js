import React from 'react';
import Header from './Header';
import News from './News';
import './../styles/style.scss';

import { Provider } from 'react-redux';
import store from './../store';

class App extends React.Component {
  render() {
    return(
      <Provider store={store}>
      <div className="container">
        <Header />
        <News />
      </div>
      </Provider>
    )
  }
}

export default App;
