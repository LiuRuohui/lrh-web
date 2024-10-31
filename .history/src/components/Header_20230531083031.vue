<template>
<div class="toolbar">
    <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出登陆</el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
    <span>Tom</span>
</div>
</template>

<script>
    export default {
        name:"headerPage"
    }

</script>

<style>

</style>