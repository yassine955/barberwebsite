import React from "react";

type Props = {};

export const VideoArea: React.FunctionComponent<Props> = ({}) => {
  return (
    <div className='video_area' id='section5'>
      <div className='container-fluid p-0'>
        <div className='row align-items-center no-gutters'>
          <div className='col-xl-6 col-lg-6'>
            <div className='video_info'>
              <div className='about_info'>
                <div className='section_title mb-20px'>
                  <span>How we Work</span>
                  <h3>Watch the Video How we Work?</h3>
                </div>
                <p>
                  Inspires employees and organizations to support causes they
                  care about. We do this to bring more resources to the
                  nonprofits that are changing our world.
                </p>
                <a href='#' className='boxed-btn3'>
                  book now
                </a>
              </div>
            </div>
          </div>
          <div className='col-xl-6 col-lg-6'>
            <div className='video_thumb'>
              <div className='video_thumb_inner'>
                <img src='img/gallery/video.png' alt='' />
                <a
                  href='https://www.youtube.com/watch?v=I4NcwG-zusE'
                  className='popup-video'
                >
                  <i className='fa fa-play'></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
