import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Toilet from "./routes/toilet/Toilet";
import Test from "./routes/test/Test";
import ID1 from "./routes/ID1/ID1";
import Library from "./routes/library/Library";
import Corridor from "./routes/Corridor/Corridor";
import Commonspaces from "./routes/commonspaces/commonspaces";
import Classroom from "./routes/Classroom/Classroom";

import "./App.css";

function App() {
    return (
      <div>
      <BrowserRouter>
        <Routes>ß
          <Route exact path="/" element={<Test />} />
          <Route path="toilet" element={<Toilet />} />
          <Route path="Id_1" element={<ID1 />} />
          <Route path="Library" element={<Library />} />
          <Route path="Corridor" element={<Corridor />} />
          <Route path="Commonspaces" element={<Commonspaces />} />
          <Route path="Classroom" element={<Classroom />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
