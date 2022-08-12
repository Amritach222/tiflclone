import { createStore } from "vuex";
import module from "./modules/module";
import directors from "./modules/directors";
import ourprogram from "./modules/ourprogram";
export default createStore({
    modules:{
        data:module,
        directors:directors,
        programs:ourprogram
    }
    ,
    // getters:{
    //     getObjective(){
    //         return  data.objectives
    //     }

    // }
})