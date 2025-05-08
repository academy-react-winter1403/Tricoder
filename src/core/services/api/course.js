import http from "../interceptor";

const getcoursebyId = async (id) => {
  try {
    const data = await http.get(`/Home/GetCourseDetails?CourseId=${id}`)
    return data
  } catch (error) {
    console.log(error)
  }
};

export default getcoursebyId;
