export default (news = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...news, action.payload];
        default:
            return news;
    }
}