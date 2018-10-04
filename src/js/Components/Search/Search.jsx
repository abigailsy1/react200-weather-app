import React from 'react';

export default class Search extends React.Component {
  render() {
    return(
      <div>
        <div className='container'>
        <div className='btn-group'>
          <button type='button' className='btn btn-primary' value='SD'>San Diego</button>
          <button type='button' className='btn btn-primary' value='Tokyo'>Tokyo</button>
          <button type='button' className='btn btn-primary' value='Amsterdam'>Amsterdam</button>
          <button type='button' className='btn btn-primary' value='NZ'>New Zealand</button>
          <button type='button' className='btn btn-primary' value='AUS'>Australia</button>
        </div>

        <form>
          <div className='input-group'>
          <input type='text' className='form-control' placeholder='Enter a city'/>
          <div className='input-group-append'>
           <button type='button' className='btn btn-outline-secondary'>GO!</button>
          </div>    
           </div>
         
        </form>
         
        </div>
      </div>
    );
  }
}

