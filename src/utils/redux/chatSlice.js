import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_CHAT } from "../config";

// this slice for storing liveChat Messages and removing when certain offset number met
const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        messages: [],
    },
    reducers: {
        addMessage: (state, action) => {
            state.messages.splice(OFFSET_LIVE_CHAT, 1)
            state.messages.unshift(action.payload)
        }
    }
})

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;