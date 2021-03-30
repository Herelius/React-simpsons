import React from "react";
import "./App.css";
import Avatar from "./components/Avatar";

function App() {
  return (
    <div className="App">
      <Avatar
        avatar="https://lh4.googleusercontent.com/1kVLkS84bTu4yZ_rVJiz5pIsEQd1L5eifgej_T9xITFag45FqLFeQ5N8QYT3ckewYa840EwlN_kDksSTpjFBWLdRq7aoDX4xHysKXxVfXSV7SHu7S2necobXhfmt_kLco79_a6ceDR4"
        firstName="Bart"
        lastName="Simpson"
      />
      <Avatar
        avatar="https://lh3.googleusercontent.com/efB3kpEQFgbGpXNeamF8TR9Ig-4AK-AhK_kgopGD87kfpKnerNW2HTxOLvjFS5XzY-CLimQolNOp7xeYhzK48owFJMeKxqQFnLYfLGw"
        firstName="Homer"
        lastName="Simpson"
      />
      <Avatar firstName="Lisa" lastName="Simpson" star />
    </div>
  );
}

export default App;
