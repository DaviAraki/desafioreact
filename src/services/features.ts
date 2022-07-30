import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const featuresApi = createApi({
  reducerPath: 'featuresApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_TASKS_API,
  }),
  endpoints: (builder) => ({
    getFeatures: builder.query({
      query: () => ({
        url: 'menu.json',
        responseHandler: 'json',
        validateStatus: (response, result) =>
          response.status === 200 && !result.isError,
      }),
    }),
  }),
});

export const { useGetFeaturesQuery } = featuresApi;
