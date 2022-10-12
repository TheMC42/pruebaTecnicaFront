import {createStore} from "vuex";
import hospitalModule from "@/store/hospital";

const store = createStore({
    modules:{
        hospitalModule
    }
})

export default store
