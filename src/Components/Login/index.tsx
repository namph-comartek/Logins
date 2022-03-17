import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './login.css';
import '../../index.css';
import * as Yup from 'yup';

function Login() {

  return (

      <>
        <div className='overplay'>
            <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={Yup.object().shape({
                email: Yup.string()
                  .matches(/^[A-z0-9._%+-]+@[A-Z0-9.-]+\.[A-Za-z]{6,}$/)
                  .required(
                    "Please valid email. One uppercase, one lowercase, one special character and no spaces"
                  ),
                password: Yup.string()
                  .matches(/^[A-z0-9@_]{6,20}$/)
                  .required("Please valid password. "),
              })}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({ isSubmitting }) => (
            <Form >
                <div className='con'>
                    <header className='head-con'>
                            <h2>Log In</h2>
                            <p>login here using your username and password</p>
                    </header>
                    <div className="field-set">

                    <span className="input-item">
                        <i className="fa fa-user-circle"></i>
                    </span>
                    <Field  className="form-input "  placeholder="@UserName"  name="email"/>
                    <ErrorMessage name="email" component="div" />
                        <br />
                        
                    <span className="input-item">
                        <i className="fa fa-key"></i>
                    </span>
                    <Field  className="form-input "  placeholder="Password" name="password" type="password"/>
                    <ErrorMessage name="password" component="div" />
                    {/* <span>
                        <i className="fa fa-eye" aria-hidden="true" typeof='button' id="eye"></i>
                    </span> */}

                    <br />
                    <button className="log-in"> Log In </button>
                    </div>

                    <div className="other">
                    <button className="btn submits frgt-pass">Forgot Password</button>
                    <button className="btn submits sign-up">Sign Up
                    </button>
                    </div>
                </div>
            </Form>
            )}

         </Formik>
     </div>
 );
      </>
    );
}

export default Login;