import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  donations: [],
  currentDonation: null,
  loading: false,
  error: null,
}

const donationSlice = createSlice({
  name: 'donations',
  initialState,
  reducers: {
    setCurrentDonation: (state, action) => {
      state.currentDonation = action.payload
    },
    addDonation: (state, action) => {
      const newDonation = {
        id: Math.random().toString(36).substr(2, 9),
        ...action.payload,
        timestamp: new Date().toISOString(),
        status: 'completed',
      }
      state.donations.push(newDonation)
      state.currentDonation = null
    },
    fetchDonationsStart: (state) => {
      state.loading = true
      state.error = null
    },
    fetchDonationsSuccess: (state, action) => {
      state.donations = action.payload
      state.loading = false
    },
    fetchDonationsFailure: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    clearCurrentDonation: (state) => {
      state.currentDonation = null
    },
  },
})

export const {
  setCurrentDonation,
  addDonation,
  fetchDonationsStart,
  fetchDonationsSuccess,
  fetchDonationsFailure,
  clearCurrentDonation,
} = donationSlice.actions

export default donationSlice.reducer
