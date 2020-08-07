import React, { Component } from "react";
import "./App.css";
import DataDashboard from "./containers/DataDashboard/DataDashboard";
import { BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
          <DataDashboard />
        </div>
      </Router>
    );
  }
}

export default App;
