// App.js
import React, { useState } from "react";
import Timetable from './comp/Timetable';
import data from './data.json'; // Assuming your data.json is in the same folder

import "./style.css";
import "./css/ico.css";
import Nav from "./comp/Nav";
function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="main">
        <Nav />

        <div className={`view ${isOpen ? "open" : ""}`} onClick={handleClick}>
          <div className={`viewarea ${isOpen ? "open" : ""}`}>
            {/* Display "See Timetable" if the component is not open */}
            {!isOpen && <span>See Timetable</span>}

            {/* Conditionally render the TimetableComponent if open */}
            {isOpen && <Timetable data={data} />}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;




