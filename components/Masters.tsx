import React from "react";

type Props = {};

export const Masters: React.FunctionComponent<Props> = ({}) => {
  return (
    <div className='cutter_muster' id='section6'>
      <div className='container'>
        <div className='row'>
          <div className='col-xl-12'>
            <div className='section_title2 text-center mb-90'>
              <i className='flaticon-scissors'></i>
              <h3>Our Cutter Masters</h3>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-xl-3 col-md-6 col-lg-3'>
            <div className='single_master'>
              <div className='thumb'>
                <img src='img/team/1.png' alt='' />
                <div className='social_link'>
                  <a href='#'>
                    <i className='fa fa-envelope'></i>
                  </a>
                  <a href='#'>
                    <i className='fa fa-twitter'></i>
                  </a>
                  <a href='#'>
                    <i className='fa fa-linkedin'></i>
                  </a>
                </div>
              </div>
              <div className='master_name text-center'>
                <h3>Macau Wilium</h3>
                <p>Massage Master</p>
              </div>
            </div>
          </div>
          <div className='col-xl-3 col-md-6 col-lg-3'>
            <div className='single_master'>
              <div className='thumb'>
                <img src='img/team/2.png' alt='' />
                <div className='social_link'>
                  <a href='#'>
                    <i className='fa fa-envelope'></i>
                  </a>
                  <a href='#'>
                    <i className='fa fa-twitter'></i>
                  </a>
                  <a href='#'>
                    <i className='fa fa-linkedin'></i>
                  </a>
                </div>
              </div>
              <div className='master_name text-center'>
                <h3>Dan Jacky</h3>
                <p>Mens Cut</p>
              </div>
            </div>
          </div>
          <div className='col-xl-3 col-md-6 col-lg-3'>
            <div className='single_master'>
              <div className='thumb'>
                <img src='img/team/3.png' alt='' />
                <div className='social_link'>
                  <a href='#'>
                    <i className='fa fa-envelope'></i>
                  </a>
                  <a href='#'>
                    <i className='fa fa-twitter'></i>
                  </a>
                  <a href='#'>
                    <i className='fa fa-linkedin'></i>
                  </a>
                </div>
              </div>
              <div className='master_name text-center'>
                <h3>Luka Luka</h3>
                <p>Mens Cut</p>
              </div>
            </div>
          </div>
          <div className='col-xl-3 col-md-6 col-lg-3'>
            <div className='single_master'>
              <div className='thumb'>
                <img src='img/team/4.png' alt='' />
                <div className='social_link'>
                  <a href='#'>
                    <i className='fa fa-envelope'></i>
                  </a>
                  <a href='#'>
                    <i className='fa fa-twitter'></i>
                  </a>
                  <a href='#'>
                    <i className='fa fa-linkedin'></i>
                  </a>
                </div>
              </div>
              <div className='master_name text-center'>
                <h3>Rona Dana</h3>
                <p>Ladies Cut</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
