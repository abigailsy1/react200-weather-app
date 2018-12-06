import React from 'react';
import { searchInput, getWeather } from './searchBarAction';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleUpdateSearch = this.handleUpdateSearch.bind(this);
    this.handleSearchBtn = this.handleSearchBtn.bind(this);
  }

  handleBtnClick(e) {
    const { dispatch } = this.props;
    const { value } = e.target;
    dispatch(searchInput(value));
  }

  handleUpdateSearch(e) {
    const { dispatch } = this.props;
    var value = e.target.value;
    dispatch(searchInput(value));
  }

  handleSearchBtn() {
    const { input, dispatch } = this.props;
    dispatch(getWeather(input));
  }

  render() {
   const {input} = this.props;
    return (
      <div className='card-header alert alert-light'>   
        <button type='button' name='option' value='San Diego' className='btn btn-dark text-white' onClick={ this.handleBtnClick }>San Diego</button>
        <button type='button' name='option' value='New Zealand' className='btn btn-dark text-white'  onClick={ this.handleBtnClick } >New Zealand</button>
        <button type='button' name='option' value='Australia' className='btn btn-dark text-white' onClick={ this.handleBtnClick } >Australia</button>
        <button type='button' name='option' value='Madagascar'className='btn btn-dark text-white'  onClick={ this.handleBtnClick }>Madagascar</button>
        <button type='button' name='option' value='Tokyo' className='btn btn-dark text-white' onClick={ this.handleBtnClick }>Tokyo</button>
         <form>
                        <div className='form-row'>
                             <div className='col'>
                                 <div className='input-group'>
                                     <input 
                                        onChange={this.handleUpdateSearch} 
                                        value = {this.props.input} 
                                        type=' text' 
                                        className='form-control' 
                                        placeholder='Enter a city' 
                                        id='input' />

                                     <span className='input-group-btn'>
                                         <button 
                                            onClick={this.handleSearchBtn} 
                                            type='button' 
                                            className='btn btn-success'>
                                            <strong>Go!</strong>
                                        </button>
                                     </span>
                                 </div>
                             </div>
                         </div>
                     </form>
       </div>
      
    );
  }
}
