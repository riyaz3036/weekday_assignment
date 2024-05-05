import React,{useState} from 'react';
import './App.css';
import JobCard from './Components/JobCard/JobCard';
import SelectedTag from './Components/SelectedTag/SelectedTag.js';


const roles_list = [
  {
    category: "ENGINEERING",
    roles: [
      "Backend", "Frontend", "Fullstack", "IOS", "Flutter", "React Native",
      "Android", "Tech Lead", "Dev-Ops", "Data Engineer", "Data Science",
      "Computer-Vision", "Nip", "Deep-Learning", "Test / Qa", "Web3", "Sre",
      "Data-Infrastructure"
    ]
  },
  {
    category: "DESIGN",
    roles: [
      "Designer","Design Manager","Graphic Designer","Product Designer",
    ]
  },
  {
    category: "PRODUCT",
    roles: [
      "Product Manager"
    ]
  },
  {
    category: "OPERATIONS",
    roles: [
     "Operations Manager","Founder's Office/Chief Of Staff"
    ]
  },
  {
    category: "SALES",
    roles: [
     "Sales Development Representative","Account Executive","Account Manger"
    ]
  },
  {
    category: "MARKETING",
    roles: [
     "Digital Marketing Manager","Growth Hacker","Marketing","Product Marketing Manager"
    ]
  },
  {
    category: "OTHER ENGINEERING",
    roles: [
      "Hardware","Mechanical","Systems"
    ]
  },
  {
    category: "BUISINESS ANALYST",
    roles: [
      "Buisness Analyst"
    ]
  },
  {
    category: "DATA ANALYST",
    roles: [
      "Data Analyst"
    ]
  },
  {
    category: "PROJECT MANAGER",
    roles: [
      "Project Manager"
    ]
  },
  {
    category: "MANAGEMENT",
    roles: [
      "Management"
    ]
  },
  {
    category: "LEGAL",
    roles: [
      "Legal"
    ]
  },
  {
    category: "HR",
    roles: [
      "Hr"
    ]
  },
  {
    category: "FINANCE",
    roles: [
      "Finance"
    ]
  }
];

const techStack_list = [];

const minBasePay_list = [0,10,20,30,40,50,60,70];

const workMode_list = ["Remote","Hybrid","In-office"];

const exp_list = [1,2,3,4,5,6,7,8,9,10];


function App() {
  
  //to toggle the dropdown menu
  const [toggleDropdown,setToggleDropdown] = useState(0);
  
  //states to stor details of selected roles and category
  const [selectedRoles,setSelectedRoles] = useState([]);
  const [selectedCategory,setSelectedCategory] = useState("");

  const addSelected = (category,selected)=>{
      if(category!==selectedCategory){
          //clear selected array
          setSelectedRoles([]);
          setSelectedCategory(category);
          setSelectedRoles([selected]); 
      }
      else{
           setSelectedRoles([...selectedRoles, selected]); 
      }
  }
  


  return (
    <div className="App">

        <div className="filters">

            {/* Filter for role */}
            <div className="filter__element">
                <p className="filter__title">Roles</p>
                <div className="element__top">
                    <div className="element__top__left">
                        {
                          selectedRoles.map((role,index)=>{
                            return <SelectedTag  key={index} text={role} setSelected={setSelectedRoles} selected={selectedRoles}/>;
                          })
                        }
                        <div className="search__box">Roles</div>
                    </div>

                    <div className="element__top__right">
                        <div className="cross__all" onClick={()=>{setToggleDropdown(0); setSelectedRoles([]);setSelectedCategory("");}} style={{color: toggleDropdown? "#9a9a9a":"rgb(230, 230, 230)"}}><i class="ri-close-line"></i></div>
                        <span className="partition"></span>
                        <div className="dropdown__arrow" onClick={()=>{setToggleDropdown(!toggleDropdown)}} style={{color: toggleDropdown? "#9a9a9a":"rgb(230, 230, 230)"}}><i class="ri-arrow-drop-down-line"></i></div>
                    </div>                 
                </div>

                {
                  toggleDropdown?
                <div className="element__bottom">

                    {
                    roles_list.map((category, index) => (
                        <div key={index} className="category">
                            {
                              (selectedCategory===category.category && selectedRoles.length===category.roles.length)?(
                                <React.Fragment />
                              )
                              :(
                                 <p className="category__title">{category.category}</p>
                              )
                            }
                            
                            <div className="roles">
                                {
                                category.roles.map((role, roleIndex) => (
                                    selectedRoles.includes(role) ? (
                                        <React.Fragment key={roleIndex} />
                                    ) : (
                                        <div key={roleIndex} className="role" onClick={() => {addSelected(category.category, role); setToggleDropdown(0);}}>
                                            {role}
                                        </div>
                                        )
                                    ))
                                }

                            </div>
                        </div>
                    ))}
                    
                </div>:
                <></>
                }
            </div>
        </div>

        {/* Section for Job Cards */}
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
