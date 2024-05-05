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

const minBasePay_list = [0,10,20,30,40,50,60,70];

const workMode_list = ["Remote","Hybrid","In-office"];

const exp_list = [1,2,3,4,5,6,7,8,9,10];

const techStack_list = ["Python","Java","GoLang","Ruby/Rails","C++","Kotlin","Django","C#","GraphQL","Flask","Typescript","AWS","Javascript","Rust","NodeJS","React"];


function App() {
    
  
  //states to store details of selected roles and category
  const [toggleRoleDropdown,setToggleRoleDropdown] = useState(0);

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

  const [searchRole, setSearchRole] = useState('');

  const handleRoleSearchChange = (event) => {
    setToggleRoleDropdown(1);
    setSearchRole(event.target.value);
  };
  const filteredRoles = roles_list.flatMap(category => category.roles).filter(role => role.toLowerCase().includes(searchRole.toLowerCase()));
  const filteredRolesCategory = roles_list.filter(category => category.roles.some(role => filteredRoles.includes(role)));



  //states to store details of selected roles and category
  const [toggleTechDropdown,setToggleTechDropdown] = useState(0);
  const [selectedTech,setSelectedTech] = useState([]);
  const [searchTech, setSearchTech] = useState('');


  const handleTechSearchChange = (event) => {
    setToggleTechDropdown(1);
    setSearchTech(event.target.value);
  };

  const filteredTech = techStack_list.filter(ts => ts.toLowerCase().includes(searchTech.toLowerCase()));


  //states to store details of work Mode
  const [toggleModeDropdown,setToggleModeDropdown] = useState(0);
  const [selectedMode,setSelectedMode] = useState([]);
  const [searchMode, setSearchMode] = useState('');


  const handleModeSearchChange = (event) => {
    setToggleModeDropdown(1);
    setSearchMode(event.target.value);
  };

  const filteredMode = workMode_list.filter(mode => mode.toLowerCase().includes(searchMode.toLowerCase()));

  console.log(selectedMode);


  return (
    <div className="App">

        <div className="filters">


            {/* Filter for Roles */}
            <div className="filter__element">
                <p className="filter__title" style={{color:selectedRoles.length?'black':'#fff'}}>Roles</p>
                <div className="element__top">
                    <div className="element__top__left">
                        {
                          selectedRoles.map((role,index)=>{
                            return <SelectedTag  key={index} text={role} setSelected={setSelectedRoles} selected={selectedRoles}/>;
                          })
                        }
                        <input type="text" className="search__box" placeholder={selectedRoles.length===0?"Roles":""} value={searchRole} onChange={handleRoleSearchChange} onClick={()=>setToggleRoleDropdown(1)} />
                    </div>

                    <div className="element__top__right">
                        <div className="cross__all" onClick={()=>{setToggleRoleDropdown(0); setSelectedRoles([]);setSelectedCategory("");setSearchRole('');}} style={{color: toggleRoleDropdown? "#9a9a9a":"rgb(230, 230, 230)"}}><i class="ri-close-line"></i></div>
                        <span className="partition"></span>
                        <div className="dropdown__arrow" onClick={()=>{setToggleRoleDropdown(!toggleRoleDropdown)}} style={{color: toggleRoleDropdown? "#9a9a9a":"rgb(230, 230, 230)"}}><i class="ri-arrow-drop-down-line"></i></div>
                    </div>                 
                </div>

                {
                  toggleRoleDropdown?
                <div className="element__bottom">

                    {
                      filteredRolesCategory.length === 0 ? (
                        <div className="no-options">No options</div>
                      ) : (
                    filteredRolesCategory.map((category, index) => (
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
                                  category.roles.filter(role => filteredRoles.includes(role)).map((role, roleIndex) => (
                                    selectedRoles.includes(role) ? (
                                        <React.Fragment key={roleIndex} />
                                    ) : (
                                        <div key={roleIndex} className="role" onClick={() => {addSelected(category.category, role); setToggleRoleDropdown(0);}}>
                                            {role}
                                        </div>
                                        )
                                    ))
                                }

                            </div>
                        </div>
                    )))}
                    
                </div>:
                <div></div>
                  
                }
            </div>

            

            {/* Filter for tech stack */}
            <div className="filter__element">
                <p className="filter__title" style={{color:selectedTech.length?'black':'#fff'}}>Tech Stack</p>
                <div className="element__top">
                    <div className="element__top__left">
                        {
                          selectedTech.map((tech,index)=>{
                            return <SelectedTag  key={index} text={tech} setSelected={setSelectedTech} selected={selectedTech}/>;
                          })
                        }
                        <input type="text" className="search__box" placeholder={selectedTech.length===0?"Tech Stack":""} value={searchTech} onChange={handleTechSearchChange} onClick={()=>setToggleTechDropdown(1)} />
                    </div>

                    <div className="element__top__right">
                        <div className="cross__all" onClick={()=>{setToggleTechDropdown(0); setSelectedTech([]);setSearchTech('');}} style={{color: toggleTechDropdown? "#9a9a9a":"rgb(230, 230, 230)"}}><i class="ri-close-line"></i></div>
                        <span className="partition"></span>
                        <div className="dropdown__arrow" onClick={()=>{setToggleTechDropdown(!toggleTechDropdown)}} style={{color: toggleTechDropdown? "#9a9a9a":"rgb(230, 230, 230)"}}><i class="ri-arrow-drop-down-line"></i></div>
                    </div>                 
                </div>

                {
                  toggleTechDropdown?
                <div className="element__bottom">

                    {
                      filteredTech.length === 0 ? (
                        <div className="no-options">No options</div>
                      ) : (
                      filteredTech.map((tech, index) => (
                        
                            <div className="roles">
                                {
                                    selectedTech.includes(tech) ? (
                                        <React.Fragment key={index} />
                                    ) : (
                                        <div key={index} className="role" onClick={() => {setSelectedTech([...selectedTech, tech]); setToggleTechDropdown(0);}}>
                                            {tech}
                                        </div>
                                        )
                                }
                            </div>
                    )))}
                </div>:
                <></>
                  
                }
            </div>


            {/* Filter for work mode */}
            <div className="filter__element">
                <p className="filter__title" style={{color:selectedMode.length?'black':'#fff'}}>Remote</p>
                <div className="element__top">
                    <div className="element__top__left">
                        {
                          selectedMode.map((mode,index)=>{
                            return <SelectedTag  key={index} text={mode} setSelected={setSelectedMode} selected={selectedMode}/>;
                          })
                        }
                        <input type="text" className="search__box" placeholder={selectedMode.length===0?"Remote":""} value={searchMode} onChange={handleModeSearchChange} onClick={()=>setToggleModeDropdown(1)} />
                    </div>

                    <div className="element__top__right">
                        <div className="cross__all" onClick={()=>{setToggleModeDropdown(0); setSelectedMode([]);setSearchMode('');}} style={{color: toggleModeDropdown? "#9a9a9a":"rgb(230, 230, 230)"}}><i class="ri-close-line"></i></div>
                        <span className="partition"></span>
                        <div className="dropdown__arrow" onClick={()=>{setToggleModeDropdown(!toggleModeDropdown)}} style={{color: toggleModeDropdown? "#9a9a9a":"rgb(230, 230, 230)"}}><i class="ri-arrow-drop-down-line"></i></div>
                    </div>                 
                </div>

                {
                  toggleModeDropdown?
                <div className="element__bottom">

                    {
                      filteredMode.length === 0 ? (
                        <div className="no-options">No options</div>
                      ) : (
                      filteredMode.map((mode, index) => (
                        
                            <div className="roles">
                                {
                                    selectedMode.includes(mode) ? (
                                        <React.Fragment key={index} />
                                    ) : (
                                        <div key={index} className="role" onClick={() => {setSelectedMode([...selectedMode, mode]); setToggleModeDropdown(0);}}>
                                            {mode}
                                        </div>
                                        )
                                }
                            </div>
                    )))}
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
