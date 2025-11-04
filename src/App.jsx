import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";

function App() {
  const [user, setUser] = useState(""); 
  const [score, setscore] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
       
        <Route path="/" element={<Home user={user} setUser={setUser} />} />
        <Route path="/home" element={<Home user={user} setUser={setUser} />} />
        <Route path="/quiz" element={<Quiz setscore={setscore} user={user} />} />
        <Route path="/result" element={<Result user={user}  score={score} />} />

       
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

