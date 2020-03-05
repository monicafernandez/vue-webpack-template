import Vue from 'vue';
import Vuex from 'vuex';
import {} from 'opengate-js/dist/opengate-api-bower-7.2.0'

Vue.use(Vuex);


export default new Vuex.Store({
    state: {
        user: {email: 'test@test.es'}
    },
    getters: {
      $api: (state, getters) => {
        return new window.OpenGateAPI({
          apiKey: '@@API_KEY@@',
          url: '@@NORTH_API@@',
          timeout: 60000,
          south: {
            url: '@@SOUTH_API@@'
          }
        })
      }
    }

});
