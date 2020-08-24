const globalList = [];

function setUser(index) {
    return {
        id: index,
        firstName: "Name" + index,
        lastName: "Surname" + index,
        email: "test" + index + "@gmail.com",
        phone: "+38-(068)-00-000-" + index,
        city: "City" + index
    }
}

for (let i = 1; i < 5; i++) {
    globalList.push(setUser(i));
}

export default {
    state: {
        list: globalList,
        id: globalList.length + 1,
        showError: false
    },
    getters: {
        list(state) {
            return state.list
        },
        id(state) {
            return state.id
        },
        error(state) {
            return state.showError
        }
    },
    mutations: {
        addNewContact(state, obj) {
            for(let key in obj) {
                if(obj[key] === "") {
                    state.showError = true
                    return false
                }
            }
            state.showError = false
            state.id++
            state.list.push(obj)
            for(let key in obj) {
                obj[key] === ""
            }
        },
        reset(state, newList) {
            console.log(newList)
            state.list = newList
        }
    },
    actions: {
       addNewContact({commit}, obj) {
           commit('addNewContact', obj)
       },
        reset({commit}, newList) {
            commit('reset', newList)
        }
    }
}