import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import useFetch from '../hooks/useFetch';

const SignIn = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  // isLogin is 'true' when we are in login page
  const isLogin = props.match.path === '/login';

  // api url end points
  const apiUrl = isLogin ? '/api/auth' : '/api/users';

  // page title
  const pageTitle = isLogin ? 'Sign In' : 'Sign Up';

  // url link
  const urlLink = isLogin ? '/register' : '/login';

  // link text
  const urlText = isLogin
    ? 'Need an account? Register here'
    : 'Have an account? Sign in here';

  // custom hook
  // data is response object
  // {
  //   isLoading: true/false,
  //   response: null or {},
  //   error: null or {}
  // }
  // destructuring data object
  // const [data, doFetch], doFetch is func from custom hook
  const [{ isLoading, response, error }, doFetch] = useFetch(apiUrl);
  // console.log('useFetch', isLoading, error, response);

  // initial state when component first render
  // const [isSubmitting, setIsSubmitting] = useState(false);

  // // this func gets render on second time
  // useEffect(() => {
  //   // validating in useEffect every time if we are submitting or not
  //   // we want to make post request when isSubmitting is true on form submit
  //   // This validation is preventing on making auto post request on initial render
  //   if (!isSubmitting) {
  //     // Validating the value when useEffect gets render
  //     return; // exit the func
  //   }
  //   Make request with axios
  // }, [isSubmitting]);

  const handleSetEmail = e => {
    setEmail(e.target.value);
  };

  const handleSetPassword = e => {
    setPassword(e.target.value);
  };

  const handleSetUsername = e => {
    setName(e.target.value)
  }

  const handleFormSubmit = e => {
    e.preventDefault();

    const user = isLogin ?  { email, password } : { email, password, name };

    // api request func from useFetch hook
    doFetch({
      method: 'post',
      data: {
        user: user
      },
    });

    // to clear the form values
    setEmail('');
    setPassword('');
  };

  return (
    <div className='auth-page'>
      <div className='container page'>
        <div className='row'>
          <div className='col-md-6 offset-md-3 col-xs-12'>
            <h1 className='text-xs-center'>{pageTitle}</h1>

            <form onSubmit={handleFormSubmit}>
              {/** <fieldset>s have no borders, padding, or margin so they can be easily used as wrappers 
              for individual inputs or groups of inputs. */}
              <fieldset>
                {!isLogin && (
                  <fieldset className='form-group'>
                    <input
                      type='text'
                      className='form-control form-control-lg'
                      placeholder='Username'
                      value={name}
                      onChange={handleSetUsername}
                    />
                  </fieldset>
                )}

                <fieldset className='form-group'>
                  <input
                    type='email'
                    className='form-control form-control-lg'
                    placeholder='Email'
                    value={email}
                    onChange={handleSetEmail}
                  />
                </fieldset>
                <fieldset className='form-group'>
                  <input
                    type='password'
                    className='form-control form-control-lg'
                    placeholder='Password'
                    value={password}
                    onChange={handleSetPassword}
                  />
                </fieldset>

                <button
                  className='btn btn-success btn-lg mb-2'
                  type='submit'
                  disabled={isLoading}
                >
                  {pageTitle}
                </button>
              </fieldset>
            </form>

            <p className='text-xs-center'>
              <Link to={urlLink}>{urlText}</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
