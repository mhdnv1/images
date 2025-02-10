import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pixe-b4fe9-default-rtdb.firebaseio.com/' }),
  endpoints: (builder) => ({
    getImages: builder.query({
      query: () => 'images.json', 
    }),
  }),
});

export const { useGetImagesQuery } = api;
export default api;
