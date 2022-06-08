import { createSlice } from "@reduxjs/toolkit";
import { featuredSection } from "../gameApi/gameApi";
import { navigate } from "../gameApi/gameUtils";

const initialState = {
  collection: {
    title: 'Games',
    body: featuredSection,
    page: 1,
  },
  filter: {
    platforms: [],
    genres: []
  },
  sort: {
    option: 'Release Date',
    order: 'desc'
  },
  isPreviousData: false
}

export const directorySlice = createSlice({
  name: 'directory',
  initialState,
  reducers: {
    addPlatform: (state, action) => {
      state.filter.platforms = action.payload
    },
    addGenre: (state, action) => {
      state.filter.genres = action.payload
    },
    setCollection: (state, action) => {
      state.collection = navigate(action.payload)
    },
    setPage: (state, action) => {
      state.collection.page = action.payload
    },
    setIsPrevious: (state, action) => {
      state.isPreviousData = action.payload
    },
    setSort: (state, action) => {
      state.sort = action.payload
    }
  }
})

export const { 
  addPlatform, 
  addGenre, 
  setCollection, 
  setIsPrevious,
  setPage,
  setSort
} = directorySlice.actions
export default directorySlice.reducer

export const selectDirectory = (state) => state.directory