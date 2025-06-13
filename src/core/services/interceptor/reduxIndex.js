import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseUrl = import.meta.env.VITE_BASE_URL;

export const api = createApi({
    reducerPath:'api',
    baseQuery: fetchBaseQuery({
        baseUrl: baseUrl
    }),

    preparedHeaders:(headers) =>{
        const token = localStorage.getItem('token')
        if (token){
            headers.set('Authorization', `Bearer ${token}`)
        }
        return headers;
    },
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: (id) => `${id}`
        }),
        postToDynamicUrl: builder.mutation({
            query:({url,data}) => ({
                url,
                method: "POST",
                body: data,
                // headers: {
                //     // Authorization :Bearer `${localStorage.getItem('token')}`,
                // }
               
            })
        })

    }),
    // useGetPostsQuery: 
})

export const { useGetPostsQuery, usePostToDynamicUrlMutation } = api;