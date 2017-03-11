<template>
  <div class="my-app">
    <film :starwars="films"></film>
    <button v-on:click="getFilms">Next</button>
  </div>
</template>
<script>
import film from './film.vue';
import axios from 'axios'

export default {
  components: {
    film,
  },
  data: function () {
  return {
     films: ''
  }
},
  created: function () {
    this.getFilms()
  },
methods: {
    getFilms: function () {
    var self = this;

axios.get("films/", {
    baseURL: 'https://swapi.co/api/',
    responseType: 'json'
  })
  .then(function (response) {
  console.log(response);
    var resp= response.data;
        self.films=resp;
  })
  .catch(function (error) {
    console.log(error);
  });
    }
  }
};
</script>
<style>
.my-app {
  background: #eee;
}
.yelloColor {
        background-color: #ccccc2;
        color: red;
    }
    
    .meterColor {
        background-color: #cccccc;
        color: green;
    }
</style>