import React from 'react';
import Search from './Components/Search/Search';
import History from './Components/History/History';

export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='jumbotron'>
          <h1>Origin Weather App</h1>
          <p>Always know if you'll need an umbrella!</p>
        </div>

        <div className='row'>
          <div className='col-md-12'>
          <Search/>
          </div>

          <div className='col-md-6'>
          <History/>
          </div>
        </div>
      </div>
    );
  }
}
