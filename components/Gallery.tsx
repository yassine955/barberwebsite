import React, { useState } from "react";

type Props = {};

export const Gallery: React.FunctionComponent<Props> = ({}) => {
  let [galleryState] = useState([
    {
      uri: "img/gallery/1.png",
    },
    {
      uri: "img/gallery/2.png",
    },
    {
      uri: "img/gallery/3.png",
    },
  ]);

  return (
    <div className='gallery_area' id='section4'>
      <div className='container'>
        <div className='row'>
          <div className='col-xl-12'>
            <div className='section_title2 text-center mb-90'>
              <i className='flaticon-scissors'></i>
              <h3>Our Gallery</h3>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-xl-12'>
            <div
              style={{
                width: "100%",
                display: "block",
              }}
              className='gallery_active owl-carousel'
            >
              <div className='row'>
                {galleryState.map((picture: any) => (
                  <div className='col-md-4'>
                    <img src={picture.uri} alt='' />
                    <div className='image_hover'></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
