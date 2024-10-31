<template>
<div class="toolbar">
    <el-dropdown>
        <span>Tom</span>
        <i class="el-icon-arrow-down" style="margin-left:5px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native="toUser">个人中心</el-dropdown-item>
          <el-dropdown-item @click.native="logout">退出登陆</el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
</div>
</template>

<script>
    export default {
        name:"headerPage",
        methods:{
            toUser(){
                console.log("to_user")
            },
            logout(){
                console.log("logout")
            }
        }
    }

</script>

<style>

</style>