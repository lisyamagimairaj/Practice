import React, { useState } from "react";
import "./App.css";
import Home from "./Pages/Home";
import StudentDetailPage from "./Pages/StudentDetailPage";
import Works from "./Pages/Works";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components.ts/NavBar";

function App() {
  return (
    <div className="min-h-screen bg-gray-100" style={{textAlign:"center"}}>
      <main className="container mx-auto">
        <NavBar />
        <div>
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/StudentDetailPage" element={<StudentDetailPage />} />
            <Route path="/Works" element={<Works />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
