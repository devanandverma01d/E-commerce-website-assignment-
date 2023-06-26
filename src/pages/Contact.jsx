import React from 'react'

const Contact = () => {
  return (
    <div>
      <div className='container mb-5'>
        <div className='row'>
          <div className='col-12'>
            <h1 className='text-center'>Have Some questions?</h1>
            <hr />
          </div>
        </div>
        <div className='row my-10'>
          <div className='col-md-6'>
            <img src="https://e7.pngegg.com/pngimages/858/6/png-clipart-box-animation-question-mark-box-miscellaneous-presentation-thumbnail.png" alt="" />
          </div>
          <div className='col-md-6'>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Full Name</label>
              <input type="text" className="form-control" id="name" placeholder="Devanand Verma" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="devanandverma01d@gmail.com" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
            </div>
            <button type='button' className='btn btn-outline-primary'>Send message</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact