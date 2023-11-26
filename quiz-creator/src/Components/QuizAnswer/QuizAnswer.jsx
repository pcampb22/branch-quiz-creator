import React, {useState} from "react";

function QuizAnswer({ question, index, handleAnswers }) {
  const [answers, setAnswers] = useState();
  
  const updateAnswers = (e) => {
    setAnswers(e?.is_true)
    console.log(e?.is_true, "is true")
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
            onClick={() =>updateAnswers(item) }
          />
          <span>{item?.text}</span>
        </div>
      ))}
      {answers ? question.feedback_true : question.feedback_false}
    </>
  );
}

export default QuizAnswer;
