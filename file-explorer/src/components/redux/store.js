import { configureStore } from '@reduxjs/toolkit';
import fileSystemReducer from './slices/fileSystemSlice';

const store = configureStore({
    reducer: {
        fileSystem: fileSystemReducer,
    },
});

export default store;
