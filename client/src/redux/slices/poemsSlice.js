import { createSlice } from '@reduxjs/toolkit';
import poemService from '../../app/services/poem.servise';

const poemsSlice = createSlice({
    name: 'poems',
    initialState: {
        entities: null,
        isLoading: true,
        error: null,
    },
    reducers: {
        poemsRequested: (state) => {
            state.isLoading = true;
        },
        poemsReceved: (state, action) => {
            state.entities = action.payload;
            state.isLoading = false;
        },
        poemsRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
    },
});
const { reducer: poemsReducer, actions } = poemsSlice;
const { poemsRequested, poemsReceved, poemsRequestFailed } = actions;

export const loadPoemsList = () => async (dispatch) => {
    dispatch(poemsRequested());
    try {
        const data = await poemService.get();
        dispatch(poemsReceved(data));
    } catch (error) {
        dispatch(poemsRequestFailed(error.message));
    }
};
export const getPoemsLoadingStatus = () => (state) => state.poems.isLoading;

// export const getPoemsById = (id) => (state) => {
//     const poems = state.poems.entities;
//     if (poems) {
//         return poems.find((poem) => poem._id === state.poems.id);
//     }
// };
export const getPoems = () => (state) => state.poems.entities;

export default poemsReducer;
