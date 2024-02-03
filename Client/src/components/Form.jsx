import React, { useState } from 'react'
import './Form.css'
import FileBase from 'react-file-base64'
import { useDispatch} from 'react-redux'
import { createNew } from '../actions/news'

const Form = () => {
    const [ newData, setNewData ] = useState({
        title: '', 
        message: '', 
        creator: '', 
        tags: '', 
        selectedFile: ''
    })

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(newData)
        dispatch(createNew(newData));
    }

    const handleChange = (e) => {
        setNewData({ ...newData, [e.target.name]: e.target.value });
    };
    

    const clear = () => {

    }

  return (
        <div>           
            <div className="mb-3">
                <h1>NEWS Adding Field</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    {/* <label for="exampleFormControlInput1" class="form-label">Email address</label> */}
                    <input type="text" 
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="news title" 
                      name='title'
                      value={newData.title}
                      onChange={handleChange}
                  />
                </div>                 
                <div className="mb-3">
                    {/* <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label> */}
                    <textarea className="form-control" 
                    id="exampleFormControlTextarea1" 
                    placeholder="news description" 
                    name='message'
                    value={newData.message}
                    onChange={handleChange}
                  >
                    </textarea>
                </div>
                <div className="mb-3">
                    {/* <label for="exampleFormControlInput1" class="form-label">Email address</label> */}
                    <input type="text"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="news creator"
                      name='creator'
                      value={newData.creator}
                      onChange={handleChange}
                     />
                </div>
                <div className="mb-3">
                    {/* <label for="exampleFormControlInput1" class="form-label">Email address</label> */}
                    <input type="text" 
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="tag" 
                      name='tags'
                      value={newData.tags}
                      onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    {/* <label for="formFile" class="form-label">Default file input example</label> */}
                    {/* <input class="form-control"  */}
                     <FileBase
                        type="file"
                        name='selectedFile'
                        multiple={false}
                        onDone={({ base64 }) => setNewData({...newData, selectedFile: base64 })}
                        id="formFile"
                         />
                </div>
                <div class="mb-3">
                    <input type="submit"
                     className="btn btn-secondary"
                     onClick={handleSubmit}                   
                     value='Post'
                     />
                        
                    <button type="button"
                     className="btn btn-secondary ms-2"
                     onClick={clear}
                     >
                        Clear
                    </button>
                </div>
                </form>
        </div>
   
  )
}

export default Form;
