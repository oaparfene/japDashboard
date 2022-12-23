import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import PED_Cell from "./pages/PED_Cell";
import PED_Task from "./pages/PED_Task";
import NoPage from "./pages/NoPage";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="ped_cells" element={<PED_Cell />} />
          <Route path="ped_tasks" element={<PED_Task />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
