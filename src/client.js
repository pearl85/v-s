import Vue from 'vue';
import filmlist from '../component/filmlist.vue';
const VueApp = Vue.extend(filmlist);
new VueApp({
  el: '.my-app',
});