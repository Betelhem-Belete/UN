export default (news = [], action) => {
  switch (action.type) {
    case 'DELETE':
      return news.filter((singleNew) => singleNew._id !== action.payload);
    case 'UPDATE':
      return news.map((singleNew) =>
        singleNew._id === action.payload._id ? action.payload : singleNew
      );
    case 'FETCH_ALL':
      return action.payload;
    case 'CREATE':
      return [...news, action.payload];
    default:
      return news;
  }
};
