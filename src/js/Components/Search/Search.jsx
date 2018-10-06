import React from 'react'

import {axiosCall,updateCity} from './searchAction';

export default class Search extends React.Component {
    constructor(props) {
        super(props);

        this.handleSearchCities = this.handleSearchCities.bind(this);
        this.handleCitiesData = this.handleCitiesData.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleSearchCities(event) {
        const { dispatch } = this.props;
        const { value } = event.target;
        console.log('dispatch', dispatch);
        console.log('props' , this.props);
        dispatch(updateCity(value));
    }

    handleCitiesData() {
        const { city, dispatch } = this.props;
        console.log('inside handleCitiesData', city);
        dispatch(axiosCall(city));
    }

    handleClick(event) {
        const { dispatch } = this.props;
        const { value } = event.target;
        dispatch(axiosCall(value));
    }

    render() {

        return (
            <div>
                <div className='btn-group'>
                    <button type='button' className='btn btn-primary' value='San Diego' onClick={this.handleClick}>San Diego</button>
                    <button type='button' className='btn btn-primary' value='New York' onClick={this.handleClick}>New York</button>
                    <button type='button' className='btn btn-primary' value='Seattle' onClick={this.handleClick}>Seattle</button>
                    <button type='button' className='btn btn-primary' value='London' onClick={this.handleClick}>London</button>
                    <button type='button' className='btn btn-primary' value='Tokyo' onClick={this.handleClick}>Tokyo</button>
                </div>
                <div className='row'>
                    <div className='col-12 col-md-12'>
                        <input type='text'className='form-control' placeholder='Enter a City' onChange={this.handleSearchCities}/>
                    </div>
                    <div className='input-group-append'>
                        <button className='btn btn-outline-secondary' type='submit' onClick={this.handleCitiesData}>Go!</button>
                    </div>
                </div>
            </div>
        );
    }
}