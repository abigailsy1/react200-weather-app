import axios from 'axios';

export function updateCity(city) {
    console.log('inside of action', city);
    return {
        type: 'UPDATE_CITY',
        payload: city 
    };
}

export function axiosCall(city) {
    let weatherAPI = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e0fbbd5dbef81aad943aad2e8595f6dc`
    return {
        type: 'AXIOS_CALL',
        payload: axios
            .get(weatherAPI)
            .then(response => {
                console.log('response' , response.data);
              return response.data
            })
            .catch(err => {
                console.log(err)
                return err
            })
    };

}