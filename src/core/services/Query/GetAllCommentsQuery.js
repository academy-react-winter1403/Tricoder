import { useQuery } from "@tanstack/react-query";
import { GetAllNewsCommentsApi } from "../api/CommentsApi";




export function useGetCommentNews(params) {
    const query = useQuery({
      queryKey: ["AllcommentNews", params ],
      queryFn: () => GetAllNewsCommentsApi(params ),
    });
  
    return query;
  }