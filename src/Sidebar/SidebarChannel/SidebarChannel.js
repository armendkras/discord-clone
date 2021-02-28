import React from 'react'
import { useDispatch } from 'react-redux';
import { exitSD, setChannelInfo } from '../../features/appSlice';
import './SidebarChannel.css';

function SidebarChannel({id, channelName}) {
    const dispatch = useDispatch();

    return (
        <div className="sidebarChannel" onClick={() => dispatch 
        (setChannelInfo({
            channelId: id,
            channelName: channelName
        }))} >
            <h4 onClick={() =>dispatch(exitSD())}><span className="sidebarChannel__hash" >#</span>{channelName}</h4>
            
        </div>
    )
}

export default SidebarChannel
