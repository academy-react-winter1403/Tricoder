import React, { useEffect } from "react";
import StudentPanel from "../../app/layouts/StudentPanelLayout/StudentPanel";
import { Outlet, useNavigate } from "react-router-dom";

const StudentPanelPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/Studentpanel/dashboard");
  }, []);

  return (
    <StudentPanel>
      <Outlet />
    </StudentPanel>
  );
};

export default StudentPanelPage;
