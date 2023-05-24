import { configureStore } from '@reduxjs/toolkit'
import nbaReducer from './nbaSlice';
import mlbReducer from './mlbSlice'

export default configureStore({
  reducer: {
    nba: nbaReducer,
    mlb: mlbReducer
  },
})