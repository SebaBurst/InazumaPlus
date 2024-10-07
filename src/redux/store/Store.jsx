import { configureStore } from '@reduxjs/toolkit';
import episodeReducer from '../slices/EpisodeSlice'

const store = configureStore({
    reducer: {
        episodes: episodeReducer
    },
});

export default store;
