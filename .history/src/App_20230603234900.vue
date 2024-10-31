<template>
  <div id="app">
 
    <router-view/>
  </div>
</template>

<script>

//import Index from "./components/index.vue"

export default {
  name: 'App',
  data(){
    return {
      user : JSON.parse(sessionStorage.getItem('CurUser'))
    }
  },
  watch:{
    '$store.state.menu':{
      handler(val, old){
        if(!old && this.user && this.user.no){
          this.$store.commit("setMenu", val)
        }
      },
      immediate:true
    }
  }
}
</script>

<style>
#app{
  height: 100%
}
</style>
