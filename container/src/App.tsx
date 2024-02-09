import React from "react";
import App1 from "microfrontend1/app";

function App(): React.JSX.Element {
  return (
    <div>
      <h1>App</h1>
      <App1 />
    </div>
  );
}

export default App;
