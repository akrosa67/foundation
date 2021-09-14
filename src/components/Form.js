// import React from 'react'
// import {useForm} from 'react-hook-form'

// const Form = () => {
//   const {register,handleSubmit } = useForm()
//   const submitForm = data => {

//     console.log(data)
//   }
//   return (
//     <div>
//       <form onSubmit={handleSubmit(submitForm)}>
//         <input type='text' name="name" {...register("name")} placeholder="Name" />

//         <input type="text" name="email" {...register("email")} placeholder="email" />

//         <input type="text" name="mobile" {...register("mobile")} placeholder="mobile" />
//     <input type='submit' value='Submit' />
//       </form>
//     </div>
//   )
// }

// export default Form

import React from "react";
import { useState, useEffect } from "react";
import "../css/FormStyles.css";
import classes from "../css/FoundationStyles.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required("First Name should be required please"),
  email: yup.string().email().required(),
  mobile: yup.string().min(4).max(15).required(),
  // confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
});

function Form() {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });
  console.log(errors);
  const submitData = (data) => console.log(data);

  return (
    <div>
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center"></div>
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="row no-gutters">
                <div className="col-lg-8 col-md-7 order-md-last d-flex align-items-stretch">
                  <div className="contact-wrap w-100 p-md-5 p-4">
                    <h3 className="mb-4">Get in touch</h3>
                    <div id="form-message-warning" className="mb-4"></div>
                    <div id="form-message-success" className="mb-4">
                      Your message was sent, thank you!
                    </div>
                    <form
                      // method="POST"
                      // noValidate
                      // autoComplete="off"
                      onSubmit={handleSubmit(submitData)}
                      id="contactForm"
                      name="contactForm"
                      className="contactForm"
                    >
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="label">Name</label>

                            <input
                              type="text"
                              className="form-control"
                              name="name"
                              {...register("name")}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="label" htmlFor="email">
                              Email Address
                            </label>
                            <input
                              className="form-control"
                              id="email"
                              name="email"
                              {...register("email")}
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label className="label" htmlFor="mobile">
                              Mobile
                            </label>
                            <input
                              className="form-control"
                              id="mobile"
                              name="mobile"
                              {...register("mobile")}
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label className="label" htmlFor="message">
                              Message
                            </label>
                            <textarea className="form-control"></textarea>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <input
                              type="submit"
                              value="Submit"
                              className="btn btn-primary"
                            />
                            <div className="submitting"></div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>

                <div className="col-lg-4 col-md-5 d-flex align-items-stretch">
                  <div className="info-wrap bg-primary w-100 p-md-5 p-4">
                    <h3>Let's get in touch</h3>
                    <p className="mb-4">
                      We're open for any suggestion or just to have a chat
                    </p>
                    <div className="dbox w-100 d-flex align-items-start">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <a href="https://goo.gl/maps/KVHrUnmucf55RCJh8">
                          <span className="fa fa-map-marker"></span>
                        </a>
                      </div>
                      <div className="text pl-3">
                        <p>
                          <span>Address:</span>
                          <br />
                          Lead integrated business Pvt.Ltd.No.20,Appar
                          st,Kamakodi nagar, Valasaravakkam, Chenevi-87
                        </p>
                      </div>
                    </div>
                    <div className="dbox w-100 d-flex align-items-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <a href="tel://1234567920">
                          <span className="fa fa-phone"></span>
                        </a>
                      </div>
                      <div className="text pl-3">
                        <p>
                          <span>Phone:</span>
                          <br />
                          <a href="tel://1234567920">+91 9876543210</a>
                        </p>
                      </div>
                    </div>
                    <div className="dbox w-100 d-flex align-items-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <a href="mailto:contact@leadfoundation.in">
                          <span className="fa fa-paper-plane"></span>
                        </a>
                      </div>
                      <div className="text pl-3">
                        <p>
                          <span>Email:</span>
                          <br />
                          <a href="mailto:contact@leadfoundation.in">
                            contact@leadfoundation.in
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Form;

// // import React, { useState } from "react";
// // import validator from 'validator'

// // const App = () => {

// //   const [emailError, setEmailError] = useState('')
// //   const validateEmail = (e) => {
// //     var email = e.target.value
// //     console.log(email)

// //     if (validator.isEmail(email)) {
// //       setEmailError('Valid Email :)')
// //     } else {
// //       setEmailError('Enter valid Email!')
// //     }
// //   }
// //   return (
// //     <div style={{
// //       margin: 'auto',
// //       marginLeft: '300px',
// //     }}>
// //       <pre>
// //         <h2>Validating Email in ReactJS</h2>
// //         <span>Enter Email: </span><input type="text" id="userEmail"
// //         onChange={(e) => validateEmail(e)}></input> <br />
// //         <span style={{
// //           fontWeight: 'bold',
// //           color: 'red',
// //         }}>{emailError}</span>
// //       </pre>
// //     </div>
// //   );
// // }

// // export default App

// // import * as React from "react";
// // import { useForm } from "react-hook-form";

// // export default function App() {
// //   const { register, handleSubmit } = useForm();
// //   const onSubmit = (data) => console.log(data);

// //   return (
// //     <form onSubmit={handleSubmit(onSubmit)}>
// //       <input {register("firstName", { required: true })} placeholder="First name" />

// //       <input {register("lastName", { minLength: 2 })} placeholder="Last name" />

// //       <select {register("category")}>
// //         <option value="">Select</option>
// //         <option value="A">Category A</option>
// //         <option value="B">Category B</option>
// //       </select>

// //       <input type="submit" />
// //     </form>
// //   );
// // }
