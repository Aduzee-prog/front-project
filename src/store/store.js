import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice'
import campaignReducer from './slices/campaignSlice'
import donationReducer from './slices/donationSlice'
import userReducer from './slices/userSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    campaigns: campaignReducer,
    donations: donationReducer,
    users: userReducer,
  },
})

export default store
