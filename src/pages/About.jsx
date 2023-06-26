import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
  return (
    <>
      <div className='container py-5 my-5'>
        <div className='row'>
          <div className='col-md-6'>
            <h1 className='text-primary fw-bold mb-4'>About Us</h1>
            <p className='lead'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore adipisci at voluptas
              inventore autem eaque explicabo unde dolores nemo recusandae non vitae vel aperiam rem
              ad labore, eos placeat! Optio illum quas sint obcaecati, provident hic et, explicabo 
              doloremque nemo animi suscipit laudantium officia! Rem commodi recusandae reprehenderit
              a sit cumque repellat repudiandae. Magnam at saepe a delectus incidunt optio mollitia 
              fugit molestias eos quia provident sint consequatur maxime totam, deserunt nihil! Totam
              expedita nesciunt alias dignissimos exercitationem! Nostrum suscipit est delectus rem.
            </p>
            <NavLink to='/contact' className="btn btn-outline-primary">
              Contact Us
            </NavLink>
          </div>
          <div className="col-md-6">
            <img src="https://media.istockphoto.com/id/618946910/photo/colleagues-at-business-meeting-in-conference-room.jpg?s=612x612&w=0&k=20&c=-Zu4ANbegsx10AWTozKoaGIgGOj1qS-h6nwJHRtWM0Y=" alt="" height="400px" width="400px" />
          </div>
        </div>
      </div>
    </>
  )
}

export default About