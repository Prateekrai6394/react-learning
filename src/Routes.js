import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} /> 
      {/* or  <Route path="/" Component={HomePage} />  */}
        {/* <Route path="/new-page" element={<NewPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
