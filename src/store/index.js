import Vue from 'vue'
import Vuex from 'vuex'
import { magenta } from 'color-name'
import student from './student'
import learn from './learn'

Vue.use(Vuex)//  $store  $store.state.name

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    student,
    learn
  }
})
