import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Table from './mycomponents/mytable';
import reportWebVitals from './reportWebVitals';
// import Goal from './mycomponents/mygoal';
// import Cricket from './mycomponents/myruns';
// import Clock from './mycomponents/clock';
// import Football from './mycomponents/football';
// import Samp from './mycomponents/mytable';
import StateData from './mycomponents/apptablestate';


ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Table /> */}
    {/* <Goal isGoal = {false}/> */}
    {/* <Cricket isCricket = {false} scored={2} /> 
    <Clock/> */}
    {/* <Football/> */}
    {/* <Samp/> */}
    <StateData />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
