import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props)
  }
  render(){
    return(
      <header>
        <section className="logo">
          News
        </section>
        {/*<nav>
          <a href="#">News</a>
          <a href="#">Weather</a>
        </nav>*/}
      </header>
    )
  }
}

export default Header;
