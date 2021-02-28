import React from 'react';
import { useDispatch } from 'react-redux';
import { exitSD } from '../../features/appSlice';
import  './Backdrop.css';

const Backdrop = () => {
    const dispatch = useDispatch();
    return(
 <div className="Backdrop" onClick={() =>dispatch(exitSD())}
     ></div> 
);}

export default Backdrop;