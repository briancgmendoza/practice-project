import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';
import '../../styles/_login.scss'
import ProgressiveImage from 'react-progressive-graceful-image'
import { useDispatch, useSelector } from 'react-redux'
import { IconButton, Tooltip } from '@mui/material'
import InfoIcon from '@material-ui/icons/Info'
import {
  GoogleLogin,
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from 'react-google-login'
import { system } from '../../utils/constants'
import { actionCreators as loginAction } from './reducer'
import { ApplicationState } from '../../store/reducer';

export function Login() {
  const dispatch = useDispatch()
  const isLoading = useSelector(
    (state: ApplicationState) => state.login.isLoading
  );
  const isAuthenticated = useSelector(
    (state: ApplicationState) => state.login.isAuthenticated
  );

  const handleSuccess = (
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => {
    const { googleId, profileObj } = response as GoogleLoginResponse
    const { imageUrl } = profileObj
    const { tokenId: googleIdToken } = response as GoogleLoginResponse
    dispatch(loginAction.googleLogin({ googleId, googleIdToken, imageUrl }))
  }

  const handleFailure = () => {
    dispatch(loginAction.googleLoginFailed())
  }

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="auth-login" data-testid="login-page-title">
      <div className="hero-body">
        <ProgressiveImage
          src="https://entrego-hubm.s3-ap-southeast-1.amazonaws.com/images/entrego-riders.jpg"
          placeholder="images/entrego-riders.jpg"
        >
          {(src: string) => (
            <div
              className="entrego-riders"
              style={{ backgroundImage: `url(${src})` }}
            >
              <div className="bg-orange">
                <div className="bg-blue">
                  <div className="container">
                    <div className="banner">
                      <div className="login-format">
                        <img
                          className="entrego-logo"
                          src="https://rec-data.kalibrr.com/logos/LDC3AY6PVYPWEJD4SMTGGC63GX96WNTQMGSHWJBX-5bad80fb.png"
                          alt=""
                        />
                        <h1
                          style={{
                            fontSize: 35,
                            transform: 'rotate(-25deg)',
                            position: 'fixed',
                            float: 'inline-start',
                            marginTop: '65px',
                          }}
                        >
                          Shop
                        </h1>
                        <div className="email-disclaimer">
                          <span>Please login using your <strong>registered work e-mail</strong>
                          </span>
                          <span>
                            <Tooltip title={system.LOGIN_EMAIL_DISCLAIMER}>
                              <IconButton aria-label="info-email-disclaimer">
                                <InfoIcon color="primary" fontSize="small" />
                              </IconButton>
                            </Tooltip>
                          </span>
                        </div>
                        <div>
                          <GoogleLogin
                            className="google-login-button"
                            clientId={
                              `${import.meta.env.VITE_REACT_APP_GOOGLE_CLIENT_ID}`
                            }
                            buttonText="Login via Google"
                            onSuccess={handleSuccess}
                            onFailure={handleFailure}
                          />
                        </div>
                        <div />
                        <div className="text-underline">
                          {/* <Link
                            to="/terms"
                            className="text-underline"
                          > */}
                          <pre>Terms of use. Privacy policy.</pre>
                          {/* </Link> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </ProgressiveImage>
      </div>
    </div>
  )
}
