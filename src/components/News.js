import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getNews } from './../actions/api';
import NewsList from './NewsList';

class News extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount(){
    this.props.getNews()
  }

  // shouldComponentUpdate(nextProps){
  //   if(this.props !== nextProps){
  //     return true;
  //   }else{
  //     return false;
  //   }
  // }

  render(){
    return(
      <NewsList data={this.props.news} />
    )
  }
}

function mapStateToProps(state) {
  return{
    news: state.news
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getNews
  }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(News);
