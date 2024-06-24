import React, { Component } from 'react';
import "./Result.css";

class ResultComponent extends Component {
  render() {
    return (
      <>
        <h2 className='result-header'>Result</h2>
        <div className='result-content'>
          <h3>You should practice more!</h3>
          <h1>Your performance: 20%</h1>
          <div className='result-stats'>
            <p>Total questions: 10</p>
            <p>Attempted questions: 9</p>
            <p>Correct answers: 3</p>
            <p>Wrong answers: 6</p>
          </div>
        </div>
        <div className='result-buttons'>
          <button className='play-again-btn'>Play Again</button>
          <button className='home-btn'>Back to Home</button>
        </div>
      </>
    );
  }
}

export default ResultComponent;
