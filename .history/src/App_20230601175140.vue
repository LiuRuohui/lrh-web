<template>
  <div id="app">
 
    <router-view/>
  </div>
</template>

<script>

import Index from "./components/index.vue"

export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
#app{
  height: 100%
}
</style>
