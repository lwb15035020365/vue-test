export default {
    namespaced:true, 
    state: {
        courseName: 'js视频',
        price: 10,
    },
    getters: {
        coursePrice(state) {
            return '￥' + state.price
        }
    },
    mutations: {
        changePrice (state, {price}) {
            state.price = price;
        }
    },
    actions: {},
}