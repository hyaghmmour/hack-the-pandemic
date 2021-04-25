import logo from './logo.svg';
import './App.css';
import Plot from 'react-plotly.js';
import LineChart from "./LineChart";
import React from 'react';
import Navbar from './Navbar'


class App extends React.Component {
  render() {
    return (
      <div>
        {/* <Navbar /> */}
       <LineChart />
      </div>
    )
  }
}

export default App;
