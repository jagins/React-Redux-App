import React from 'react';
import './App.css';

import {connect} from 'react-redux';
import {getCats} from './actions';

function App(props) 
{
  const {isloading, cats, error} = props;
  
  return (
    <div className="App">
     <h1>Welcome to the Cat App</h1>
    </div>
  );
}

const mapStateToProps = state =>
{
  return{
    isLoading: state.isLoading,
    cats: state.cats,
    error: state.error
  };
};

export default connect(mapStateToProps, {getCats})(App);
