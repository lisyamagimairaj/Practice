import React, { useState } from "react";
import "./App.css";
import Home from "./Pages/Home";
import StudentDetailPage from "./Pages/StudentDetailPage";
import Category from "./Pages/Category";
import Contact from "./Pages/Contact";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components.ts/NavBar";
import Infrastructure from "./Pages/Infrastructure";

function App() {
  return (
    <div className="min-h-screen bg-gray-100" >
      <main className="container mx-auto">
        <NavBar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/StudentDetailPage" element={<StudentDetailPage />} />
            <Route path="/Category" element={<Category />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Infrastructure" element={<Infrastructure />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
