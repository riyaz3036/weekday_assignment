import React from 'react';
import './App.css';
import JobCard from './Components/JobCard/JobCard';


function App() {
  return (
    <div className="App">

        <div className="filters">

            <div className="filter__element">
                <p>Roles</p>
                <div className="element__top">
                    <div className="element__top__left">
                        <div className="selected__tag">
                            <p>Selected</p>
                            <div><p>x</p></div>
                        </div>
                        <div className="search__box">Roles</div>
                    </div>

                    <div className="element__top__right">
                        <div className="cross__all"><p>x</p></div>
                        <span className="partition"></span>
                        <div className="dropdown__arrow">&gt;</div>
                    </div>                 
                </div>

                <div className="element__bottom">

                </div>
            </div>
        </div>

        <div className="jobs">
            <div className="jobcard__element"><JobCard /></div>
            <div className="jobcard__element"><JobCard /></div>
            <div className="jobcard__element"><JobCard /></div>
            <div className="jobcard__element"><JobCard /></div>
            <div className="jobcard__element"><JobCard /></div>
            <div className="jobcard__element"><JobCard /></div>
            <div className="jobcard__element"><JobCard /></div>             
        </div>

    </div>
  );
}

export default App;
