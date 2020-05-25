import React from "react";

type Props = {};

export const Service: React.FunctionComponent<Props> = ({}) => {
  return (
    <div className='service_area' id='section3'>
      <div className='container'>
        <div className='row'>
          <div className='col-xl-12'>
            <div className='section_title2 text-center mb-90'>
              <i className='flaticon-scissors'></i>
              <h3>our service</h3>
            </div>
          </div>
        </div>
        <div className='white_bg_pos'>
          <div className='row'>
            <div className='col-xl-6'>
              <div className='single_service d-flex justify-content-between align-items-center'>
                <div className='service_inner d-flex align-items-center'>
                  <div className='thumb'>
                    <img src='img/service/1.png' alt='' />
                  </div>
                  <span>Men’s Facial</span>
                </div>
                <p>………………………..$15</p>
              </div>
              <div className='single_service d-flex justify-content-between align-items-center'>
                <div className='service_inner d-flex align-items-center'>
                  <div className='thumb'>
                    <img src='img/service/2.png' alt='' />
                  </div>
                  <span>Clean Cut</span>
                </div>
                <p>………………………..$15</p>
              </div>
              <div className='single_service d-flex justify-content-between align-items-center'>
                <div className='service_inner d-flex align-items-center'>
                  <div className='thumb'>
                    <img src='img/service/3.png' alt='' />
                  </div>
                  <span>Close Shave</span>
                </div>
                <p>………………………..$15</p>
              </div>
              <div className='single_service d-flex justify-content-between align-items-center'>
                <div className='service_inner d-flex align-items-center'>
                  <div className='thumb'>
                    <img src='img/service/4.png' alt='' />
                  </div>
                  <span>Razor Cut</span>
                </div>
                <p>………………………..$15</p>
              </div>
              <div className='single_service d-flex justify-content-between align-items-center'>
                <div className='service_inner d-flex align-items-center'>
                  <div className='thumb'>
                    <img src='img/service/5.png' alt='' />
                  </div>
                  <span>Face Massage</span>
                </div>
                <p>………………………..$15</p>
              </div>
            </div>
            <div className='col-xl-6'>
              <div className='single_service d-flex justify-content-between align-items-center'>
                <div className='service_inner d-flex align-items-center'>
                  <div className='thumb'>
                    <img src='img/service/6.png' alt='' />
                  </div>
                  <span>classNameic haircut</span>
                </div>
                <p>………………………..$15</p>
              </div>
              <div className='single_service d-flex justify-content-between align-items-center'>
                <div className='service_inner d-flex align-items-center'>
                  <div className='thumb'>
                    <img src='img/service/7.png' alt='' />
                  </div>
                  <span>Haircut and shampoo</span>
                </div>
                <p>………………………..$15</p>
              </div>
              <div className='single_service d-flex justify-content-between align-items-center'>
                <div className='service_inner d-flex align-items-center'>
                  <div className='thumb'>
                    <img src='img/service/8.png' alt='' />
                  </div>
                  <span>Hair treatment</span>
                </div>
                <p>………………………..$15</p>
              </div>
              <div className='single_service d-flex justify-content-between align-items-center'>
                <div className='service_inner d-flex align-items-center'>
                  <div className='thumb'>
                    <img src='img/service/9.png' alt='' />
                  </div>
                  <span>Beard trimming</span>
                </div>
                <p>………………………..$15</p>
              </div>
              <div className='single_service d-flex justify-content-between align-items-center'>
                <div className='service_inner d-flex align-items-center'>
                  <div className='thumb'>
                    <img src='img/service/10.png' alt='' />
                  </div>
                  <span>Beard and moustache</span>
                </div>
                <p>………………………..$15</p>
              </div>
            </div>
            <div className='col-xl-12'>
              <div className='book_btn text-center'>
                <a className='boxed-btn3 popup-with-form' href='#test-form'>
                  Make an Appointment
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
