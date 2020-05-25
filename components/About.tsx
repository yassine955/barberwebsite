import React from "react";

type Props = {};

export const About: React.FunctionComponent<Props> = ({}) => {
  return (
    <div className='about_area' id='section2'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-xl-6 col-lg-6'>
            <div className='about_thumb'>
              <img src='img/about/about_lft.png' alt='' />
              <div className='opening_hour text-center'>
                <i className='flaticon-clock'></i>
                <h3>Opening Hour</h3>
                <p>Mon-Fri (9.00-11.00) Sat (10.00-4.00)</p>
              </div>
            </div>
          </div>
          <div className='col-xl-6 col-lg-6'>
            <div className='about_info'>
              <div className='section_title mb-20px'>
                <span>About Us</span>
                <h3>Experienced and Traditional Stylish Barber Shop</h3>
              </div>
              <p>
                Inspires employees and organizations to support causes they care
                about. We do this to bring more resources to the nonprofits that
                are changing our world.
              </p>
              <a href='#' className='boxed-btn3'>
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
