import { createSlice } from "@reduxjs/toolkit";
import { appState, appStateInterface } from "../utilities/interfaces";

const initialState:appStateInterface = appState;


const InnitialAuthentication = () => {
    if (localStorage.getItem("token")){
        initialState.token = localStorage.getItem("token");
        return true
    }else {
        return false
    }

}


initialState.isUserAuthenticated = InnitialAuthentication();

export const AppStateSlice = createSlice({
    name:'AppState',
    initialState,
    reducers:{
        togglePageLoading:(state: { isPageLoading: boolean; }) => {
            state.isPageLoading = !state.isPageLoading;
        },
        setAuthentication:(state: { token: any; isUserAuthenticated: boolean; }, action: { payload: any; }) => {
          const {payload} = action;
          state.token = payload.token;
          state.isUserAuthenticated = !state.isUserAuthenticated;
        },
        toggleAlert: (state: { alertState: boolean; }) => {
            state.alertState = !state.alertState
        },
        displayAlert: (state: { alertMessage: any; severity: string; }, {payload}: any) => {
            state.alertMessage = payload.message;
            let severity = '';
            switch(payload.severity){
                case 'success':
                    severity = 'success';
                    break;
                case 'warning':
                    severity = 'warning';
                    break;
                case 'failed':
                    severity = 'error';
                    break;
                case 'error':
                    severity = 'error';
                    break;
                default:
                    severity = 'primary'

            }
            state.severity = severity;
        }
    }
});

export const {togglePageLoading, setAuthentication, toggleAlert, displayAlert } = AppStateSlice.actions;
export default AppStateSlice.reducer;
