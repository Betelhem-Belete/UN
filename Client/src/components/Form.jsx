import { useState, useEffect } from 'react';
import './Form.css';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { createNew, editNew } from '../actions/news';

const Form = ({ currentId, setCurrentId }) => {
  const [newData, setNewData] = useState({
    title: '',
    message: '',
    creator: '',
    tags: '',
    selectedFile: '',
  });
  const snew = useSelector((state) =>
    currentId ? state.news.find((n) => n._id === currentId) : null
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (snew) setNewData(snew);
  }, [snew]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newData);

    if (currentId) {
      dispatch(editNew(currentId, newData));
    } else {
      dispatch(createNew(newData));
    }
    clear();
  };

  const handleChange = (e) => {
    setNewData({ ...newData, [e.target.name]: e.target.value });
  };

  const clear = () => {
    setCurrentId(null);
    setNewData({
      creator: '',
      title: '',
      message: '',
      tags: '',
      selectedFile: '',
    });
  };

  return (
    <div>
      <div className="mb-3">
        <h1>{currentId ? 'Edit NEWS' : 'Add NEWS'}</h1>
      </div>
      <form onSubmit={handleSubmit} className="">
        <div className="mb-3">
          {/* <label for="exampleFormControlInput1" class="form-label">Email address</label> */}
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="news title"
            name="title"
            value={newData.title}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          {/* <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label> */}
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            placeholder="news description"
            name="message"
            value={newData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="mb-3">
          {/* <label for="exampleFormControlInput1" class="form-label">Email address</label> */}
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="news creator"
            name="creator"
            value={newData.creator}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          {/* <label for="exampleFormControlInput1" class="form-label">Email address</label> */}
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="tag"
            name="tags"
            value={newData.tags}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          {/* <label for="formFile" class="form-label">Default file input example</label> */}
          {/* <input class="form-control"  */}
          <FileBase
            type="file"
            name="selectedFile"
            multiple={false}
            value={newData.selectedFile}
            onDone={({ base64 }) =>
              setNewData({ ...newData, selectedFile: base64 })
            }
            id="formFile"
          />
        </div>
        <div className="mb-3">
          <input
            type="submit"
            className="btn btn-secondary"
            onClick={handleSubmit}
            value="Post"
          />

          <input
            type="button"
            value="clear"
            className="btn btn-danger ms-2"
            onClick={clear}
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
