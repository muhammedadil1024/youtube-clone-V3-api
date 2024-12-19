import { createSlice } from "@reduxjs/toolkit";

// this slice contains menu state for toggling or closing
const appSlice = createSlice({
    name: 'app',
    initialState: {
        isMenuOpen: true,
    },
    reducers: {
        toggleMenu: (state) => {
            state.isMenuOpen = !state.isMenuOpen;
        },
        closeMenu: (state) => {
            state.isMenuOpen = false;
        },
    }
})

export const { toggleMenu, closeMenu } = appSlice.actions;
export default appSlice.reducer;