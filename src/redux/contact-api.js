import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3004' }),
  tagTypes: ['Contacts'],
  endpoints: (build) => ({
    getContacts: build.query({
      query: () => `/contacts`,
      providesTags: [{ type: 'Contacts', id: 'List' }],
    }),
    addNewContact: build.mutation({
      query(body) {
        return {
          url: `/contacts`,
          method: 'POST',
          body,
        }
      },
      invalidatesTags: [{ type: 'Contacts', id: 'List' }],
    }),
    removeContactById: build.mutation({
      query(id) {
        return {
          url: `contacts/${id}`,
          method: 'DELETE',
        }
      },
      invalidatesTags: [{ type: 'Contacts', id: 'List' }],
    }),
  }),
})

export const {
  useGetContactsQuery,
  useAddNewContactMutation,
  useRemoveContactByIdMutation,
} = contactsApi
