
import { createStore } from 'vuex'
import journal from "../modules/daybook/store/Journal/index";


const store = createStore({
    modules: {
        journal:journal
        
      }
})


export default store