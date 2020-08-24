import Vue from 'vue'
import Vuex from 'vuex'
import contactList from "./modules/contactList"
import modal from "./modules/modal"
import contact from "../components/contact";

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        contactList,
        modal,
        contact
    }
})