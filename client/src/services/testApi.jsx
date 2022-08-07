import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const testApi = createApi({
  reducerPath: "testApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com/" }),
  tagTypes: ["User"],
  endpoints: {
    getAllUsers: builder.query({
      query: () => "/users",
    }),
  },
});

export const { useGetAllUsersQuery } = testApi;
