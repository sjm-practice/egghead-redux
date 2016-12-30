import React, {
  Component,
} from "react";

class TodoApp extends Component {
  render() {
    return (
      <div>
        <button onClick={() => { console.log("clicked."); }}>Click me.</button>
      </div>
    );
  }
}

export default TodoApp;
