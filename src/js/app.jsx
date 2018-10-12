import React from 'react';
import History from './Components/History';
import Information from './Components/Information';
import SearchBar from './Components/SearchBar';

export default class App extends React.Component {

  render() {
    return (
      <div className='container'>
        <div className='jumbotron text-center'>
          <h1><strong>Origin Weather App</strong></h1>
          <p>Always know when you'll need a lightsaber umbrella!</p>
        </div>

        <div className='row'>
          <div className='col-md-12'>
          <SearchBar/>
          </div>

          <div className='col-md-6'>
          <Information/>
          </div>
          <div className='col-md-6'>
          <History/>
          </div>
        </div>
      </div>
    );
  }
}
