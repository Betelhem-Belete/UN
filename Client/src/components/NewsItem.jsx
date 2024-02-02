import markzukemberg from '../assets/mark-zukemberg.jpg';
import './NewsItem.css'
import 

const NewsItem = () => {
  return (
      <div className="card mb-3 d-inline-block my-3 mx-3 px-2 py-2">
        <img src={ markzukemberg }  className="card-img-top" alt="mark" />
        <div className="card-body">
          <h5 className="card-title">Zukemburg sued</h5>
          <p className="card-text">CEO of Snap, TikTok, Discord and Facebook Mark Zukemburg got sued. The judge said that "You have a blood in your hand".</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
  )
}

export default NewsItem