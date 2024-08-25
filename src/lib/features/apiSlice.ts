import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ApiResponse, Detail } from './types';

export const starWarsApi = createApi({
  reducerPath: 'starWarsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api' }),
  endpoints: (builder) => ({
    getPeoples: builder.query<ApiResponse, void>({
      query: () => ({ url: `/people` }),
    }),
    getPeopleById: builder.query<Detail, number>({
      query: (id) => ({ url: `/people/${id}` }),
    }),
  }),
});

export const { useGetPeoplesQuery, useGetPeopleByIdQuery } = starWarsApi;
