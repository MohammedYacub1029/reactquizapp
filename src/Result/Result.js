import React from "react";
import "../App.css";
const Result = props => {
 

  const validateAnswer = () => {
    const question = props.quiz.questions;
    let totalscore = 0;
    // const correctAnswer = question.answers.filter(x => x.is_right === 1);
if (props.selected_answer.length !== question.length) {
      alert("Please answer all Questions");
    } else {
      for (var i = 0; i < question.length; i++) {
        for (var j = 0; j < question[i].answers.length; j++) {
          if (
            question[i].answers[j].is_right === 1 &&
            question[i].answers[j].value === props.selected_answer[i]
          ) {
            totalscore++;
          }
        }
      }
    }
    props.totalscores(totalscore);
  
   
  };

  return (
    <div>
      <button className="submitBtn" onClick={()=>validateAnswer()}>
        Submit
      </button>
    
    </div>
  );
};

   
export default Result;