import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    channelId: null,
    channelName: null,
    show:false

  },
  reducers: {
    setChannelInfo: (state,action) => {
        state.channelId = action.payload.channelId;
        state.channelName = action.payload.channelName;
        
    },
    showSD:(state) =>{
      state.show = true;
    },
    exitSD:(state) =>{
      state.show = false;
    }
 
  },
});

export const { setChannelInfo, showSD, exitSD } = appSlice.actions;

export const selectChannelId = state => state.app.channelId;
export const selectChannelName = state => state.app.channelName;
export const selectShow = state => state.app.show;


export default appSlice.reducer;
