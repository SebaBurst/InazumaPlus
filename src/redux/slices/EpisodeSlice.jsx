import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getEpisodesList } from '../../services/Api';


//async thunk to get all episodes.

export const fetchEpisodes = createAsyncThunk(
    'episodes/fetchEpisodes', //action anme
    async (serie) => {
        const response = getEpisodesList(serie); // api call
        return response; // payload
    }
);


const episodeSlice = createSlice({
    name: 'episodes',
    initialState: {
      list: [], // iniatial status
      status: 'idle', // "idle" no request
      error: null, // error state
    },
    reducers: {}, // no reducers because use extraReducers to async call
    extraReducers: (builder) => {
      builder
        .addCase(fetchEpisodes.pending, (state) => {
          state.status = 'loading'; // initial loading
        })
        .addCase(fetchEpisodes.fulfilled, (state, action) => {
          state.list = action.payload; // save episodes when loading is finish
          state.status = 'succeeded'; // change status 
        })
        .addCase(fetchEpisodes.rejected, (state, action) => {
          state.status = 'failed'; //change status
          state.error = action.error.message; // save message
        });
    },
  });


export default episodeSlice.reducer;
