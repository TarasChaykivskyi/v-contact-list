import Vue from 'vue'
import VueRouter from "vue-router"
import contactList from "../components/contactList";
import contact from "../components/contact";

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        redirect: { name: "contacts"}
    },
    {
        name: "contacts",
        path: "/contacts",
        component: contactList
    },
    {
        path: "/contacts/:id",
        component: contact
    },
    {
        path: "*",
        redirect: { name: "contacts"}
    }
]

export default new VueRouter({
    routes,
    mode: 'history'
})
