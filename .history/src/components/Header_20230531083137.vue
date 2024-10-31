<template>
<div class="toolbar">
    <el-dropdown>
        <span>Tom</span>
        <i class="el-icon-setting"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出登陆</el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
</div>
</template>

<script>
    export default {
        name:"headerPage"
    }

</script>

<style>

</style>