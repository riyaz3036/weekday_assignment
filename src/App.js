import React from 'react';
import './App.css';
import JobCard from './Components/JobCard/JobCard';

function App() {
  return (
    <div className="App">

        <div className="filters"></div>

        <div className="jobs">
            <JobCard />
        </div>

    </div>
  );
}

export default App;
