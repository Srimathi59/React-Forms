import './sty4.css';

function Studenttechtalk(){
    return(
        <>
        <div className="report-container" style={{justifyContent:'center'}}>
          <div class="report-header">
            <h1 class="recent-Articles">STUDENT TECHTALK</h1>
          </div>

          <div className="row justify-content-center"style={{justifyContent:'center'}}>
            <div className="form-group">
              <label>Student Name</label>
              <input type="text" placeholder="Enter Your Name"/>
            </div>

            <div className="form-group">
               <label>Date</label>
               <input type="date"/>
            </div>

            <div className="form-group">
              <label>No of Students Participated</label>
              <input type="text" placeholder="Enter the Student Count"/>
            </div>

            <div className="form-group">
              <label>Faculty Co Ordinator</label>
              <input type="text" placeholder="Faculty Co Ordinator"/>
            </div>

            <div className="form-group">
              <label>PO and PSO Mapping</label>
              <input type="text" placeholder="Enter the Mapping"/>
            </div>

            <div className="form-group">
               <label>Attendance</label>
               <input type="file"/>
            </div>

            <div className="form-group">
               <label>Photo 1</label>
               <input type="file"/>
            </div>

            <div className="form-group">
               <label>Photo 2</label>
               <input type="file"/>
            </div>
          </div>
        </div>
        </>
    )
}
export default Studenttechtalk