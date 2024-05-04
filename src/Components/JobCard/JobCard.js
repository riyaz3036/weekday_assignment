import React from 'react';
import './job-card.css';


const JobCard = () => {
    return (
        
        <div className="card__main">

            <span></span>

            <div className="card__top">
                <div className="card__top__cont">
                    <p>⏳ Posted 5 days ago</p>
                </div>
            </div>

            <div className="card__middle"></div>

            <div className="card__bottom">
                <div className="card__bottom__cont">
                    <button>⚡ Easy Apply</button>
                </div>

            </div>

        </div>
        
    )
}


export default JobCard;