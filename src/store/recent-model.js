
import {action, persist} from 'easy-peasy'

const recentModel = persist({
    items : [],
    addToRecent : action((state, payload)=>{
        if (state.items.includes(payload)) {
          return;
        } else {
          state.items.unshift(payload);
          state.items = state.items.slice(0, 3);
        }
        
    })
})

export default recentModel;