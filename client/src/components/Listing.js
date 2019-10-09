import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getListings } from '../actions/listingAction';
import ReactJson from 'react-json-view'

class Listing extends Component {

  componentDidMount() {
    this.props.getListings();
  }

  render() {    
    return (
      <React.Fragment>          
          <ReactJson src={this.props.item.items.data} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  item: state.item,
});

export default connect(
  mapStateToProps,
  { getListings }
)(Listing);
