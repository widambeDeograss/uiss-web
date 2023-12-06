import axios from "axios";
import { togglePageLoading } from "../store/slices/AppState-slice";
import { useAppDispatch, useAppSelector } from "../store/store-hooks";

export const useDataFetch = () => {
    const dispatch = useAppDispatch();
    const token = useAppSelector((state: { AppStateReducer: { token: any; }; }) => state.AppStateReducer.token);

    type fetchType = {
        url:string
    }

    const fetchData = async ({ url }: fetchType) => {
        try {
            dispatch(togglePageLoading());

            const requestHeader = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };
            const response = await axios.get(url, requestHeader);


            // Check the HTTP status code and handle accordingly
            if (response.status === 200 || response.status === 400) {
                return response.data;
            } else {
                throw new Error(`Unexpected response status: ${response.status}`);
            }
        } catch (error:any) {
            throw new Error(`Data fetch error: ${error.message}`);
        } finally {
            dispatch(togglePageLoading());
        }
    };

    return { fetchData };
};
