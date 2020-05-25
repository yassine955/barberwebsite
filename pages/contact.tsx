import React, { useState } from "react";
import { Layout } from "../components/Layout";
import axios from "axios";

type Props = {};

const Contact: React.FunctionComponent<Props> = ({}) => {
  let [name, setName] = useState("");
  let [yourname, setYourName] = useState("");
  let [email, setEmail] = useState("");
  let [subject, setSubject] = useState("");

  let data = {
    name,
    fullName: yourname,
    email,
    subject,
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
      <div className='bradcam_area breadcam_bg overlay2'>
        <h3>contact us</h3>
      </div>

      <section className='contact-section'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <h2 className='contact-title'>Get in Touch</h2>
            </div>
            <div className='col-lg-8'>
              <form className='form-contact contact_form'>
                <div className='row'>
                  <div className='col-12'>
                    <div className='form-group'>
                      <textarea
                        className='form-control w-100'
                        name='message'
                        id='message'
                        placeholder=' Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className='col-sm-6'>
                    <div className='form-group'>
                      <input
                        className='form-control valid'
                        name='name'
                        id='name'
                        type='text'
                        placeholder='Enter your name'
                        value={yourname}
                        onChange={(e) => setYourName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className='col-sm-6'>
                    <div className='form-group'>
                      <input
                        className='form-control valid'
                        name='email'
                        id='email'
                        type='email'
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className='col-12'>
                    <div className='form-group'>
                      <input
                        className='form-control'
                        name='subject'
                        id='subject'
                        type='text'
                        placeholder='Enter Subject'
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className='form-group mt-3'>
                  <button
                    type='submit'
                    className='button button-contactForm boxed-btn'
                    onClick={FormSubmitHandler}
                  >
                    Send
                  </button>
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

export default Contact;
