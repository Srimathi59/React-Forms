import { BrowserRouter, Route, Routes } from "react-router-dom"
import Add from "./Add"
import Add1 from "./Add1"
import Add2 from "./Add2"
import Sparticipation from "./Add3"
import Studenttechtalk from "./Add4"
import NptelCertification from "./Add5"
import Internship from "./Add6"


const App=()=>{
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/StudentTechTalk" element={<Add/>}/>
            <Route path="/OnlineCertification"element={<Add1/>}/>
            <Route path="/ValueAddedCourse"element={<Add2/>}/>
            <Route path="/StudentParticipation"element={<Sparticipation/>}/>
            <Route path="/Student_techtalk"element={<Studenttechtalk/>}/>
            <Route path="/NptelCertification"element={<NptelCertification/>}/>
            <Route path="/Internship "element={<Internship/>}/>



            

        </Routes>
        </BrowserRouter>
        </>
    )
}
export default App