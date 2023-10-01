import {action, persist} from 'easy-peasy'

const favoriteModel = persist({
    items : [],
    addToFavorite : action((state, payload)=>{
        if(state.items.includes(payload)){
            return
        }else{
            state.items.unshift(payload);
            state.items = state.items.slice(0, 3);
        }
        
    }),
    removeFromFavorite : action((state, payload)=>{
        state.items = state.items.filter((pId)=> payload != pId)
    })
})

export default favoriteModel;