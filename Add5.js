import './sty5.css';
const NptelCertification=()=>{
    
    return(
        <>
         <body>
        <div class="main" >

            
         


 <div className="report-container" style={{justifyContent:'center'}}>
     <div class="report-header">
         <h1 class="recent-Articles">NPTEL CERTIFICATION</h1>
        
     </div>
     <div className="row justify-content-center"style={{justifyContent:'center'}}>

    
          
     

     <div className="form group">


     

     <label>Academic year :</label>
     
     <select name="event_name">
<option value="">Select The Academic Year .......</option>
<option value="2022-23">2022-23</option>
<option value="2023-24">2023-24</option>
    
</select>
<label>Semester:</label>
<select name="event_name">
<option value="">Select The Semester .......</option>
<option value="ODD">ODD</option>
<option value="EVEN">EVEN</option>
 
</select>


     
  </div>
                
<div className="form group">
     <label >Name Of The Student :</label>
     <input  type="text" name="event_title" placeholder="Event Title" className="form-control"/>
     </div>
                    
   <div className="form group">
   <label >Academic Year Of The Student:</label>
    <select name="select the Student Academic Year">
    <option value="">select the student academic year</option>
     </select>

     </div>

   <div className="form group">
   <label >Semester</label>
    <select >
    <option value="">Select The Semester</option>
    <option value="2022-23">2022-23</option>
    <option value="2023-24">2023-24</option>
    </select>
                            
     </div>  

     <div className="form group">
   <label >Section</label>
    <select >
    <option value="">Select The Secction</option>
    <option value="A">A</option>
    <option value="B">B</option>
    <option value="C">C</option>
    </select>
                            
     </div>

      <div className="form group">
   <label >Section</label>
    <select >
    <option value="">Select The Section</option>
    <option value="A">A</option>
    <option value="B">B</option>
    <option value="C">C</option>
    </select>
                            
     </div>                 

     <div className="form group">
     <label >Course Name :</label>
     <input  type="text" name="event_title" placeholder="course name" className="form-control"/>
     </div>

     <div className="form group">
     <label >Year :</label>
     <input  type="text" name="event_title" placeholder="year" className="form-control"/>
     </div>

     <div className="form group">
     <label >Session :</label>
     <input  type="text" name="event_title" placeholder="Enter The Session" className="form-control"/>
     </div>

     <div className="form group">
     <label >Score Obtained :</label>
     <input  type="text" name="event_title" placeholder="Score Obtained" className="form-control"/>
     </div>
     
     
     <div className="form group">
   <label >Certificate Type</label>
    <select >
    <option value="">select The Type</option>
    <option value="Gold">Gold</option>
    <option value="Silver">Silver</option>
    <option value="Elite">Elite</option>
    <option value="Successfully Completed">Successfully Completed</option>
    </select>
                            
     </div>

     <div className="form group">
     <label >Certificate-PDF</label>
     <input  type="file" />
     </div>
    

      
 </div>
 </div>
 
 </div>
        
 </body>
        </>
    )
}

export default NptelCertification