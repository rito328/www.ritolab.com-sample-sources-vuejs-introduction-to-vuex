export const counter = {
    namespaced: true,
    state: {
        count: 0,
    },
    getters: {
        isPositive: state => {
            return state.count > 0
        },
        isNegative: state => {
            return state.count < 0
        },
    },
    mutations: {
        increment (state) {
            state.count++
        },
        decrement (state) {
            state.count--
        },
        add (state, amount) {
            state.count += amount
        },
        sub (state, amount) {
            state.count -= amount
        }
    },
    actions: {
        addAsync ({ commit }, payload) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    commit('add', payload.amount)
                    resolve()
                }, 1000)
            })
        },
        subAsync ({ commit }, payload) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    commit('sub', payload.amount)
                    resolve()
                }, 1000)
            })
        }
    }
}