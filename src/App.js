import React from "react";

function App() {
  console.log(process.env.NODE_ENV);
  return <div>{process.env.REACT_APP_URL}</div>;
}

export default App;
