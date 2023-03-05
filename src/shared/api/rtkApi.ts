import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const rtkApi = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://demo7919674.mockable.io/'
	}),
	endpoints: (builder) => ({
		getModes: builder.query<any, void>({
			query: () => ({
				url: ''
			}),
		}),
	}),
});

export const { useGetModesQuery } = rtkApi;
