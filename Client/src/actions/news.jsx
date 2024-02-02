import * as api from '../api';

//Action creators
export const getNews = () => async (dispatch) => {
    try{
        const { data } = await api.fetchNews();

        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch(error){
        console.log(error.message);
    }    
}

export const createNew = (news) => async (dispatch) => {
    try {
        const { data } = await api.createNew(news);

        dispatch({ type: 'CREATE', payload: data });
    } catch (error) {
        console.log(error);
    }
}