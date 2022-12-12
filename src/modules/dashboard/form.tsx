import { TextareaAutosize } from '@mui/material';
import React from 'react';
import Moment from 'react-moment';
import '../../styles/_dashboard.scss'

const Form = () => {

    const handleSubmit = (e) => {
        e.preventDefault().value;

    }
    
  return (
    <div className="container">
        <form className="form">
            <label>
                <textarea placeholder="What you did yesterday?"/>
            </label>
            <label>
                <textarea placeholder="What is your plan today?"/>
            </label>
            <label>
                <textarea placeholder="Blockers"/>
            </label>
        </form>
    </div>
  )
}

export default Form