import { combineReducers, configureStore } from '@reduxjs/toolkit';
import poemsReducer from './slices/poemsSlice';
// import booked from './bookedSlice';
import usersReducer from './slices/userSlice';
// import reviewsReducer from './slices/reviewSlice';

const rootReducer = combineReducers({
    users: usersReducer,
    poems: poemsReducer,
    // reviews: reviewsReducer,
    // booked,
});

export function createStore() {
    return configureStore({
        reducer: rootReducer,
    });
}
