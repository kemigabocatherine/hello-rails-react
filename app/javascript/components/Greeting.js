import React from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

const GET_GREETINGS_REQUEST ='GET_GREETINGS_REQUEST';
const GET_GREETINGS_SUCCESS ='GET_GREETINGS_SUCCESS;'

function getGreetings() {
  return (dispatch) => {
    dispatch({ type: GET_GREETINGS_REQUEST });
    return fetch(`v1/greetings.json`)
      .then(response => response.json())
      .then(json => dispatch(getGreetingsSuccess(json)))
      .catch(error => console.log(error));
  };
};

export function getGreetingsSuccess(json) {
  return{
    type: GET_GREETINGS_SUCCESS,
    json,
  };
};

class Greeting extends React.Component {
  render () {
    const { greetings } = this.props;

    return (
      <React.Fragment>
        <h3>{this.props.greeting}</h3>
        <button onClick={() => this.props.getGreetings()}>getGreetings</button>
      </React.Fragment>
    );
  }
}

const structuredSelector = createStructuredSelector({
  greetings: state => state.greetings
});

const mapDispatchToProps = { getGreetings };

Greeting.propTypes = {
  greeting: PropTypes.string,
};

export default connect(structuredSelector, mapDispatchToProps
)(Greeting);
