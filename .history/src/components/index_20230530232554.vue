<template>
    <el-container class="layout-container-demo" style="height: 100%">
      <el-aside width="200px" style="height: 100%">
         <Aside></Aside>
      </el-aside>
  
      <el-container style="height: 100%">
        <el-header style="text-align: right; font-size: 12px">
           <Header></Header>
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
        data() {
            const item = {
                date: '2016-5-2',
                name: '王小虎',
                address: 'websocket'
            };
            return {
                tableData: Array(10).fill(item)
            }
        },

    }
</script>

<style>
  .el-header {
    background-color: #B3C0D1;
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