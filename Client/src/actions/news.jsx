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

export const editNew = (id, news) => async (dispatch) => {
    try {
        const { data} = await api.editNew(id, news);

        dispatch( { type: 'UPDATE', payload: data})
    } catch (error) {
        console.log(error.message);
    }
} 