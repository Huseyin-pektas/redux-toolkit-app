import React from "react";

import LoginComponent from "./components/loginComponent";
import ProfileComponent from "./components/ProfileComponent";
import ThemeComponent from "./components/ThemeComponent";
import CounterComponent from "./components/CounterComponent";
import TodoComponnent from "./components/todo/TodoComponnent";

function App() {
  return (
    <div >
      <LoginComponent/>
      <hr/>
      <ProfileComponent/>
      <hr/>
      <ThemeComponent/>
      <hr/>
      <CounterComponent/>
      <hr/>
      <TodoComponnent/>
    </div>
  );
}

export default App;
