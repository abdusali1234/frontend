// Import modules
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Toilet from "./routes/toilet/Toilet";
import Test from "./routes/test/Test";
import Library from "./routes/library/Library";
import Classroom from "./routes/classroom/Classroom";
import Corridor from "./routes/corridor/Corridor";
import Commonspaces from "./routes/commonspaces/Commonspaces";

import "./App.css";

// Include all the available pages in the app. This can be extended when more
// pages became available
function App() {
    return (
      <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Test />} />
          <Route path="toilet" element={<Toilet />} />
          <Route path="Library" element={<Library />} />
          <Route path="classroom" element={<Classroom />} />
          <Route path="corridor" element={<Corridor />} />
          <Route path="commonspaces" element={<Commonspaces />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
