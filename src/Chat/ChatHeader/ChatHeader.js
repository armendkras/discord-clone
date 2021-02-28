import React from 'react'
import './ChatHeader.css';
import NotificationsIcon from '@material-ui/icons/Notifications';
import EditLocationRoundedIcon from '@material-ui/icons/EditLocationRounded';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import HelpRoundedIcon from '@material-ui/icons/HelpRounded';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import { useDispatch } from 'react-redux';
import {showSD} from '../../features/appSlice';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function ChatHeader({ channelName }) {
    const dispatch = useDispatch();
    return (
        <div className='chatHeader'>
            <div className="chatHeader__left">
                <h3>
                    <ArrowForwardIosIcon className="showSide" onClick={()=> dispatch(showSD())}/>
                    <span className="chatHeader__hash"  
                    
                    >
                        #
                    </span>
                    <div className="channelName">
                    {channelName} 
                    </div>
                   
                </h3>
            </div>

            <div className="chatHeader__right">
            <div className="chatHeader__search">
                <input placeholder="Search" type="text" />
                <SearchRoundedIcon/>
            </div>
            <div className="nnIcon">
            <NotificationsIcon/>
            </div>
            <div className="editIcon">
            <EditLocationRoundedIcon />

            </div>
            <PeopleAltRoundedIcon />
            <SendRoundedIcon/>
            <HelpRoundedIcon/>
            </div>
        </div>
    )
}

export default ChatHeader
