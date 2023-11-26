import React, {useState} from "react";
import QuizAnswer from "../QuizAnswer/QuizAnswer";
import QuizQuestion from "../QuizQuestion/QuizQuestion";

const QuizForm = ({quiz, onSave}) => {
  const [title, setTitle] = useState(quiz?.title || "");
  const [description, setDescription] = useState(quiz?.description || "");
  const [videoUrl, setVideoUrl] = useState(quiz?.url || "");
  const [questions, setQuestions] = useState([]); //sets questions for handleSave
  const [answers, setAnswers] = useState([]); //sets answers for handleSave

  const handleSave = () => {
    onSave({
      title,
      description,
      url: videoUrl,
      id: quiz.id,
      answers: answers,
      text: questions,
    });
  };

  console.log(quiz, "quiz in QuizForm")
  const handleAnswers = (item) => {
    setAnswers([...answers, item]) 
    console.log(item, "item in handleAnswers")
  }
  const handleQuestions = (item) => {
    setQuestions([...questions, item])
    console.log(item, "item in handleQuestions")
  }


  return (
    <div>
      <h2>{quiz.id ? "Edit Quiz" : "Create New Quiz"}</h2>
      <div class="form-outline mb-4">
        <div class="row mb-4">
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <label>Video Url:</label>
          <input
            type="text"
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
          />
        </div>
        <div class="row mb-4">
          <label>Questions:</label>
          {quiz.questions_answers?.map((question, index) => (
            <div>
              <QuizQuestion question={question} index={index} handleQuestions={handleQuestions}/>
              <label>Answers:</label>
              <QuizAnswer question={question} index={index} handleAnswers={handleAnswers}/>
            </div>
          ))}
        </div>

        <button className="btn btn-primary" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};

export default QuizForm;
