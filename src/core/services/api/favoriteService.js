import http from "../interceptor";



export const getMyFavorites = async () => {
  const response = await http.get("/SharePanel/GetMyFavoriteCourses");
  return response.data.favoriteCourseDto;
};

export const AddToFavorite = async(courseId) => {
  try {
    const response = await http.post("/Course/AddCourseFavorite", {
        courseId: courseId,
      });
      return response.data;
  } catch (error) {
    console.log("خطا در افزودن به علاقه‌مندی‌ها:", error)
  }
}



export const removeFromFavorites = async (favoriteId) => {
  return await http.delete("/SharePanel/RemoveFavoriteCourse", {
    data: { courseFavoriteId: favoriteId }, // طبق مستندات API
  });
};