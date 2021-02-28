import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Chat from './Chat/Chat';
import { selectUser } from './features/userSlice';
import { auth } from './firebase/firebase';
import Login from './Login/Login';
import { login, logout } from './features/userSlice';

import Sidebar from './Sidebar/Sidebar';
import SideDrawer from './SideDrawer/SideDrawer';
import { selectShow } from './features/appSlice';

function App() {
  const dispatch = useDispatch()
  const user = useSelector(selectUser);
  const Sshow = useSelector(selectShow);

  useEffect(() => {
   auth.onAuthStateChanged((authUser) => {
     if(authUser){
       //user Is logged in
       dispatch(login({
         uid: authUser.uid,
        photo: authUser.photoURL,
        email: authUser.email,
        displayName: authUser.displayName
       }))
     }else{
       //the user is logged out
       dispatch(logout()); 
     }
   })
  }, [dispatch])

console.log(Sshow);
  return (
    <div className="app">
          {user ? (
            Sshow ? 
            <>
              <SideDrawer/>
            </>:
            
            (
              <>
             <div className="sideB">
               <Sidebar/>
             </div>
             
             <Chat/>
             </>)
          ): <Login/>}
          
          
          
    </div>
  
  );
}

export default App;
