import React from 'react'
import { actionCreators as loginAction } from '../../modules/login/reducer'
import { useDispatch } from "react-redux";

const header = () => {
    const dispatch = useDispatch();
  return (
    <div className="buttons has-text-right">
      <button
          className="button is-info"
          onClick={() => dispatch(loginAction.logout())}
      >
          Logout
      </button>
    </div>
  )
}

export default header