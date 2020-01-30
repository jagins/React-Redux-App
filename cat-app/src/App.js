import React from 'react';
import './App.css';

import { connect } from 'react-redux';
import { getCats } from './actions';

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

import Cats from './components/Cats';

function App(props) {
  const { isLoading, cats, error, getCats } = props;

  return (
    <div className="App">
      <h1>Welcome to the Cat App</h1>
      {!cats && !isLoading && <h3>Let's fill the page with cats!! Press the button below</h3>}
     
      {!isLoading ?
        <Button className='button' onClick={() => getCats()} variant='primary'>Let's load some cats</Button>
        :
        <Button className='button' variant='primary' disabled>Loading Cats
          <Spinner
            as="span"
            animation="grow"
            size="sm"
            role="status"
            aria-hidden="true"
          />
        </Button>
      }
        {cats && !isLoading &&(
          <div className='container'>
            {cats.map(cat => <Cats key={cat.id} catPic={cat.url}/>)}
          </div>)}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    cats: state.cats,
    error: state.error
  };
};

export default connect(mapStateToProps, { getCats })(App);
