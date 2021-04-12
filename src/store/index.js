import Vuex from 'vuex';
import Vue from 'vue';

import mutations from './auth-mutations'
import getters from './auth-getters';
import actions from './auth-actions';

Vue.use(Vuex);

const initialState = () => {
    return { user: null, error: null };
  };
  
  export default new Vuex.Store({
    state: initialState(),
    mutations: mutations,
    actions: actions,
    getters: getters
  });