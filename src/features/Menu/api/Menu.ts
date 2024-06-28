import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CreateDishDto, Dish } from '../types/types';


export const dishApi = createApi({
  reducerPath: 'dishApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
  endpoints: (builder) => ({
    getDishes: builder.query<Dish[], void>({
      query: () => '/dishes',
    }),
    createDish: builder.mutation<Dish, CreateDishDto>({
      query: (newDish) => ({
        url: '/dishes',
        method: 'POST',
        body: newDish,
      }),
    }),
  }),
});

export const { useGetDishesQuery, useCreateDishMutation } = dishApi;
