import React, { useState } from 'react';

const ReviewComponent = ({ onSubmit }) => {
  const [comment, setComment] = useState('');

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = () => {
    // Check if the comment is not empty before submitting
    if (comment.trim() !== '') {
      onSubmit(comment);
      // Clear the comment input after submitting
      setComment('');
    }
  };

  return (
    <div className="mb-4">
      <h2 className="text-xl font-bold mb-2">Write a Review</h2>
      <textarea
        className="w-96 h-40 p-2 border rounded"
        placeholder="Enter your comments here..."
        value={comment}
        onChange={handleCommentChange}
      ></textarea>
      <button className="mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-700" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default ReviewComponent;
