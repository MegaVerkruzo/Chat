import './App.css';
import Navbar from "./components/Navbar";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import React from "react";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <AppRouter />
    </BrowserRouter>
  );
}

export default App;
