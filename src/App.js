import React, { useState } from "react";

import Map from "./component/Map";

function App() {
  

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div style={{ width: "100%", height: "100%" }}>
        <Map  />
      </div>
      <div >
        
      </div>
    </div>
  );
}

export default App;