import { TextareaAutosize } from '@mui/material';
import React, { useState, useEffect } from 'react';
import Moment from 'react-moment';
import '../../styles/_dashboard.scss';
import Button from '@mui/material/Button';

const Form = () => {

    const handleSubmit = (e: any) => {
        alert('New saved log');
        e.preventDefault();
    }
    
  return (
    <div className="container">
        <form className="form" onSubmit={handleSubmit}>
            <label>
                <textarea placeholder="What you did yesterday?"/>
            </label>
            <label>
                <textarea placeholder="What is your plan today?"/>
            </label>
            <label>
                <textarea placeholder="Blockers"/>
            </label>
            <Button className="submitBtn" variant="outlined">save</Button>
        </form>
    </div>
  )
}

export default Form