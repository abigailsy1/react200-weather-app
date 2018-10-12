const defaultState = {
    input: '',
    city: '',
    historyItems: []
  };
  
  export default function SearchBarReducer(state = defaultState, action) {
    const { type, payload } = action;
    switch (type) {
      case 'SEARCH_INPUT': {
        return Object.assign({}, state, { input: payload.input });
      }
      case 'GET_WEATHER_PENDING':
        return state;
  
      case 'GET_WEATHER_FULFILLED': {
        const historyItem = {
          name: action.payload.data.name,
          time: new Date()
        };
        const historyList = [...state.historyItems];
        historyList.unshift(historyItem);
        return {
          ...state,
          city: action.payload.data,
          historyItems: historyList
        };
      }
      case 'GET_WEATHER_REJECTED':
        return state;
  
      default:
        return state;
  
    }
  }