import React from 'react'
import './Form.css'
import './F.css'

const Form = () => {
  return (
    <div>
       <div className="container content">
         <div className="Dash_middle">
           <div className="mid_box">
             
             <form className="form">
               <p className="title">Add News </p>
               <label>
                 <input
                  className="input"
                  type="text"
                  placeholder="News Title"
                />
              </label>

              <label>
                <textarea
                  className="input"
                  type="text"
                  placeholder="description"
                />
              </label>
              <label>
                <input
                  className="input"
                  type="file"
                />
              </label>
                <button className="submit" type="submit">
                  Add News
                </button>
            </form>
          </div>
          {/* <div className="mid_box"> */}
            {/* <div className="cplx-header">
              <h1>Welcome to News adding page</h1>
            </div> */}
            {/* <div className="cplx-container">
              <div className="cplx-admin-panel">
                <div className="cplx-icon">
                  <i className="fas fa-users-cog"></i>
                </div>
                <div className="cplx-info">
                  <h2>Share News With your friends</h2>
                  <p>
                    Share news which have true sources. And also don't forget make sure they are not false before sharing!! 
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
   </div>
  )
}

export default Form
