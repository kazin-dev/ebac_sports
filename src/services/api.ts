import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { Produto } from '../App'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api'
  }),
  endpoints: (builder) => ({
    getItens: builder.query<Produto[], void>({
      query: () => 'ebac_sports'
    })
  })
})

export const { useGetItensQuery } = api

export default api
