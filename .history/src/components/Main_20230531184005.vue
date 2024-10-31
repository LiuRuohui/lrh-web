<template>
<el-scrollbar>
            <el-table :data="tableData">
              <el-table-column prop="id" label="ID" width="60" />
              <el-table-column prop="no" label="账号" width="180" />
              <el-table-column prop="age" label="年龄" />
            </el-table>
          </el-scrollbar>
</template>

<script>
    export default {
        name:"mainPage",
        data() {
            return {
                tableData: []
            }
        },
        methods:{
            loadGet(){
                this.$axios.get(this.$httpUrl+'/user/list').then(res=>res.data).then(res=>{
                    console.log(res,"这里是get")
                })
            },
            loadPost(){
                this.$axios.post(this.$httpUrl+'/user/listP',{}).then(res=>res.data).then(res=>{
                    console.log(res)
                    this.tableData=res
                })
            }
        },
        beforeMount(){
            this.loadGet();
            this.loadPost();
        }
    }

</script>

<style>

</style>