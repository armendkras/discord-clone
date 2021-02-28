import React, { useEffect, useState } from 'react';
import  './Sidebar.css';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import SidebarChannel from './SidebarChannel/SidebarChannel';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import CallIcon from '@material-ui/icons/Call';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import db, { auth } from '../firebase/firebase';
import Profile from './Profile/Profile';
import CloseIcon from '@material-ui/icons/Close';
import { exitSD} from '../features/appSlice';

function Sidebar() {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    const [channels, setChannels] = useState([]);

    useEffect(() => {
        db.collection('channels').onSnapshot((snapshot) => 
            setChannels(
                snapshot.docs.map((doc) =>( {
                id: doc.id,
                channel: doc.data(),

            }))
            )
        )
    }, []);

    const handleAddChannel = () => {
        const channelName = prompt("Enter a new channel name!! No more than 35 Characters ");

        if(channelName){
            db.collection('channels').add({
                channelName: channelName,
            })
        }
    }

    return (
        <div className="sidebar">
            <div className="sidebar__top">
              <div className="CloseI"><CloseIcon  onClick={() =>dispatch(exitSD())}/></div> <h3>Discord Clone</h3>

            <ExpandMoreIcon/>
            </div>
            <div className="sidebar__channels">
                <div className="sidebar__channelsHeader">
                    <div className="sidebar__header">
                    <ExpandMoreIcon/>
                    <h3>Text Channels</h3>
                    </div>
                   <AddIcon onClick={handleAddChannel} className="sidebar__addChannel"/>
                </div>
            <div className="sidebar__channelsList">
               {channels.map(({id, channel}) => (
                     <SidebarChannel  key={id} id={id} channelName={channel.channelName.substring(0, 30)} />
               ))}
            </div>
            </div>
            <div className="sidebar__voice">
                <SignalCellularAltIcon 
                className="sidebar__voiceIcon"
                fontSize="large"
                />
                <div className="sidebar__voiceInfo">
                    <h3>Voice Connected</h3>
                    <p>Stream</p>
                </div>
                <div className="sidebar__voiceIcons">
                    <InfoOutlinedIcon/>
                    <CallIcon/>
                </div>
            </div>
        <Profile auth={auth} user={user}/>
        </div>
    )
}

export default Sidebar
