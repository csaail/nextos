// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NextOSForm from './NextOSForm';
import ResultPage from './ResultPage';

const App = () => {
  const [resultData, setResultData] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<NextOSForm setResultData={setResultData} />} />
        <Route path="/result" element={<ResultPage resultData={resultData} />} />
      </Routes>
    </Router>
  );
};

export default App;
