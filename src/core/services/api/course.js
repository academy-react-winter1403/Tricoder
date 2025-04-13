import http from "../interceptor";

const getcoursebyId = (id) => {
  return http.get(`/Home/GetCourseDetails?CourseId=${id}`);
};

export default getcoursebyId;
