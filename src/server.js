// server-entry.js
import Vue from 'vue';
import filmlist from '../component/filmlist.vue';

const app = new Vue(filmlist);
// the default export should be a function
// which will receive the context of the render call
export default function(context) {
  return new Promise((resolve, reject) => {
    resolve(app);
  });
};