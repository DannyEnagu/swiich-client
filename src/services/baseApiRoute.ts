import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from '../lib/store';

// initialize an empty api service to inject
// endpoints into later as needed
const baseApiRoute = createApi({
  reducerPath: 'baseApiRoute',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
   }),
  endpoints: () => ({}),
})

// export const api = baseApiRoute.reducerPath;

export default baseApiRoute;