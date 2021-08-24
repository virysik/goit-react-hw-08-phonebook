import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
  }),
  tagTypes: ['Contacts'],
  endpoints: (build) => ({
    getContacts: build.query({
      query: () => `/contacts`,
      //authorization:token,
      providesTags: [{ type: 'Contacts', id: 'List' }],
    }),
    addNewContact: build.mutation({
      query(body) {
        return {
          url: `/contacts`,
          method: 'POST',
          body,
          //authorization:token,
        }
      },
      invalidatesTags: [{ type: 'Contacts', id: 'List' }],
    }),
    removeContactById: build.mutation({
      query(id) {
        return {
          url: `contacts/${id}`,
          method: 'DELETE',
          //authorization:token,
        }
      },
      invalidatesTags: [{ type: 'Contacts', id: 'List' }],
    }),
    updateContactById: build.mutation({
      query(id, body) {
        return {
          url: `contacts/${id}`,
          method: 'PATCH',
          body,
          //authorization:token,
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
  useUpdateContactByIdMutation,
} = contactsApi
