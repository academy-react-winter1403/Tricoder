
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChangePasswordPage from "../../components/student panel/Pages/ChangePasswordPage/ChangePasswordPage";
import CommentPage from "../../components/student panel/Pages/CommentPage/CommentPage";
import CoursePage from "../../components/student panel/Pages/CoursePage/CoursePage";
import DashboardPage from "../../components/student panel/Pages/DashboardPage/DashboardPage";
import EditProfilePage from "../../components/student panel/Pages/EditProfilePage/EditProfilePage";
import LogoutPage from "../../components/student panel/Pages/LogoutPage/LogoutPage";



const  PanelRouters = () => {
    return(
        <>
        <Router>
        <Routes>
            <Route path="/change-password" element={<ChangePasswordPage/>} />
            <Route path="/comment" element={<CommentPage/>} />
            <Route path="/courses" element={<CoursePage/>} /> 
            <Route path="/dashboard" element={<DashboardPage/>} />
            <Route path="/editprofile" element={<EditProfilePage/>} /> 
            <Route path="/logout" element={<LogoutPage/>} />
          </Routes>
        </Router>
        </>
    )
}


export default PanelRouters;