import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    projects: [
      { id: 1, title: 'Project One', description: 'Description of project one' },
      { id: 2, title: 'Project Two', description: 'Description of project two' }
    ]
  },
  getters: {
    allProjects: state => state.projects,
  },
  mutations: {},
  actions: {}
});
