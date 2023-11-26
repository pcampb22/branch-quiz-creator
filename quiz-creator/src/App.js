import React, {useState} from "react";
import QuizList from "./Components/QuizList/QuizList";
import QuizForm from "./Components/QuizForm/QuizForm";
import data from "./data/data";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";

const App = () => {
  const [quizzes, setQuizzes] = useState(data);
  const [selectedQuizId, setSelectedQuizId] = useState(null);
  
  const handleEdit = (id) => {
    setSelectedQuizId(id);
  };

  const handleAdd = () => {
    setSelectedQuizId(null);
  };

  const handleSave = (updatedQuiz) => {
    // Updates or adds the quiz in the list
    const updatedQuizzes = selectedQuizId
      ? quizzes.map((quiz) => (quiz.id === selectedQuizId ? updatedQuiz : quiz))
      : [...quizzes, {...updatedQuiz, id: Date.now()}];
    setQuizzes(updatedQuizzes);
    
    
    setSelectedQuizId(null);
    
  };
  const selectedQuiz = selectedQuizId
    ? quizzes.find((quiz) => quiz.id === selectedQuizId)
    : null;
  return (
    <div>
      <Navbar />

      <div class="intro shadow-2-strong">
        <div class="mask d-flex align-items-center h-100">
          <div class="container">
            <div class="row justify-content-center ">
              <div class="col-xl-5 col-md-8 bg-white  rounded-5 shadow-5-strong p-5">
                <div class="form-outline mb-4">
                  <QuizList quizzes={quizzes} onEdit={handleEdit} />
                </div>
                {selectedQuiz && (
                  <QuizForm quiz={selectedQuiz} onSave={handleSave} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
