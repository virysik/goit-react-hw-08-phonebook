import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
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

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetContactsQuery,
  useAddNewContactMutation,
  useRemoveContactByIdMutation,
} = contactsApi
