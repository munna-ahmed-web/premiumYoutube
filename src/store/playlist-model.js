import { action, thunk } from 'easy-peasy'
import getPlayList from '../api';



const playlistModel = {
  data : {},
  error : '',
  isLoading : false,
  addPlaylist : action((state, payload)=>{
    state.data[payload.playListId] = payload;

  }),
  setLoading : action((state, payload)=>{
    state.isLoading = payload;
  }),
  setError : action((state, payload)=>{
    state.error = payload;
  }),
  getPlayList : thunk( async (action, payload, {getState})=>{

    if(getState().data[payload]){
      return
    }

    action.setLoading(true);
    try {
      const playlist = await getPlayList(payload);
      action.addPlaylist(playlist);
    } catch (error) {
      action.setError(error.response?.data?.error?.message || "Something went wrong");
    }finally{
      action.setLoading(false)
    }
  
  }),
  deletePlayList : action(({data}, payload)=>{
    delete data[payload]
  })
};



export default playlistModel;