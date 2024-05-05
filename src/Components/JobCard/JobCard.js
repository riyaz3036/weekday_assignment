import React from 'react';
import './job-card.css';
import company_logo from '../../assets/company_logo.jpg'


const JobCard = () => {
return (
    <div className="card__main">
        <span className="empty_space"></span>

        <div className="card__top">
            <div className="card__top__cont">
                <p>⏳ Posted 5 days ago</p>
            </div>
        </div>

        <div className="card__middle">

            <div className="card__title">
                <img src={company_logo} />
                <div className="card__title__right">
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
                    <p className="about__us__title">About us</p>
                    <p className="company__desc__cont">
                    Flex Wash is an operating system for the car wash industry. Our solutions help owners manage their operations and grow revenue
                    Our POS has a built-in CRM, allowing car washes to take advantage of their customer transaction history in order to funnel customers
                    into subscriptions and higher margin wash packages.
                    </p>
                    <p className="founder">Founder/Recruiter profiles:</p>
                    <p className="founder__link">Chirag Singh Toor</p>
                </div>

                <p className="about__role__title">About Role:</p>
                <div>
                    <p className="about__us__title">Overview</p>
                    <p className="role__desc__cont">Company Name: <strong>Narrative (yc w23)</strong> | HQ Location: San Fransisco | Website | linkedin</p>
                </div>
                <div className="view__job"><p>View job</p></div>
            </div>
            
            <div className="skills">
                <h3 className="skills__title">Skills</h3>
                <div className="skills__cont">
                    <p>Typescript</p>
                    <p>Founding Engineer</p>
                    <p>Senior Engineer</p>
                </div>
                <h3 className="min__exp">Minimum Experience</h3>
                <h2>5 years</h2>
            </div>

        </div>



        <div className="card__bottom">
            <div className="card__bottom__cont">
                <button>⚡ Easy Apply</button>
            </div>
            <div className="card__bottom__askref">
                <button>
                    <img src={company_logo}/>
                    <img src={company_logo}/>
                    Unblock referral asks
                </button>
            </div>

        </div>
    </div>
)
}

export default JobCard;