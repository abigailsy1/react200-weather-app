import { connect } from 'react-redux';
import History from './History';

function mapStoreToProps(store) {
  return {
    historyItems: store.search.historyItems
  };
}

export default connect(mapStoreToProps)(History);