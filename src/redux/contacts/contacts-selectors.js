import { createSelector } from 'reselect'

export const getItems = (state) => state.contacts.items
export const getFilter = (state) => state.contacts.filter
export const getIsLoading = (state) => state.contacts.isLoading

export const getContactsArr = createSelector(
  [getItems, getFilter],
  (items, filter) =>
    items.filter(
      (item) =>
        item.name.toLowerCase().includes(filter.toLowerCase()) ||
        item.number.includes(filter),
    ),
)
