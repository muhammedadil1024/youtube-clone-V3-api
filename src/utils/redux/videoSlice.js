import { createSlice } from "@reduxjs/toolkit";

// this slice is for storing details of each single video like subscribers, like
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