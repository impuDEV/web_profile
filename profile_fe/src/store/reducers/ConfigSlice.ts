import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface ConfigState {
    anchorEl: HTMLElement | null
    colorTheme: string
}

const initialState: ConfigState = {
    anchorEl: null,
    colorTheme: 'light'
}

export const configSlice = createSlice({
    name: 'config',
    initialState,
    reducers: {
        showConfigMenu(state, action: PayloadAction<HTMLElement>) {
            // @ts-ignore
            state.anchorEl = action.payload
        },
        hideConfigMenu(state) {
            state.anchorEl = null
        },
        toggleThemeColor(state) {
            state.colorTheme = state.colorTheme === 'dark' ? 'light' : 'dark'
        }
    },
    extraReducers: {}
})

export default configSlice.reducer
export const {showConfigMenu, hideConfigMenu, toggleThemeColor} = configSlice.actions