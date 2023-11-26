import React, {useState} from "react";

const QuizQuestion = ({question, index}) => {
  const [questions, setQuestions] = useState(question?.text || "");

  return (
    <div>
      <input
        type="text"
        value={questions}
        onChange={(e) => setQuestions(e.target.value)}
      />
    </div>
  );
};
export default QuizQuestion;
