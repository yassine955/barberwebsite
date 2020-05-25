import React, { useState } from "react";
import { Layout } from "../components/Layout";
import { Slider } from "../components/Slider";
import { About } from "../components/About";
import { Service } from "../components/Service";
import { Gallery } from "../components/Gallery";
import { VideoArea } from "../components/VideoArea";
import { Masters } from "../components/Masters";
import { FindUs } from "../components/FindUs";
import axios from "axios";

export default () => {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [phone, setPhone] = useState("");
  let [date, setDate] = useState("");
  let [time, setTime] = useState("");

  let data = {
    name,
    phone,
    email,
    date,
    time,
  };

  const FormSubmitHandler = () => {
    axios({
      method: "POST",
      url: "http://localhost:3000/api/mailer",
      data,
    }).then((res) => console.log(res));
  };

  return (
    <Layout>
      <Slider />
      <About />
      <Service />
      <Gallery />
      <VideoArea />
      <Masters />
      <FindUs />
      <section className='contact-section'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8'>
              <form
                id='test-form'
                className='white-popup-block mfp-hide'
                style={{ display: "flex !important", justifyContent: "center" }}
              >
                <div className='popup_box ' style={{ padding: 0 }}>
                  <div className='popup_inner'>
                    <h3>Make an Appointment</h3>
                    <form action='#'>
                      <div className='row'>
                        <div className='col-xl-6 col-md-6'>
                          <input
                            id='datepicker'
                            value={date}
                            placeholder='Date'
                            onChange={(e) => setDate(e.target.value)}
                          />
                        </div>
                        <div className='col-xl-6 col-md-6'>
                          <input
                            id='timepicker'
                            placeholder='time'
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                          />
                        </div>

                        <div className='col-xl-6 col-md-6'>
                          <input
                            type='text'
                            placeholder='Your name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>
                        <div className='col-xl-6 col-md-6'>
                          <input
                            type='text'
                            placeholder='Phone no'
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                          />
                        </div>
                        <div className='col-xl-12'>
                          <input
                            type='email'
                            placeholder='Your email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                        <div className='col-xl-12'>
                          <button
                            onClick={FormSubmitHandler}
                            type='submit'
                            className='boxed-btn3'
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </form>
            </div>
            <div className='col-lg-3 offset-lg-1'>
              <div className='media contact-info'>
                <span className='contact-info__icon'>
                  <i className='ti-home'></i>
                </span>
                <div className='media-body'>
                  <h3>Buttonwood, California.</h3>
                  <p>Rosemead, CA 91770</p>
                </div>
              </div>
              <div className='media contact-info'>
                <span className='contact-info__icon'>
                  <i className='ti-tablet'></i>
                </span>
                <div className='media-body'>
                  <h3>+1 253 565 2365</h3>
                  <p>Mon to Fri 9am to 6pm</p>
                </div>
              </div>
              <div className='media contact-info'>
                <span className='contact-info__icon'>
                  <i className='ti-email'></i>
                </span>
                <div className='media-body'>
                  <h3>support@colorlib.com</h3>
                  <p>Send us your query anytime!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
