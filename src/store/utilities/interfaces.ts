export interface appStateInterface{
    isPageLoading:boolean;
    isUserAuthenticated:boolean;
    alertState:boolean;
    alertMessage:string;
    severity:string;
    token:string | null;
}

export const appState:appStateInterface = {
    isPageLoading:false,
    isUserAuthenticated:false,
    alertState:false,
    alertMessage:"",
    severity:"",
    token:null
}
