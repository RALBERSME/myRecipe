import { useState } from "react";
import "./App.css";

import Start from "./components/Start";
import Kitchen from "./components/Kitchen";

function App() {
  const [showStartPage, setShowStartPage] = useState(true);
  const leaveStartPage = (item) => {
    setShowStartPage(item);
  };

  return (
    <>
      <div className="background">
        <div className="container">
          {showStartPage && <Start statusShowStartPage={leaveStartPage} />}
          {!showStartPage && <Kitchen />}
        </div>
      </div>
    </>
  );
}

export default App;
