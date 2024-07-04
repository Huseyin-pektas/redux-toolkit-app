import React from "react";

import LoginComponent from "./components/loginComponent";
import ProfileComponent from "./components/ProfileComponent";
import ThemeComponent from "./components/ThemeComponent";

function App() {
  return (
    <div >
      <LoginComponent/>
      <hr/>
      <ProfileComponent/>
      <hr/>
      <ThemeComponent/>
    </div>
  );
}

export default App;
