import React from "react";

type Props = {};

export const Slider: React.FunctionComponent<Props> = ({}) => {
  return (
    <div className='slider_area' id='section1'>
      <div className='single_slider d-flex align-items-center justify-content-center slider_bg_1 overlay2'>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-12'>
              <div className='slider_text text-center'>
                <img src='img/banner/barber_text.png' alt='' />
                <h3>Best Barber in your Town</h3>
                <p>Professional Care</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
