<template>
    <el-container class="layout-container-demo" style="height: 100%">
      <el-aside width="200px" style="height: 100%">
         <Aside></Aside>
      </el-aside>
  
      <el-container style="height: 100%">
        <el-header style="text-align: right; font-size: 12px">
          <div class="toolbar">
            <el-dropdown>
              <el-icon style="margin-right: 8px; margin-top: 1px"
                ><setting
              /></el-icon>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>View</el-dropdown-item>
                  <el-dropdown-item>Add</el-dropdown-item>
                  <el-dropdown-item>Delete</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
            <span>Tom</span>
          </div>
        </el-header>
  
        <el-main style="height: 100%">
          <el-scrollbar>
            <el-table :data="tableData">
              <el-table-column prop="date" label="Date" width="140" />
              <el-table-column prop="name" label="Name" width="120" />
              <el-table-column prop="address" label="Address" />
            </el-table>
          </el-scrollbar>
        </el-main>
      </el-container>
    </el-container>
  </template>

<script>

import Aside from "./Aside.vue"

    export default {
        name:"indexPage",
        components:{
            Aside
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