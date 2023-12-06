import { togglePageLoading } from "../store/slices/AppState-slice";
import { useAppDispatch, useAppSelector } from "../store/store-hooks";
import axios from "axios";

export const useFormRequests = () => {
    const dispatch = useAppDispatch();
    const token = useAppSelector((state: { AppStateReducer: { token: any; }; }) => state.AppStateReducer.token);

    type fetchType = {
        url:string,
        method:string,
        data:string
    }

    const executeRequest = async ({ method, url, data }:fetchType) => {
        const requestHeader = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        dispatch(togglePageLoading());

        try {
            const response = await axios({
                method:method,
                url:url,
                data:data,
                headers: {
                    'Content-Type': 'application/json',

                },
            });

            if (response.status === 200) {
                return response.data;
            } else {
                throw new Error(`Unexpected response status: ${response.status}`);
            }
        } catch (error:any) {
            throw new Error(`Request error: ${error.message}`);
        } finally {
            dispatch(togglePageLoading());
        }
    };

    const post = async ({ url, data }:fetchType) => {
        return executeRequest({ method: "POST", url, data });
    };

    const put = async ({ url, data }:fetchType) => {
        return executeRequest({ method: "PUT", url, data });
    };



    return { post, put };
};
