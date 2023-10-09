import React, { createRef, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Task from './components/Task';
import PopUp from './components/PopUp';
import 'bootstrap/dist/css/bootstrap.css';
import '../src/css/style.css';
import MacbookAir from './components/login/Login';
import Signup from './components/login/Signup';

const App = () => {
  const [showPopUp, setShowPopUp] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [chill, setChill] = useState(true);

  const handleButtonClick = () => {
    setShowPopUp(true);
  };

  const handleSubmit = (input1, input2) => {
    const newTask = {
      input1: input1,
      input2: input2
    };
    setTasks([...tasks, newTask]);
    setShowPopUp(false);
    setChill(false);
  };

  return (
    <Routes>
      <Route path='/' element={<MacbookAir />} />
      <Route path='signup' element={<Signup />} />
      <Route
        path="signup/TodoApp"
        element={
          <div className={`${showPopUp ? "vanish" : ""}`}>
            <div className="app-div-1">
              <Header />
              <div className="app-div-1">
                {!chill && (
                  <div className="headings">
                    <h3>Task</h3>
                    <h3>Due on</h3>
                  </div>
                )}
                {chill ? (
                  <h3>CHILL BRO, YOU'VE GOT FREE TIME</h3>
                ) : (
                  tasks.map((task, index) => (
                    <Task key={index} input1={task.input1} input2={task.input2} />
                  ))
                )}
              </div>
            </div>
            <div className={`${showPopUp ? "vanish-button" : ""}`}>
              <button className="btn-for-popup" onClick={handleButtonClick}>
                Add a new task
              </button>
            </div>
            {showPopUp && (
              <PopUp onClose={() => setShowPopUp(false)} onSubmit={handleSubmit} />
            )}
          </div>
        }
      />
    </Routes>
  );
};

export default App;
