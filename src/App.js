import React, { Component } from "react";
import Question from "./Question/Question";
import Answer from "./Answer/Answer";
import Next from "./Next/Next";
import Previous from "./previous/Previous";
import Result from "./Result/Result";
import "./App.css";
const Questions = (props) => {
  const { questions = [], current_question = 0 } = props;
  let questionss = questions.map((ques, id) => {
    return (
      <div key={id} data-hidden={id !== current_question}>
        <p className="question-no">
          {" "}
          {current_question + 1} / {questions.length}
        </p>
        <Question className="questions" question={ques.question} />
        <ol>{<Answer setAnswer={props.setAnswer} ansloop={ques.answers} />}</ol>
      </div>
    );
  });
  return <ol className="ol">{questionss}</ol>;
};
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quiz: {
        title: " ",
        questions: [
          {
            id: " ",
            question: " ",
            answers: []
          }
        ]
      },
      current_question: 0,
      selected_answer: [],
      total_score: 0
    };
  }
  componentDidMount() {
    fetch("https://api.myjson.com/bins/ddy3p")
      .then((response) => {
        return response.json();
      })
      .then((jstr) => {
        this.setState({ quiz: jstr });
      });
  }
  addtotalscore = (totalscore) => {
    this.setState({
      total_score: totalscore++
    });
  };

  nextQuestion() {
    let { current_question, quiz } = this.state;
    let new_current_questions = Math.min(
      current_question + 1,
      quiz.questions.length - 1
    );
    this.setState({
      current_question: new_current_questions
    });
  }
  previousQuestion() {
    let { current_question } = this.state;
    let new_current_questions = Math.max(current_question - 1, 0);
    this.setState({
      current_question: new_current_questions
    });
  }

  setSelectedAnswer = (answer) => {
    this.setState((prevState) => ({
      selected_answer: [...prevState.selected_answer, answer]
    }));
  };

  render() {
    return (
      <div>
        <div className="header">
          <p className="quiz-title">{this.state.quiz.title}</p>
        </div>
        <div className="app">
          <Previous onClick={() => this.previousQuestion()} />
          <div>
            <Questions
              questions={this.state.quiz.questions}
              current_question={this.state.current_question}
              setAnswer={this.setSelectedAnswer}
            />
          </div>
          <Next onClick={() => this.nextQuestion()} />
          <Result totalscores={this.addtotalscore} {...this.state} />
          <h3 className="final-output">
            Total Marks you have scored: {this.state.total_score}
          </h3>
        </div>
      </div>
    );
  }
}
export default App;
