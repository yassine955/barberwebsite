import React from "react";

type Props = {};

export const FindUs: React.FunctionComponent<Props> = ({}) => {
  return (
    <div className='find_us_area find_bg_1' id='section7'>
      <div className='container'>
        <div className='row'>
          <div className='col-xl-5 offset-xl-7 col-lg-6 offset-lg-6'>
            <div className='find_info'>
              <h3 className='find_info_title'>How to Find Us</h3>
              <div className='single_find d-flex'>
                <div className='icon'>
                  <i className='flaticon-placeholder'></i>
                </div>
                <div className='find_text'>
                  <h3>Location</h3>
                  <p>200, A-block, Green road, USA</p>
                </div>
              </div>
              <div className='single_find d-flex'>
                <div className='icon'>
                  <i className='flaticon-phone-call'></i>
                </div>
                <div className='find_text'>
                  <h3>Call Us</h3>
                  <p>+10 378 478 2789</p>
                </div>
              </div>
              <div className='single_find d-flex'>
                <div className='icon'>
                  <i className='flaticon-paper-plane'></i>
                </div>
                <div className='find_text'>
                  <h3>Mail Us</h3>
                  <p>contact@barbershop.com</p>
                </div>
              </div>
              <div className='single_find'>
                <div className='book_btn'>
                  <a className='popup-with-form' href='#test-form'>
                    Make an Appointment
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
