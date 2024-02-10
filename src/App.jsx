// App.jsx
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { NotFound } from "./pages/NotFound/NotFound";
import { Footer } from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import { DarkModeProvider } from "./components/Header/DarkModeContext";


function App() {
  return (
    <DarkModeProvider>
      <div className="wrapper">
        <Sidebar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </div>
        <Header />
        <Footer />
      </div>
    </DarkModeProvider>
  );
}

export default App;
