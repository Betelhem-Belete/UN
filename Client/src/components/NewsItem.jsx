import markzukemberg from '../assets/mark-zukemberg.jpg';
import './NewsItem.css'


const NewsItem = ({ singleNew }) => {
  return (
      <div className="card mb-3 d-inline-block my-3 mx-3 px-2 py-2">
        <img src={ singleNew.selectedFile }  className="card-img-top" alt="mark" />
        <div className="card-body">
          <h5 className="card-title">{singleNew.title}</h5>
          <p className="card-text">{singleNew.message}</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
  )
}

export default NewsItem