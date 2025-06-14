import { useQuery } from "@tanstack/react-query"
import http from "../interceptor"

export const getFavoriteCourseData = (key, endUrl) => {
    return useQuery({
        queryKey: key,
        queryFn: async () => {
            const response = await http.get(endUrl)
            return response
        }
    })
}