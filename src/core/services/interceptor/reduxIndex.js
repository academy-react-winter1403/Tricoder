import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseUrl = import.meta.env.VITE_BASE_URL;

export const api = createApi({
    reducerPath:'api',
    baseQuery: fetchBaseQuery({
        baseUrl: baseUrl
    }),
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: (id) => `${id}`
        }),
        postToDynamicUrl: builder.mutation({
            query:({url,data}) => ({
                url,
                method: "POST",
                body: data,
                headers: {
                    Authorization : `${localStorage.getItem('token')}`,
                }
            })
        })
    })
})

export const { useGetPostsQuery, usePostToDynamicUrlMutation } = api;