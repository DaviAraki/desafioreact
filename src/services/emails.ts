import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const emailsApi = createApi({
  reducerPath: 'emailsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_TASKS_API,
  }),
  endpoints: (builder) => ({
    getEmails: builder.query({
      query: () => ({
        url: 'itens.json',
        responseHandler: 'json',
        validateStatus: (response, result) =>
          response.status === 200 && !result.isError,
      }),
    }),
  }),
});

export const { useGetEmailsQuery } = emailsApi;
