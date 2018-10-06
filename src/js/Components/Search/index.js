import { connect } from 'react-redux';
import Search from './Search';

function mapStoreToProps(store) {
    return {
        cities: store.searchReducer.cities,
        history: store.searchReducer.history
    };
}

export default connect(mapStoreToProps)(Search);