// ResultPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NextOSForm.css';

const ResultPage = ({ resultData }) => {
  const navigate = useNavigate();

  if (!resultData) {
    return <p>No data available. Please go back and submit the form again.</p>;
  }

  return (
    <div className="form-container">
      <h1 className="form-title">Result</h1>
      <p><strong>Recommended OS:</strong> {resultData.recommended_os}</p>
      <p><strong>Reason:</strong> {resultData.reason}</p>
      <button onClick={() => navigate('/')} className="form-submit">
        Back to Form
      </button>
    </div>
  );
};

export default ResultPage;
