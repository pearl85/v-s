<template>
  <div >
    <div class="row" v-for="filmobj in starwars.results">
        <div class="col-sm-4">{{filmobj.title}}</div>
        <div class="col-sm-4">{{filmobj.director}}</div>
        <div class="col-sm-4">{{filmobj.release_date}}</div>
    </div>
</div>
</template>
<script>
export default {
  props: [ 'starwars' ],
  replace: false,
};
</script>