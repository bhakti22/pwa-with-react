import React from 'react';

const LoadingHOC = (WrapperComponent) => {
  return (
    class LoadingHOC extends React.Component{
      render(){
        return(
          this.props.data && this.props.data.length ?
          <WrapperComponent {...this.props} />
          :
          <div className="loaderContainer">
            <div className="loader"></div>
          </div>
        )
      }
    }
  )
}

export default LoadingHOC;
