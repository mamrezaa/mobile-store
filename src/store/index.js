import Vuex from 'vuex';
//import Vue from 'vue';
import products from './modules/products';
import buy_total from './modules/buy_total';



//Vue.use(Vuex);

export default new Vuex.Store({

  modules:{
     products,
     buy_total
    },

  

});