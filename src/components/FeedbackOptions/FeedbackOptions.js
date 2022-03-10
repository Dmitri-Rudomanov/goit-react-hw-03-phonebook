import React from "react";
import PropTypes from 'prop-types';
import shortid from 'shortid';

const FeedbackOptions =({options,onLeaveFeedback})=>{
    return(
      <div>
      {options.map(option=><button key={shortid.generate()} type='button' name={option} onClick={onLeaveFeedback}>{option}</button>)}
    </div>
    )
  }
  FeedbackOptions.propTypes={
    options:PropTypes.array,
    onLeaveFeedback:PropTypes.func,
  }
  export default FeedbackOptions
  