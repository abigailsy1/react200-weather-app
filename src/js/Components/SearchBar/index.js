import { connect } from 'react-redux';
import SearchBar from './SearchBar';

function mapStoreToProps(store) {
  return {
    input: store.search.input,
    city: store.search.city,
  };
}

export default connect(mapStoreToProps)(SearchBar);