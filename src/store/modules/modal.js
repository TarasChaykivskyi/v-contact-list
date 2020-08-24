export default {
    state: {
        showModal: false,
        confirm: false,
        currentId: Number
    },
    getters: {
        showModal(state) {
            return state.showModal
        },
        confirm(state) {
            return state.confirm
        }
    },
    mutations: {
        show(state, index) {
            state.currentId = index
            state.showModal = true
        },
        hide(state) {
            state.showModal = false
        },
        modalConfirm(state, obj) {
            obj.splice(state.currentId, 1)
            state.showModal = false
        }
    },
    actions: {
        show({commit}, index) {
            commit('show', index)
        },
        hide({commit}) {
            commit('hide')
        },
        modalConfirm({commit}, obj) {
            commit('modalConfirm', obj)
        }
    }
}