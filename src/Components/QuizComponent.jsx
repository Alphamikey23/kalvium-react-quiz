import React, { Component } from 'react';
import "./QuizComponent.css";

class QuizComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestionIndex: 0,
      selectedAnswer: '',
      questions: [
        {
          questionText: "Which is the only mammal that can jump?",
          options: ["Dog", "Elephant", "Goat", "Lion"],
          correctAnswer: "Goat",
        }
      ]
    };
  }

  handleOptionSelect = (option) => {
    this.setState({ selectedAnswer: option });
  };

  handleNextQuestion = () => {
    const { currentQuestionIndex, selectedAnswer, questions } = this.state;
    // Logic to handle next question
    if (selectedAnswer !== '') {
      // Move to the next question if an answer is selected
      if (currentQuestionIndex < questions.length - 1) {
        this.setState({
          currentQuestionIndex: currentQuestionIndex + 1,
          selectedAnswer: '',
        });
      }
    }
  };

  handlePreviousQuestion = () => {
    const { currentQuestionIndex } = this.state;
    // Logic to handle previous question
    if (currentQuestionIndex > 0) {
      this.setState({ currentQuestionIndex: currentQuestionIndex - 1 });
    }
  };

  handleQuitQuiz = () => {
    // Logic to handle quitting the quiz
    // This can include navigation or other actions
    alert('Quiz quit!');
    // Example: Navigate to a different page or reset state, etc.
  };

  render() {
    const { currentQuestionIndex, selectedAnswer, questions } = this.state;
    const currentQuestion = questions[currentQuestionIndex];

    return (
      <div className='quiz-container'>
        <h1>Question</h1>
        <div className='question'>
          <h3>{currentQuestion.questionText}</h3>
          <ul className='options'>
            {currentQuestion.options.map((option, index) => (
              <li key={index}>
                <button 
                  onClick={() => this.handleOptionSelect(option)} 
                  className={selectedAnswer === option ? 'selected' : ''}
                >
                  {option}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className='buttons'>
          <button 
            className='previous' 
            onClick={this.handlePreviousQuestion} 
            disabled={currentQuestionIndex === 0}
          >
            Previous
          </button>
          <button 
            className='next' 
            onClick={this.handleNextQuestion} 
            disabled={selectedAnswer === ''}
          >
            Next
          </button>
          <button 
            className='quit' 
            onClick={this.handleQuitQuiz}
          >
            Quit
          </button>
        </div>
      </div>
    );
  }
}

export default QuizComponent;
