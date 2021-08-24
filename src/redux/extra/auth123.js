import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const prepareHeaders = (headers, { getState }) => {
  const token = getState().auth.token

  // If we have a token set in state, let's assume that we should be passing it.
  if (token) {
    headers.set('authorization', `Bearer ${token}`)
  }

  return headers
}

export const authApi = createApi({
  reducerPath: 'auth',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
    prepareHeaders,
  }),
  tagTypes: ['User', 'Contacts'],
  endpoints: (build) => ({
    getUserInfo: build.query({
      query: () => `/users/current`,
      providesTags: [{ type: 'User', id: 'Info' }],
    }),
    createNewUser: build.mutation({
      query(body) {
        return {
          url: `/users/signup`,
          method: 'POST',
          body,
        }
      },
      invalidatesTags: [{ type: 'User', id: 'Info' }],
    }),
    loginUser: build.mutation({
      query(body) {
        return {
          url: `/users/login`,
          method: 'POST',
          body,
        }
      },
      invalidatesTags: [{ type: 'User', id: 'Info' }],
    }),
    logoutUser: build.mutation({
      query() {
        return {
          url: `/users/logout`,
          method: 'POST',
          //authorization: token,
        }
      },
      invalidatesTags: [{ type: 'User', id: 'Info' }],
    }),
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
  useGetUserInfoQuery,
  useCreateNewUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
  useGetContactsQuery,
  useAddNewContactMutation,
  useRemoveContactByIdMutation,
  useUpdateContactByIdMutation,
} = authApi
