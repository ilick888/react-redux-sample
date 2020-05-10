import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { postEvent } from '../actions';
import { Link } from 'react-router-dom';

class EventsNew extends Component{

  render(){
    return (
      <React.Fragment>
        <Link to="/events/new">NEW EVENTS</Link>
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = dispatch =>({
  //readEvents: () => dispatch(postEvent()),
})

export default connect(null, mapDispatchToProps)(EventsNew)

