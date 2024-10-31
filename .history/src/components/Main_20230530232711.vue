<template>
<el-scrollbar>
            <el-table :data="tableData">
              <el-table-column prop="date" label="Date" width="140" />
              <el-table-column prop="name" label="Name" width="120" />
              <el-table-column prop="address" label="Address" />
            </el-table>
          </el-scrollbar>
</template>

<script>
    export default {
        name:"mainPage",
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

</style>