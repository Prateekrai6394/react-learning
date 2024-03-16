import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TodoHomePage from './pages/TodoHomePage'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />  
        <Route path="/todo" element={<TodoHomePage />} />  
      </Routes>
    </BrowserRouter>
  );
}

export default App;
