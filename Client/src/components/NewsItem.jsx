// import markzukemberg from '../assets/mark-zukemberg.jpg';
import './NewsItem.css';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { deleteNew } from '../actions/news';

const NewsItem = ({ singleNew, setCurrentId }) => {
  const dispatch = useDispatch();

  return (
    <div className="card mb-3 d-inline-block my-3 mx-3 px-2 py-2">
      <img src={singleNew.selectedFile} className="card-img-top" alt="mark" />
      <div className="card-body">
        <h6 className="card-title">{singleNew.creator}</h6>
        <h5 className="card-title">{singleNew.title}</h5>
        <p className="card-text">{singleNew.message}</p>
        <p className="card-text">
          <i>{singleNew.tags.map((tag) => `#${tag}`)}</i>
        </p>
        <p className="card-text">{moment(singleNew.createdAt).fromNow()}</p>
        <button
          type="button"
          className="btn btn-primary ms-2"
          onClick={() => setCurrentId(singleNew._id)}
        >
          Edit
        </button>
        <button
          type="button"
          className="btn btn-danger ms-5"
          onClick={() => dispatch(deleteNew(singleNew._id))}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default NewsItem;
