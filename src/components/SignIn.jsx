import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function SignIn() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="outline-primary" onClick={handleShow}>
        <span className='fa fa-sign-in ms-2'>Sign In</span>
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login Page</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Button variant="primary w-100" className='mb-3' onClick={handleShow}>
        <span className="fa fa-google">Sign In with google</span>
        </Button>
        <Button variant="primary w-100" className='mb-3' onClick={handleShow}>
        <span className="fa fa-facebook">Sign In with Facebook</span>
        </Button>
        <form>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div><br />
            <button type="button" className="btn btn-outline-primary w-100">Login</button>
        </form>

        </Modal.Body>
      </Modal>
    </>
  );
}

export default SignIn;