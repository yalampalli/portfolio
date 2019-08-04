import React from "react";
import "./App.scss";
import me from "./me.jpg";

class App extends React.Component {
  render() {
    return (
      <div className="AppContainer">
        <div className="headerContainer">
          <div className="name">
            <span className="avatar-text">Yeshwanth Alampalli</span>
          </div>
        </div>
        <div className="content-container">
          
        </div>
        <div className="footer">
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
        </div>
      </div>
    );
  }
}

export default App;
