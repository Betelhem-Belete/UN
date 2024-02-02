import React, { useState } from 'react'
import './Form.css'
import FileBase from 'react-file-base64'
import { useDispatch} from 'react-redux'
import { createNew } from '../actions/news'

const Form = () => {
    const [ newData, setNewData ] = useState({
        creator: '', 
        title: '', 
        message: '', 
        tags: '', 
        selectedFile: ''
    })

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createNew(newData));
    }

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
                      placeholder="news creator"
                      name='creator'
                      value={newData.creator}
                      onChange={(e) => setNewData({ ...newData, creator: e.target.value})}
                     />
                </div>
                <div className="mb-3">
                    {/* <label for="exampleFormControlInput1" class="form-label">Email address</label> */}
                    <input type="text" 
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="news title" 
                      name='title'
                      value={newData.title}
                      onChange={(e) => setNewData({ ...newData, title: e.target.value})}
                    />
                </div>
                
                <div className="mb-3">
                    {/* <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label> */}
                    <textarea className="form-control" 
                    name='message' 
                    id="exampleFormControlTextarea1" 
                    placeholder="news description" 
                    value={newData.message}
                    onChange={(e) => setNewData({ ...newData, message: e.target.value})}
                    rows="3">
                    </textarea>
                </div>
                <div className="mb-3">
                    {/* <label for="exampleFormControlInput1" class="form-label">Email address</label> */}
                    <input type="text" 
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Tag" 
                      name='tags'
                      value={newData.tags}
                      onChange={(e) => setNewData({ ...newData, tags: e.target.value})}
                    />
                </div>
                <div className="mb-3">
                    {/* <label for="formFile" class="form-label">Default file input example</label> */}
                    {/* <input class="form-control"  */}
                     <FileBase
                        type="file"
                        multiple={false}
                        onDone={({ base64 }) => setNewData({...newData, selectedFile: base64 })}
                        id="formFile"
                         />
                </div>
                <div class="mb-3 ">
                    <button type="submit"
                     className="btn btn-secondary"
                     name=''
                     
                     >
                        Post
                    </button>
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

export default Form
