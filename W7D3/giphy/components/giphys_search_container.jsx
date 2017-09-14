import React from 'react';
import { connect } from 'react-redux';
import GiphysSearch from './giphys_search';
import { fetchSearchGiphys } from '../actions/giphy_actions';

// export default () => {
//   return <div>Hi</div>;
// };

const mapStateToProps = state => {
  console.log(state);
  return { giphys: state.giphys };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSearchGiphys: searchTerm => dispatch(fetchSearchGiphys(searchTerm))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GiphysSearch);
