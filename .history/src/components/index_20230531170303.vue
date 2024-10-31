<template>
    <el-container class="layout-container-demo" style="height: 100%">
      <el-aside width="200px" style="height: 100%">
         <Aside :isCollapse="isCollapse"></Aside>
      </el-aside>
  
      <el-container style="height: 100%">
        <el-header style="text-align: right; font-size: 12px; border-bottom:darkgray 1px solid">
           <Header @doCollapse="doCollapse"></Header>
        </el-header>
  
        <el-main style="height: 100%">
           <Main></Main>
        </el-main>
      </el-container>
    </el-container>
  </template>

<script>

import Aside from "./Aside.vue"
import Header from "./Header.vue"
import Main from "./Main.vue"
    export default {
        name:"indexPage",
        components:{
            Aside,
            Header,
            Main
        },
        data(){
            return{
                isCollapse:false
            }
        },
        methods:{
            doCollapse(){
                this.isCollapse=!this.isCollapse
            }
        }

    }
</script>

<style>
  .el-header {
    color: #333;
    line-height: 60px;
  }
  .el-main {
    padding:5px
  }
  .el-aside {
    color: #333;
  }
</style>