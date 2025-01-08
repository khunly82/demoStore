import {Alert, Snackbar} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {hideToast} from "../store/toastState.js";


const Toast = () => {
    const { open, message, severity } = useSelector(state => state.toast)
    const dispatch = useDispatch();

    return <Snackbar open={open} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} autoHideDuration={6000}>
        <Alert onClose={() => dispatch(hideToast())} severity={severity}>{ message }</Alert>
    </Snackbar>
}

export default Toast;