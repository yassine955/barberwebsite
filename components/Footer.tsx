import React from "react";

type Props = {};

export const Footer: React.FunctionComponent<Props> = ({}) => {
  return (
    <footer className='footer'>
      <div className='footer_top'>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-3 col-md-6 col-lg-3'>
              <div className='footer_widget'>
                <h3 className='footer_title'>Join With Us</h3>
                <p className='footer_text doanar'>
                  {" "}
                  <a className='first' href='#'>
                    Make Appointment
                  </a>
                  <a href='#'>+10 378 478 2789</a>
                </p>
              </div>
            </div>
            <div className='col-xl-3 col-md-6 col-lg-3'>
              <div className='footer_widget'>
                <h3 className='footer_title'>address</h3>
                <p className='footer_text'>
                  200, A-block, Green road, USA +10 367 267 2678
                  <a className='domain' href='#'>
                    contact@nonprofit.com
                  </a>
                </p>
                <div className='socail_links'>
                  <ul>
                    <li>
                      <a href='#'>
                        <i className='fa fa-facebook-square'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='fa fa-twitter'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='fa fa-instagram'></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-xl-2 col-md-6 col-lg-2'>
              <div className='footer_widget'>
                <h3 className='footer_title'>Navigation</h3>
                <ul>
                  <li>
                    <a href='#'>Home</a>
                  </li>
                  <li>
                    <a href='#'>Rooms</a>
                  </li>
                  <li>
                    <a href='#'>About</a>
                  </li>
                  <li>
                    <a href='#'>News</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-xl-4 col-md-6 col-lg-4'>
              <div className='footer_widget'>
                <h3 className='footer_title'>Newsletter</h3>
                <form action='#' className='newsletter_form'>
                  <input type='text' placeholder='Enter your mail' />
                  <button type='submit'>Sign Up</button>
                </form>
                <p className='newsletter_text'>
                  Subscribe newsletter to get updates
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='copy-right_text'>
        <div className='container'>
          <div className='footer_border'></div>
          <div className='row'>
            <div className='col-xl-12'>
              <p className='copy_right text-center'>
                <i className='fa fa-heart-o' aria-hidden='true'></i> by{" "}
                <a href='https://colorlib.com' target='_blank'>
                  Colorlib
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
