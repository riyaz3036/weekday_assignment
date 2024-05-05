import React from 'react';
import './App.css';
import JobCard from './Components/JobCard/JobCard';


function App() {
  return (
    <div className="App">

        <div className="filters">

            <div className="filter__element">
                <p className="filter__title">Roles</p>
                <div className="element__top">
                    <div className="element__top__left">
                        <div className="selected__tag">
                            <p className="tag__text">Selected</p>
                            <div className="tag__cross"><i class="ri-close-line"></i></div>
                        </div>
                        <div className="search__box">Roles</div>
                    </div>

                    <div className="element__top__right">
                        <div className="cross__all"><i class="ri-close-line"></i></div>
                        <span className="partition"></span>
                        <div className="dropdown__arrow"><i class="ri-arrow-drop-down-line"></i></div>
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
