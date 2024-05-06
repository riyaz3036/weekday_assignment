import React from 'react';
import './job-card.css';
import user1 from '../../assets/user1.jpg';
import user2 from '../../assets/user2.jpg';





const JobCard = ({selectedRoles,selectedTech,selectedLoc,selectedPay,selectedExp,searchName,job}) => {
  
  //Tech Stack Not specified in the API...SO, Assuming some skills
  let techStack = [];

  if(job.jobRole==="frontend") techStack = ["Typescript","Javascript","NodeJS","React"];
  else if(job.jobRole==="ios") techStack = ["C#","AWS","Javascript","Rust"];
  else if(job.jobRole==="android") techStack = ["Java","Kotlin"];
  else if(job.jobRole==="tech lead") techStack = ["Python","Typescript","AWS","NodeJS","React"];
  else if(job.jobRole==="backend") techStack = ["C++","Django","Flask","AWS","NodeJS"];


return (
    
       
       ( (!selectedRoles.length) || (selectedRoles.length && selectedRoles.some(role => role.toLowerCase() === job.jobRole.toLowerCase()))) &&
       ( (!selectedTech.length) || (selectedTech.length && selectedTech.some(tech => techStack.includes(tech)))) &&
       ( (!selectedLoc.length) || (selectedLoc.length && (selectedLoc.some(loc => loc.toLowerCase() === job.location.toLowerCase())))) &&
       ( (!selectedPay.length) || (selectedPay.length && ((job.minJdSalary===null || parseInt(selectedPay) <= job.minJdSalary) && (job.maxJdSalary===null || parseInt(selectedPay) <= job.maxJdSalary)))) &&
       ( (!selectedExp.length) || (selectedExp.length && (!job.minExp || parseInt(selectedExp) >= job.minExp))) &&
       ( (!searchName.length) || (searchName.length && job.companyName.toLowerCase().includes(searchName.toLowerCase())))?
      
    
    <div className="card__main">
        <span className="empty_space"></span>

        <div className="card__top">
            <div className="card__top__cont">
                <p>⏳ Posted {Math.floor(Math.random() * 10) + 1} days ago</p>
            </div>
        </div>

        <div className="card__middle">

            <div className="card__title">
                <img src={job.logoUrl} />
                <div className="card__title__right">
                    <div className="info__container">
                        <h3>{job.companyName}</h3>
                        <h2>{job.jobRole.charAt(0).toUpperCase() + job.jobRole.slice(1)}</h2>
                    </div>

                    {
                        !job.minExp && job.maxExp &&(
                            <p class="card_sub_text">{job.location.charAt(0).toUpperCase() + job.location.slice(1)} | Exp: Upto {job.minExp} years</p>
                        )
                    }
                    { 
                        job.minExp && !job.maxExp &&(
                            <p class="card_sub_text">{job.location.charAt(0).toUpperCase() + job.location.slice(1)} | Exp: Atleast {job.minExp} years</p>
                        )
                    }
                    {
                        !job.minExp && !job.maxExp && (
                            <p class="card_sub_text">{job.location.charAt(0).toUpperCase() + job.location.slice(1)} </p>
                        )
                    }
                    {
                        job.minExp && job.maxExp &&(
                            <p class="card_sub_text">{job.location.charAt(0).toUpperCase() + job.location.slice(1)} {job.minExp && job.maxExp?`| Exp: ${job.minExp}-${job.maxExp} years`:""}</p>
                        )
                    }
    
                </div>
            </div>
            {
                !job.minJdSalary && job.maxJdSalary &&(
                    <p className="est__salary">Estimated Salary: Upto {job.salaryCurrencyCode==="USD"?"$":"₹"}{job.maxJdSalary} {job.salaryCurrencyCode} PA<span>✅</span></p>
                )
            }
            { 
                job.minJdSalary && !job.maxJdSalary &&(
                    <p className="est__salary">Estimated Salary: Atleast {job.salaryCurrencyCode==="USD"?"$":"₹"}{job.minJdSalary} {job.salaryCurrencyCode} PA<span>✅</span></p>
                )
            }
            {
                !job.minJdSalary && !job.maxJdSalary && (
                    <p className="est__salary">Estimated Salary: Not Specified</p>
                )
            }
            {
                job.minJdSalary && job.maxJdSalary &&(
                    <p className="est__salary">Estimated Salary: {job.salaryCurrencyCode==="USD"?"$":"₹"}{job.minJdSalary} - {job.maxJdSalary} {job.salaryCurrencyCode} PA<span>✅</span></p>
                )
            }
            

            <div className="company__info">
                <p className="about__company__title">About Company:</p>
                <div className="company_desc">
                    <p className="about__us__title">About us</p>
                    <p className="company__desc__cont">
                    {job.jobDetailsFromCompany}
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
                    {
                        techStack.map((skill,index)=>(
                            <p key={index}>{skill}</p>
                        ))
                    }
                </div>
                <h3 className="min__exp">Minimum Experience</h3>
                <h2>{job.minExp?`${job.minExp} years`:"Not Specified"}</h2>
            </div>

        </div>



        <div className="card__bottom">
            <div className="card__bottom__cont">
                <button>⚡ Easy Apply</button>
            </div>
            <div className="card__bottom__askref">
                <button>
                    <img src={user1}/>
                    <img src={user2}/>
                    Unblock referral asks
                </button>
            </div>

        </div>
    </div>
     : null

    
)
}

export default JobCard;