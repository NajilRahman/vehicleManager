import React from 'react';
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <>
      <footer className=" text-center text-lg-start fixed-end mt-5 bg-black">
        <div className="container p-4">
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-4 mb-md-0 ">
              <h5 className="text-uppercase mb-0 text-white">Vehicle Manage</h5>
              <br />
              <p>Vehicle management focuses on efficiently overseeing a fleet to optimize performance and reduce costs. It includes scheduling maintenance, tracking fuel usage, and monitoring driver behavior. By using technology like GPS and fleet management software, organizations can enhance productivity, minimize downtime, and improve overall operational efficiency.</p>
            </div>

            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase text-white">Pages</h5>
              <br />
              <ul className="list-unstyled mb-0 ">
                <li>
                  <Link to="/garage" className="text-body text-black">Garage</Link>
                </li>
                <li>
                  <Link to="/" className="text-body text-black">Landing</Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-5 text-white">Contact Us</h5>

              <ul className="list-unstyled">
                <li><textarea name="" id="" className='form-control border-0 bg-light text-white' placeholder='Send Message to Us'></textarea></li>
                <li><button className='btn btn-dark   rounded-0 w-100 rounded-2 mt-2 border-0'>Send</button></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
          © 2020 Copyright:
          <a className="text-body" href="/">MediaPlayer.com</a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
