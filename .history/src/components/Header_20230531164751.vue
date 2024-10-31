<template>
<div class="toolbar" style="display: flex;line-height: 60px;">
        <div style="margin-top:6px;">
            <i class="el-icon-s-fold" style="font-size:30px;" @click="collapse"></i>
        </div>
        <div style="flex: 1;text-align: center;font-size: 28px;">
            <span>欢迎来到仓库管理系统</span>
        </div>
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
            },
            collapse(){
                this.$emit('doCollapse')
            }
        }
    }

</script>

<style>

</style>