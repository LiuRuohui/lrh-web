<template>
    <el-container class="layout-container-demo" style="height: 100%">
      <el-aside :width="aside_width" style="height: 100%">
         <Aside :isCollapse="isCollapse"></Aside>
      </el-aside>
  
      <el-container style="height: 100%">
        <el-header style="text-align: right; font-size: 12px; border-bottom:darkgray 1px solid">
           <Header @doCollapse="doCollapse" :icon="icon"></Header>
        </el-header>
  
        <el-main style="height: 100%">
           <router-view />
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
                isCollapse:false,
                aside_width:'200px',
                icon:'el-icon-s-fold'
            }
        },
        methods:{
            doCollapse(){
                this.isCollapse=!this.isCollapse
                if(!this.isCollapse){
                    this.aside_width='200px'
                    this.icon='el-icon-s-fold'
                }else {
                    this.aside_width='64px'
                    this.icon='el-icon-s-unfold'
                }
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