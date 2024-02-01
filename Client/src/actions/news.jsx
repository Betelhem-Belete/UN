import * as api from '../api';

//Action creators
export const getNews = () => async (dispatch) => {
    try{
        const { data } = await api.fetchNews();

        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch(error){

    }    
}