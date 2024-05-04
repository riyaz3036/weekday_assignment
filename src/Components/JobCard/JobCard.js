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

        <div className="card__middle">

            <div className="card__title">
                <img />
                <div>
                    <div className="info__container">
                        <h3>FlexWash Technologies</h3>
                        <h2>Senior Engineer</h2>
                    </div>
                    <p class="card_sub_text">India | Exp: 5-5 years</p>
                </div>
            </div>

            <p className="est__salary">Estimated Salary: ₹30 - 60 LPA<span>✅</span></p>

            <div className="company__info">
                <p className="about__company__title">About Company:</p>
                <div className="company_desc">
                    <p className="about__us__title"><strong>About us</strong></p>
                    <p>
                    Flex Wash is an operating system for the car wash industry. Our solutions help owners manage their operations and grow revenue
                    Our POS has a built-in CRM, allowing car washes to take advantage of their customer transaction history in order to funnel customers
                    into subscriptions and higher margin wash packages.
                    </p>
                    <p><strong>Founder/Recruiter profiles:</strong></p>
                    <p><a href="https://www.linkedin.com/in/chirag-singh-toor-94713aa7/"><span>Chirag Singh Toor</span></a></p>
                </div>
                <p>View job</p>
            </div>
            
            <div className="skills">
                <h3>Skills</h3>
                <div>
                    <p>Typescript</p>
                    <p>Founding Engineer</p>
                    <p>Senior Engineer</p>
                </div>
                <h3>Minimum Experience</h3>
                <h2>5 years</h2>
            </div>
        </div>

        

        <div className="card__bottom">
            <div className="card__bottom__cont">
                <button>⚡ Easy Apply</button>
            </div>

        </div>
    </div>
)
}

export default JobCard;