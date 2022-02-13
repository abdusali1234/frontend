import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Toilet from "./routes/toilet/Toilet";
import Test from "./routes/test/Test";
import ID1 from "./routes/ID1/ID1";
import Library from "./routes/library/Library";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Test />} />
          <Route path="toilet" element={<Toilet />} />
          <Route path="Id_1" element={<ID1 />} />
          <Route path="Library" element={<Library />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
