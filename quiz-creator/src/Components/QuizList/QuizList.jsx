import React from 'react';
const QuizList = ({ quizzes, onEdit }) => {
  return (
    <div>
      <h1 className='text-center'>Quiz List</h1>
      <ul>
        {quizzes.map((quiz) => (
          <li key={quiz.id}>
            {quiz.title} -{' '}
            <button className="btn btn-primary" onClick={() => onEdit(quiz.id)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default QuizList
