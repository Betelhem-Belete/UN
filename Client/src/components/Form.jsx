import React, { useState } from 'react'
import './Form.css'

const Form = () => {
    const [ newData, setNewData ] = useState({
        creator: '', title: '', message: '', tags: '', selectedFile: '',
    })
  return (
        <div>           
            <div className="mb-3">
                <h1>NEWS Adding Field</h1>
            </div>
            
                <div className="mb-3">
                    {/* <label for="exampleFormControlInput1" class="form-label">Email address</label> */}
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="NEWS Title" />
                </div>
                <div className="mb-3">
                    {/* <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label> */}
                    <textarea className="form-control" 
                    name='' 
                    id="exampleFormControlTextarea1" 
                    placeholder="NEWS Description" 
                    value={newData.creator}
                    onChange={}
                    rows="3">
                    </textarea>
                </div>
                <div class="mb-3">
                    {/* <label for="formFile" class="form-label">Default file input example</label> */}
                    <input class="form-control" type="file" id="formFile" />
                </div>
                <div class="mb-3 ">
                    <button type="button" class="btn btn-secondary">Add NEWS</button>
                </div>
        </div>
   
  )
}

export default Form
