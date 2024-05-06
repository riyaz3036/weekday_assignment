import React,{useState,useEffect} from 'react';
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

const minBasePay_list = ["0L","10L","20L","30L","40L","50L","60L","70L"];

const workMode_list = ["Remote","Hybrid","In-office"];

const exp_list = ["1","2","3","4","5","6","7","8","9","10"];

const techStack_list = ["Python","Java","GoLang","Ruby/Rails","C++","Kotlin","Django","C#","GraphQL","Flask","Typescript","AWS","Javascript","Rust","NodeJS","React"];

const location_list = ["Bangalore","Hyderabad","Noida","Gurugram","Pune","Mumbai","Delhi","Any"];

function App() {

  //API CALL TO RETRIEVE ALL THE JOB DATA
  const [jobData, setJobData] = useState(null);
  const [apiError, setApiError] = useState(null);


  const fetchData = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const body = JSON.stringify({
      // "limit": 10,
      "offset": 0
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body
    };

    try {
      const response = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      setJobData(result);
    } catch (error) {
      setApiError(error.message);
    }

  };

  useEffect(() => {
    fetchData();
  }, []);
  

  console.log(jobData,apiError);
  
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



    //states to store details of work Location
    const [toggleLocDropdown,setToggleLocDropdown] = useState(0);
    const [selectedLoc,setSelectedLoc] = useState([]);
    const [searchLoc, setSearchLoc] = useState('');
  
  
    const handleLocSearchChange = (event) => {
      setToggleLocDropdown(1);
      setSearchLoc(event.target.value);
    };
  
    const filteredLoc = location_list.filter(loc => loc.toLowerCase().includes(searchLoc.toLowerCase()));



  //states to store details of Minimum base pay
  const [togglePayDropdown,setTogglePayDropdown] = useState(0);
  const [selectedPay,setSelectedPay] = useState("");
  const [searchPay, setSearchPay] = useState('');


  const handlePaySearchChange = (event) => {
    setTogglePayDropdown(1);
    setSearchPay(event.target.value);
  };

  const filteredPay = minBasePay_list.filter(pay => pay.toLowerCase().includes(searchMode.toLowerCase()));


  //states to store details of Minimum base pay
  const [toggleExpDropdown,setToggleExpDropdown] = useState(0);
  const [selectedExp,setSelectedExp] = useState("");
  const [searchExp, setSearchExp] = useState('');


  const handleExpSearchChange = (event) => {
    setToggleExpDropdown(1);
    setSearchExp(event.target.value);
  };

  const filteredExp = exp_list.filter(exp => exp.toLowerCase().includes(searchExp.toLowerCase()));



  //States for storing searched company name
  const [searchName, setSearchName] = useState('');

  const handleNameSearchChange = (event) => {
    setSearchName(event.target.value);
  };
  


  
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
                            return <SelectedTag  key={index} type={"multi"} text={role} setSelected={setSelectedRoles} selected={selectedRoles}/>;
                          })
                        }
                        <input type="text" className={selectedRoles.length===0?"search__box":"search__box__short"} placeholder={selectedRoles.length===0?"Roles":""} value={searchRole} onChange={handleRoleSearchChange} onClick={()=>setToggleRoleDropdown(1)} />
                    </div>

                    <div className="element__top__right">
                        {
                          selectedRoles.length!==0?(
                            <div className="cross__all" onClick={()=>{setToggleRoleDropdown(0); setSelectedRoles([]);setSelectedCategory("");setSearchRole('');}} style={{color: toggleRoleDropdown? "#9a9a9a":"rgb(230, 230, 230)"}}><i class="ri-close-line"></i></div>
                          ):
                          (
                            <></>
                          )
                        }
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
                                        <div key={roleIndex} className="role" onClick={() => {addSelected(category.category, role); setToggleRoleDropdown(0);setSearchRole('');}}>
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
                            return <SelectedTag  key={index} type={"multi"} text={tech} setSelected={setSelectedTech} selected={selectedTech}/>;
                          })
                        }
                        <input type="text"className={selectedTech.length===0?"search__box":"search__box__short"} placeholder={selectedTech.length===0?"Tech Stack":""} value={searchTech} onChange={handleTechSearchChange} onClick={()=>setToggleTechDropdown(1)} />
                    </div>

                    <div className="element__top__right">
                        {
                          selectedTech.length!==0?(
                            <div className="cross__all" onClick={()=>{setToggleTechDropdown(0); setSelectedTech([]);setSearchTech('');}} style={{color: toggleTechDropdown? "#9a9a9a":"rgb(230, 230, 230)"}}><i class="ri-close-line"></i></div>
                          ):
                          (
                            <></>
                          )
                        }
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
                                        <div key={index} className="role" onClick={() => {setSelectedTech([...selectedTech, tech]); setToggleTechDropdown(0);setSearchTech('');}}>
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
                            return <SelectedTag  key={index} type={"multi"} text={mode} setSelected={setSelectedMode} selected={selectedMode}/>;
                          })
                        }
                        <input type="text" className={selectedMode.length===0?"search__box":"search__box__short"} placeholder={selectedMode.length===0?"Remote":""} value={searchMode} onChange={handleModeSearchChange} onClick={()=>setToggleModeDropdown(1)} />
                    </div>

                    <div className="element__top__right">
                        {
                          selectedMode.length!==0?(
                            <div className="cross__all" onClick={()=>{setToggleModeDropdown(0); setSelectedMode([]);setSearchMode('');}} style={{color: toggleModeDropdown? "#9a9a9a":"rgb(230, 230, 230)"}}><i class="ri-close-line"></i></div>
                          ):
                          (
                            <></>
                          )
                        }
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
                                        <div key={index} className="role" onClick={() => {setSelectedMode([...selectedMode, mode]); setToggleModeDropdown(0);setSearchMode('');}}>
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



            {/* Filter for work Location */}
            <div className="filter__element">
                <p className="filter__title" style={{color:selectedLoc.length?'black':'#fff'}}>Location</p>
                <div className="element__top">
                    <div className="element__top__left">
                        {
                          selectedLoc.map((loc,index)=>{
                            return <SelectedTag  key={index} type={"multi"} text={loc} setSelected={setSelectedLoc} selected={selectedLoc}/>;
                          })
                        }
                        <input type="text" className={selectedLoc.length===0?"search__box":"search__box__short"} placeholder={selectedLoc.length===0?"Location":""} value={searchLoc} onChange={handleLocSearchChange} onClick={()=>setToggleLocDropdown(1)} />
                    </div>

                    <div className="element__top__right">
                        {
                          selectedLoc.length!==0?(
                            <div className="cross__all" onClick={()=>{setToggleLocDropdown(0); setSelectedLoc([]);setSearchLoc('');}} style={{color: toggleLocDropdown? "#9a9a9a":"rgb(230, 230, 230)"}}><i class="ri-close-line"></i></div>
                          ):
                          (
                            <></>
                          )
                        }
                        <span className="partition"></span>
                        <div className="dropdown__arrow" onClick={()=>{setToggleLocDropdown(!toggleLocDropdown)}} style={{color: toggleLocDropdown? "#9a9a9a":"rgb(230, 230, 230)"}}><i class="ri-arrow-drop-down-line"></i></div>
                    </div>                 
                </div>

                {
                  toggleLocDropdown?
                <div className="element__bottom">

                    {
                      filteredLoc.length === 0 ? (
                        <div className="no-options">No options</div>
                      ) : (
                      filteredLoc.map((loc, index) => (
                        
                            <div className="roles">
                                {
                                    selectedLoc.includes(loc) ? (
                                        <React.Fragment key={index} />
                                    ) : (
                                        <div key={index} className="role" onClick={() => {setSelectedLoc([...selectedLoc, loc]); setToggleLocDropdown(0);setSearchLoc('');}}>
                                            {loc}
                                        </div>
                                        )
                                }
                            </div>
                    )))}
                </div>:
                <></>
                  
                }
            </div>



            {/* Filter for minimum base pay */}
            <div className="filter__element">
                <p className="filter__title" style={{color:selectedPay.length?'black':'#fff'}}>Min base pay</p>
                <div className="element__top">
                    <div className="element__top__left">
                        {
                          selectedPay!==""?(
                            <SelectedTag  text={selectedPay} type={"single"} setSelected={setSelectedPay} selected={selectedPay}/>
                          ):
                          (
                            <input type="text" className="search__box" placeholder={selectedPay.length===0?"min base pay":""} value={searchPay} onChange={handlePaySearchChange} onClick={()=>setTogglePayDropdown(1)} />
                          )
                        }
                    </div>

                    <div className="element__top__right">
                        {
                          selectedPay!==""?(
                            <div className="cross__all" onClick={()=>{setTogglePayDropdown(0); setSelectedPay("");setSearchPay('');}} style={{color: togglePayDropdown? "#9a9a9a":"rgb(230, 230, 230)"}}><i class="ri-close-line"></i></div>
                          ):
                          (
                            <></>
                          )
                        }
                        <span className="partition"></span>
                        <div className="dropdown__arrow" onClick={()=>{setTogglePayDropdown(!togglePayDropdown)}} style={{color: togglePayDropdown? "#9a9a9a":"rgb(230, 230, 230)"}}><i class="ri-arrow-drop-down-line"></i></div>
                    </div>                 
                </div>

                {
                  togglePayDropdown?
                <div className="element__bottom">

                    {
                      filteredPay.length === 0 ? (
                        <div className="no-options">No options</div>
                      ) : (
                      filteredPay.map((pay, index) => (
                        
                            <div className="roles">
                                {
                                    <div key={index} className="role" onClick={() => {setSelectedPay(pay); setTogglePayDropdown(0);setSearchPay('');}} style={{backgroundColor: pay===selectedPay?'blue':'auto'}}>
                                        {pay}
                                    </div>
                                }
                            </div>
                    )))}
                </div>:
                <></>
                  
                }
            </div>

            
            {/* Filter for minimum experience */}
            <div className="filter__element">
                <p className="filter__title" style={{color:selectedExp.length?'black':'#fff'}}>Experience</p>
                <div className="element__top">
                    <div className="element__top__left">
                        {
                          selectedExp!==""?(
                            <SelectedTag  text={selectedExp} type={"single"} setSelected={setSelectedExp} selected={selectedExp}/>
                          ):
                          (
                            <input type="text" className="search__box" placeholder={selectedExp.length===0?"Experience":""} value={searchExp} onChange={handleExpSearchChange} onClick={()=>setToggleExpDropdown(1)} />
                          )
                        }
                    </div>

                    <div className="element__top__right">
                        {
                          selectedExp!==""?(
                            <div className="cross__all" onClick={()=>{setToggleExpDropdown(0); setSelectedExp("");setSearchExp('');}} style={{color: toggleExpDropdown? "#9a9a9a":"rgb(230, 230, 230)"}}><i class="ri-close-line"></i></div>
                          ):
                          (
                            <></>
                          )
                        }
                        <span className="partition"></span>
                        <div className="dropdown__arrow" onClick={()=>{setToggleExpDropdown(!toggleExpDropdown)}} style={{color: toggleExpDropdown? "#9a9a9a":"rgb(230, 230, 230)"}}><i class="ri-arrow-drop-down-line"></i></div>
                    </div>                 
                </div>

                {
                  toggleExpDropdown?
                <div className="element__bottom">

                    {
                      filteredExp.length === 0 ? (
                        <div className="no-options">No options</div>
                      ) : (
                      filteredExp.map((exp, index) => (
                        
                            <div className="roles">
                                {
                                    <div key={index} className="role" onClick={() => {setSelectedExp(exp); setToggleExpDropdown(0);setSearchExp('');}} style={{backgroundColor: exp===selectedExp?'blue':'auto'}}>
                                        {exp}
                                    </div>
                                }
                            </div>
                    )))}
                </div>:
                <></>
                  
                }
            </div>



            {/* Section to filter company Name */}
            <div>
                <p className="filter__title" style={{color:searchName.length?'black':'#fff'}}>Company name</p>
                <input type="text" className="company__name__input" placeholder="Search Company Name" value={searchName} onChange={handleNameSearchChange} />
            </div>


        </div>

        {/* Section for Job Cards */}
        <div className="jobs">
            <div className="jobcard__element">
                <JobCard 
                   selectedRoles={selectedRoles}
                   selectedTech={selectedTech}
                   selectedMode={selectedMode}
                   selectedLoc={selectedLoc}
                   selectedPay={selectedPay}
                   selectedExp={selectedExp}
                   searchName={searchName}
                />
            </div>
            <div className="jobcard__element">
                <JobCard 
                   selectedRoles={selectedRoles}
                   selectedTech={selectedTech}
                   selectedMode={selectedMode}
                   selectedLoc={selectedLoc}
                   selectedPay={selectedPay}
                   selectedExp={selectedExp}
                   searchName={searchName}
                />
            </div>
            <div className="jobcard__element">
                <JobCard 
                   selectedRoles={selectedRoles}
                   selectedTech={selectedTech}
                   selectedMode={selectedMode}
                   selectedLoc={selectedLoc}
                   selectedPay={selectedPay}
                   selectedExp={selectedExp}
                   searchName={searchName}
                />
            </div>
            <div className="jobcard__element">
                <JobCard 
                   selectedRoles={selectedRoles}
                   selectedTech={selectedTech}
                   selectedMode={selectedMode}
                   selectedLoc={selectedLoc}
                   selectedPay={selectedPay}
                   selectedExp={selectedExp}
                   searchName={searchName}
                />
            </div>
            <div className="jobcard__element">
                <JobCard 
                   selectedRoles={selectedRoles}
                   selectedTech={selectedTech}
                   selectedMode={selectedMode}
                   selectedLoc={selectedLoc}
                   selectedPay={selectedPay}
                   selectedExp={selectedExp}
                   searchName={searchName}
                />
            </div>
            <div className="jobcard__element">
                <JobCard 
                   selectedRoles={selectedRoles}
                   selectedTech={selectedTech}
                   selectedMode={selectedMode}
                   selectedLoc={selectedLoc}
                   selectedPay={selectedPay}
                   selectedExp={selectedExp}
                   searchName={searchName}
                />
            </div>             
        </div>

    </div>
  );
}

export default App;
