import { useEffect, useState } from "react"
import getPlayList from "../api"
import storage from "../utils/Storage";

const STORAGE_KEY = 'cy__playlist__state';

const INIT_STATE = {
  playLists: {},
  recentPlayLists: [],
  favorites: [],
};

const usePlayLists = () =>{
    const [state, setState] = useState(INIT_STATE)

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);


    useEffect(()=>{
      const state = storage.get(STORAGE_KEY);
      if(state){
        setState({...state})
      }
    },[])


    useEffect(()=>{
      if(state !== INIT_STATE){
        storage.save(STORAGE_KEY, state);
      }
    }, [state])


    const getPlayListsById = async (playListId, force=false) => {
      if (state.playLists[playListId] && !force) {
        return;
      }

      setLoading(true);

      try {
        const playlist = await getPlayList(playListId);
        setError("");
        setState((prev) => ({
          ...prev,
          playLists: {
            ...prev.playLists,
            [playListId]: playlist,
          },
        }));
      } catch (e) {
        setError(e.response?.data?.error?.message || "Something went wrong");
      } finally {
        setLoading(false);
      }

      
    }

    const addToFavorites = (playListId) =>{
        setState((prev) => ({
          ...prev,
          favorites: [...prev, playListId], //[...prev.favorites, playListId]
        }));
    }

    const addToRecents = (playListId) =>{
        setState((prev) => ({
          ...prev,
          recentPlayLists: [...prev, playListId], //[...prev.recentPlayLists, playListId]
        }));
    }

    const getPlayListsByIds = (ids=[]) =>{
        return ids.map((id)=> state.playLists[id])
    }

    return {
      playLists: state.playLists,
      favorites: getPlayListsByIds(state.favorites),
      recentPlayLists: getPlayListsByIds(state.recentPlayLists),
      getPlayListsById,
      addToRecents,
      addToFavorites,
      error,
      loading
    };

}

export default usePlayLists