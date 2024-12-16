import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
    name: "video",
    initialState: {
        videoDetails: []
    },
    reducers: {
        addDetails: (state, action) => {
            state.videoDetails = action.payload
        },
    }
})

export const { addDetails } = videoSlice.actions;
export default videoSlice.reducer;