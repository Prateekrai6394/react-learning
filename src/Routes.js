import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NewPage from './NewPage'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/new-page" element={<NewPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
