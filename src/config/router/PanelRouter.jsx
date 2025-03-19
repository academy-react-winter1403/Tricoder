
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const  PanelRouters = () => {
    return(
        <>
        <Router>
        <Routes>
            <Route path="/change-password" element={<ChangePasswordPage />} />
            <Route path="/comment" element={<CommentPage />} />
            <Route path="/courses" element={<CoursePage />} /> 
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/editprofile" element={<EditProfilePage/>} /> 
            <Route path="/logout" element={<LogoutPage />} />
          </Routes>
        </Router>
        </>
    )
}


export default PanelRouters;