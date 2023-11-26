import React, {useState} from "react";
import './QuizAnswer.css'

function QuizAnswer({ question, index, handleAnswers }) {
  const [answers, setAnswers] = useState();
  
  const updateAnswers = (e) => {
    setAnswers(e?.is_true)
    handleAnswers(e?.is_true)
  }

  return (
    <>
      {question?.answers?.map((item) => (
        
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name={index}
            id="flexRadioDefault1"
            onChange={() =>updateAnswers(item) }
          />
          <span>{item?.text}</span>
        </div>
      ))}
     
   {/* displays feedback changes based on button answer selected */}
   
    {<h5 className="feedback"> { answers ? question.feedback_true : question.feedback_false}</h5>}
    </>
  );
}

export default QuizAnswer;
