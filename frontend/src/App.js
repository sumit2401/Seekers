// App.js
import React from "react";
import Navbar from "./Components/Navigation bar/Navbar";
import Filtermenu from "./Components/LeftSection/Filtermenu";
import Jobdes from "./Components/MainSection/Jobdes";
import { JobProvider } from "./JobContext";

function App() {
  return (
    <JobProvider>
      <Navbar />
      <div className="flex gap-52">
        <Filtermenu />
        <Jobdes />
      </div>
    </JobProvider>
  );
}

export default App;
