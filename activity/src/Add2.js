import './sty2.css';

const Add2=()=>{
    return(
  
      

        <>
         <body>
        <div class="main" >

            
         


 <div className="report-container" style={{justifyContent:'center'}}>
     <div class="report-header">
      
         <h1 class="recent-Articles"><center>Value Added Courses</center></h1>
        
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

     
  


  


     {/* <label >Nature of
</select> the event :</label>

                        <select name="event_name" className="form-select" value={seminar.event_name} onChange={infoCollect}  style={{width:'80%'}}>
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
 
        
      

        
      <label htmlFor="acdyr_id">Academic Year:</label>
      <select name="acdyr_id" className="form group"  >
                        <option value="">Select Academic Year</option>
                            {
                                
                            }
                        </select>

      <label htmlFor="sem">Semester :</label>
      <select name="sem">
        <option value="0">Odd Sem</option>
        <option value="1">Even Sem</option>
      </select><br />
      <label htmlFor="sem">Department :</label>
      <select name="sem">
        <option value="0">CSE</option>
        <option value="1">IT</option>
        <option value="1">ECE</option>
        <option value="1">EEE</option>
      </select><br />
      <label htmlFor="guest_email">Name of the Value Added Courses</label>
      <input type="text" name="guest_email"  /><br />
      <label htmlFor="guest_email">Venue of Value Added Course</label>
      <input type="text" name="guest_email"  /><br />
      <div className="form group">
      <label htmlFor="event_date">Date:</label>
      <input type="date" name="event_date"  required /><br /></div>
      <label htmlFor="guest_email">Duration</label>
      <input type="text" name="guest_email"  /><br />
      <label htmlFor="guest_email">Name of Resource Person</label>
      <input type="text" name="guest_email"  /><br />
      <label htmlFor="guest_email">Address of Resource Person</label>
      <input type="text" name="guest_email"  /><br />
      <label htmlFor="guest_email">Designation of Resource Person</label>
      <input type="text" name="guest_email"  /><br />
      <label htmlFor="guest_email">Organization of Resource Person</label>
      <input type="text" name="guest_email"  /><br />
      <label htmlFor="guest_email">Mobile of Resource Person</label>
      <input type="text" name="guest_email"  /><br />
      <label htmlFor="guest_email">Email ID of Resource Person</label>
      <input type="text" name="guest_email"  /><br />
      <label htmlFor="sem">Students Participated in the Event:</label>
      <input type="text" name="guest_email"  /><br />
     
      <label htmlFor="sem">Outcome of the Activity:</label>
      <input type="text" name="guest_email"  /><br />
     <label htmlFor="guest_email">Attachments</label>
      <label htmlFor="guest_email">CCR First Page-PDF</label>
      <input type="file" name="guest_email"  /><br />


      
   
     

      
    </div>
    

    <h1 style={{color:'red',}}></h1>
         
    <div className='row mt-5 justify-content-around'>
        <input type='button'   className='col-3 btn btn-primary' />
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

export default Add2