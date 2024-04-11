import {configureStore} from '@reduxjs/toolkit'
import ReduxSliceReducer from './ReduxSlice.js';
const ReduxStore = configureStore({
    reducer : {
        Assessment:ReduxSliceReducer
    }
});
export default ReduxStore