import './sty3.css';

function Sparticipation() {
    return(
        <>
         <div className="report-container" style={{justifyContent:'center'}}>
           <div class="report-header">
             <h1 class="recent-Articles">STUDENT PARTICIPATION</h1>
           </div>

           <div className="row justify-content-center"style={{justifyContent:'center'}}>
           <div className="form-group">
              <label>Academic Year</label>
              <select name="event_name" className="form-select">
                <option value="">Select Academic Year</option>
                <option value="2022-23">2022-23</option>
                <option value="2023-24">2023-24</option>
              </select>
            </div>

            <div className="form-group">
              <label>Semester</label>
              <select name="event_name" className="form-select">
                <option value="">Select Semester</option>
                <option value="ODD">ODD</option>
                <option value="EVEN">EVEN</option>
              </select>
            </div>

            <div className="form-group">
               <label>Department</label>
               <input type="text" placeholder="Enter Your Department"/>
            </div>

            <div className="form-group">
               <label>Name of the Student</label>
               <input type="text" placeholder="Enter Your Student"/>
            </div>

            <div className="form-group">
               <label>Year</label>
               <input type="text" placeholder="Enter Your Year"/>
            </div>

            <div className="form-group">
               <label>Semester</label>
               <input type="text" placeholder="Enter Your Semester"/>
            </div>

            <div className="form-group">
               <label>Section</label>
               <input type="text" placeholder="Enter Your Section"/>
            </div>

            <div className="form-group">
              <label>Nature of Participation</label>
              <select name="event_name" className="form-select">
                <option value="">Select the Participation</option>
                <option value="Seminar">Seminar</option>
                <option value="Workshop">Workshop</option>
                <option value="Paper Presentation">Paper Presentation</option>
                <option value="Project Contest">Project Contest</option>
                <option value="Sports">Sports</option>
                <option value="Outreach Program">Outreach Program</option>
              </select>
            </div>

            <div className="form-group">
               <label>Name of the Program</label>
               <input type="text" placeholder="Enter the Program"/>
            </div>

            <div className="form-group">
               <label>Date</label>
               <input type="date"/>
            </div>

            <div className="form-group">
               <label>Duration</label>
               <input type="text" placeholder="Enter the Timing"/>
            </div>

            <div className="form-group">
               <label>Name of the Organization</label>
               <input type="text" placeholder="Enter the Organisation Name"/>
            </div>

            <div className="form-group">
               <label>Awards and Recognitions</label>
               <input type="text" placeholder="Enter the Prize"/>
            </div>

            <div className="form-group">
               <label>Certificates-pdf</label>
               <input type="file"/>
            </div>
           </div>
         </div>
        </>
    );
}
export default Sparticipation;