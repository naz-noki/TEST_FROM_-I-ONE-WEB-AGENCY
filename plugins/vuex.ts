import { createStore } from "vuex";

const store = createStore({
  state:{
    id: 0,
  },

  mutations:{
    mutAddNewId(state, newId){
      state.id += newId;
    },
    mutAddRandomId(state, newId){
      state.id = newId;
    },
  },

  actions:{
    actAddNewId({ commit }, actionWithId){
      if(actionWithId === 'inc') commit('mutAddNewId', +1);
      else if(actionWithId === 'dec') commit('mutAddNewId', -1);
    },    
    actAddRandomId({ commit }){
      // let id = Math.floor(Math.random() * (2784 + 1));
      let id = Math.floor(Math.random() * (37 + 1));
      commit('mutAddRandomId', id);
    },    
  },

  getters:{
    getID(state){
      return state.id;
    },
  }
});

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(store);
  // Install the store instance as a plugin

});