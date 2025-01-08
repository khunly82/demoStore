import {createSlice} from "@reduxjs/toolkit";

const ToastState = createSlice({
    name: "toastState",
    initialState: {
        open: false,
        message: "",
        severity: "",
    },
    reducers: {
        showToast: (state, {payload}) => {
            return {
                ...payload,
                open: true
            };
        },
        hideToast: () => {
            return {
                open: false,
                message: "",
                severity: "",
            };
        }
    }
})

export const {showToast, hideToast} = ToastState.actions

export default ToastState.reducer;