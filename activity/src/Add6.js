import './sty6.css';
const Internship=()=>{
    return(
        <>
         <body>
        <div class="main" >
  
            
         
  
  
  <div className="report-container" style={{justifyContent:'center'}}>
     <div class="report-header">
         <h1 class="recent-Articles">Internship</h1>
        
     </div>
     <div className="row justify-content-center"style={{justifyContent:'center'}}>
  
     {/* <label htmlFor="event-type">Select Event Type:</label>
      <select id="event-type" onChange={handleChange} value={eventType}>
        <option value="seminar">Seminar</option>
        <option value="workshop">Workshop</option>
      </select> */}
       
   
     
  
     <div className="form group">
  
  
     {/* <Select
        isMulti
        options={options}
        value={selectedOptions}
        onChange={handleChange}
        isSearchable
        placeholder="Select options..."
        closeMenuOnSelect={false} 
      /> */}
  
    
      {/* <CMultiSelect allowCreateOptions options={facultySelect} /> */}
     {/* <select name="cars" id="cars" multiple multiselect-hide-x="true">
  <option value="1">Audi</option>
  <option selected value="2">BMW</option>
  <option selected value="3">Mercedes</option>
  <option value="4">Volvo</option>
  <option value="5">Lexus</option>
  <option value="6">Tesla</option>
  </select> */}
  
     <label for="major_id">Academic Year</label>< required placeholder="Academic" className="form-control" /><br />
      <select name="Academic Year">
        <option value="0"></option>
        <option value="1">2022-2023</option>
        <option value="2">2023-2024</option>
        <option value="3">2024-2025</option>
  
      </select><br />
    
        
      
  
  
  
  
  
     {/* <label >Nature of
  </select> the event :</label>
  
                        <select name="event_name" className="form-select" value={seminar.event_name} onChange={infoCollect} style={{width:'80%'}}>
                        <option value="">Select Event Nature .......</option>
                        <option value="data_ecr_workshop">Workshop</option>
                        <option value="Seminar">Seminar</option>
                        <option value="Conference">Conference</option>
                        <option value="Technical Symposium">Technical Symposium</option>
                        <option value="Guest Lecture">Guest Lecture</option>
                        <option value="FDP">FDP</option>
                        </select> */}
                    </div>
                
            <div className="form group">
                        <label for="event_title">Department</label>
                        <select name="Academic Year">
        
        <option value="0"></option>
        <option value="1">EEE</option>
        <option value="2">CSE</option>
        <option value="3">ECE</option>
        <option value="4">IT</option>
        </select>
  
                    </div>
                    
                    <div className="form group">
                    <label for="event_organizer">Name of the student</label>
                    <input type="text" name="Organizer Name" placeholder= "Organizer Name" className="form-control" />
                    </div>
  
                    <div className="form group">
      <label htmlFor="event_year">year</label>
      <input type="text" name="event_time" required placeholder="Event time" className="form-control" /><br />
      </div>
      <div className="form group">
      <label htmlFor="event_number">Semester</label>
      <select name="Academic Year">
        <option value="0"></option>
        <option value="1">Odd</option>
         <option value="2">Even</option> 
      
        
  
      </select><br />
    
      </div>
      <div className="form group">
      <label htmlFor="event_date">Date</label>
      <input type="date" name="event_date" required /><br />
  
  
  
                                
                            
      <br />
  
      
      <label htmlFor="guest_name">Name of the participation</label>
      
      
      <select name="Name of the participation">
        <option value="0"></option>
        <option value="1">Research project</option>
        <option value="2">Internship</option>
        <option value="2">Field project</option>
        <option value="2">Minor project</option>
        <option value="2">Industrial visit</option>
        <option value="2">In plant Training</option>
  
  
      </select><br />
    
  
      
  
      <label htmlFor="guest_designation">Title</label>
      <input type="text" name="guest_designation" required /><br />
  
      <label htmlFor="guest_address">Section</label>
      <input type="text" name="guest_address" required /><br />
  
      <label htmlFor="guest_phone_number">Duration</label>
      <input type="number" name="guest_phone_number" /><br />
  
      <label htmlFor="guest_email">Name of the Organisation</label>
      <input type="text" name="guest_email" /><br />
  
      
      <label htmlFor="student_count">Name of the Contact Person</label>
      <input type="text" name="student_count" /><br />
  
      <label htmlFor="faculty_count">phone number of Contact Person</label>
      <input type="text" name="faculty_count" /><br />
  
      <label htmlFor="others_count">EMAILID of Contact Person</label>
      <input type="text" name="others_count" /><br />
  
      <label htmlFor="event_budget">Website Of Organisation</label>
      <input type="text" name="event_budget" /><br />
  
      <label htmlFor="event_budget">Outcome of the Activity</label>
      <input type="text" name="event_budget" /><br />
  
  
      <label >Attachments:</label>
      <input type="number" name="event_budget" /><br />
  
      <label >Certificate-PDF</label>
      <input type="File" name="event_budget" /><br />
  
  
  
      
      {/* <label htmlFor="dept_id">Department:</label>
      <select name="dept_id" value={seminar.dept_id} onChange={infoCollect}>
      <option value="">Select Department ......</option>
        <option value="1">CSE</option>
        <option value="2">ECE</option>
        <option value="3">EEE</option>
        <option value="4">IT</option>
        <option value="5">CY</option>
        <option value="6">AIDS</option>
      </select><br /> */}
  
      {/* <label>Event Coordinator</label>
                        <select name="event_coordinator" className="form group" onChange={handleChange} value={selectedOptions}>
                        <option value="">Select Faculty</option>
                            {
                                proposable.map((val,key)=>{
                                    return (<option value={val.faculty_id}>{val.faculty_id}{'-'}{val.faculty_name}{'-'}{val.dept}</option>)
                                })
                            }
                        </select> */}
  
        
      
  
        
      
      
   
     
  
      
    </div>
    
  
    <h1 style={{color:'red',}}></h1>
         
    <div className='row mt-5 justify-content-around'>
        <input type='button' className='col-3 btn btn-primary' />
                        <input type='button' onClick={()=>{
                            
                        }} value="Clear" className='col-3 btn btn-danger' />
                    </div>   
        
         
         {/* <label for="coll">Colloborating`/Sponsored Agency:</label>
         <input type="text" name="coll" required/><br/>
         <label for="date">Date of The Event Planned:</label>
         <input type="date" name="date" required/><br/>
         <label for="venue">Venue : </label>
  <select name="venue">
  <option value="Seminar Hall I">Seminar Hall I</option>
  <option value="Seminar Hall II">Seminar Hall II</option>
  <option value="Cloud Computing Lab">Cloud Computing Lab</option>
  <option value="Data Analytics Lab">Data Analytics Lab</option>
  
  </select><br/>
         <h1>Details of The Guest</h1>
         <label for="Name">Name:</label>
         <input type="text" name="Name" required/><br/>
         <label for="designation">Designation:</label>
         <input type="text" name="designation" required/><br/>
         <label for="address">Address:</label>
         <input type="text" name="address" required/><br/>
         <label for="number">Mobile Number:</label>
         <input type="number" name="number" required/><br/>
         <label for="mail">Mail ids</label>
         <input type="text" name="mail" required/><br/>
         <h1>No of Participants (Expected)</h1>
         <label for="mecs">MEC Students:</label>
         <input type="number" name="mecs" required/><br/>
         <label for="mecf">MEC Faculty:</label>
         <input type="text" name="mecf" required/><br/>
         <label for="others">Others:</label>
         <input type="text" name="others" required/><br/>
         <label for="others">Proposed Budget:</label>
         <input type="text" name="budget" required/><br/>
         <h1>Co-ordinator of the Event</h1>
         <label for="Name">Name:</label>
         <input type="text" name="CName" required><br>
         <label for="designation">Academic Year:</label>
         <input type="text" name="year" required><br>
         <label for="sem">Semester :</label>
  <select name="sem">
  <option value="ODD ">Odd Sem</option>
  <option value="EVEN">even Sem</option>
  </select><br>
         <label for="department">Department:</label>
  <select name="dept">
  <option value="CSE">CSE</option>
  <option value="ECE">ECE</option>
  <option value="EEE">EEE</option>
  <option value="IT">IT</option>
  <option value="CY">CY</option>
  <option value="AIDS">AIDS</option>
  </select><br/>
  
        
  
                      <input type="submit" value="Submit"/> */}
         
    
      
  </div>
  </div>
  
  </div>
        
  </body>
        </>
        
    )
  }
  export default Internship