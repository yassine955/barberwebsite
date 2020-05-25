import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import LinkRouter from "next/link";

type Props = {};

export const Header: React.FunctionComponent<Props> = ({}) => {
  return (
    <header>
      <div className='header-area' id='section1'>
        <div id='sticky-header' className='main-header-area'>
          <div className='container-fluid p-0'>
            <div className='row align-items-center no-gutters'>
              <div className='col-xl-3 col-lg-3'>
                <div className='logo-img'>
                  <LinkRouter href='/'>
                    <a href='index.html'>
                      <img src='img/logo.png' alt='' />
                    </a>
                  </LinkRouter>
                </div>
              </div>
              <div className='col-xl-6 col-lg-6'>
                <div className='main-menu  d-none d-lg-block'>
                  <nav>
                    <ul id='navigation'>
                      <Link
                        activeClass='active'
                        to='section1'
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                      >
                        <li>
                          <a className='active' href='#'>
                            home
                          </a>
                        </li>
                      </Link>
                      <Link
                        activeClass='active'
                        to='section2'
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                      >
                        <li>
                          <a href='#'>About</a>
                        </li>
                      </Link>
                      <Link
                        activeClass='active'
                        to='section3'
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                      >
                        <li>
                          <a href='#'>service</a>
                        </li>
                      </Link>
                      <Link
                        activeClass='active'
                        to='section4'
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                      >
                        <li>
                          <a href='#'>Gallery</a>
                        </li>
                      </Link>
                      <Link
                        activeClass='active'
                        to='section6'
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                      >
                        <li>
                          <a href='#'>Masters</a>
                        </li>
                      </Link>
                      <Link
                        activeClass='active'
                        to='section7'
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                      >
                        <li>
                          <a href='#'>Contact</a>
                        </li>
                      </Link>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className='col-xl-3 col-lg-3 d-none d-lg-block'>
                <div className='book_room'>
                  <div className='book_btn d-none d-lg-block'>
                    <Link
                      activeClass='active'
                      to='section7'
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={500}
                    >
                      <a className='popup-with-form' href='#'>
                        Make an Appointment
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className='col-12'>
                <div className='mobile_menu d-block d-lg-none'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
