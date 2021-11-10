import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const storage = {
  fetch() {
    const arr = [];
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) === 'loglevel:webpack-dev-server') return;

        arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
      }
    }
    console.log('arr', arr);
    return arr;
  },
};

export const store = new Vuex.Store({
  state: {
    todos: storage.fetch(),
    headerText: 'a',
  },
});
