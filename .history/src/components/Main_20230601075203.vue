<template>
    <div>
        <div style="margin-bottom: 10px;">
            <el-input v-model="name" placeholder="请输入名字" suffix-icon="el-icon-search" style="width:200px" @keyup.enter.native="loadPost"></el-input>
            <el-select v-model="sex" filterable placeholder="请选择性别" style="margin-left:10px">
                <el-option
                v-for="item in sexs"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
            <el-button type="primary" style="margin-left: 10px;" @click="loadPost">查询</el-button>
            <el-button type="success" @click="resetParam">重置</el-button>
            <el-button type="primary" style="margin-left: 10px;" @click="add">新增</el-button>
        </div>
            <el-table :data="tableData" :header-cell-style="{ background: '#f2f5fc', color: '#555555' }" border>
              <el-table-column prop="id" label="ID" width="60" />
              <el-table-column prop="no" label="账号" width="180" />
              <el-table-column prop="name" label="姓名" width="180" />
              <el-table-column prop="age" label="年龄" width="80" />
              <el-table-column prop="sex" label="性别" width="80">
              <template slot-scope="scope">
                    <el-tag
                            :type="scope.row.sex === 1 ? 'primary' : 'success'"
                            disable-transitions>{{scope.row.sex === 1 ? '男' : '女'}}</el-tag>
                </template>
              </el-table-column>
              <el-table-column prop="roleId" label="角色" width="180">
                <template slot-scope="scope">
                    <el-tag
                            :type="scope.row.roleId === 0 ? 'danger' : (scope.row.roleId === 1 ? 'primary' : 'success')"
                            disable-transitions>{{scope.row.roleId === 0 ? '超级管理员' :
                                                    (scope.row.roleId === 1 ? '管理员' : '用户')}}</el-tag>
                </template>
              </el-table-column>
              <el-table-column prop="phone" label="电话" width="180" />
              <el-table-column prop="operate" label="操作" width="180">
                    <el-button size="small" type="success">编辑</el-button>
                    <el-button size="small" type="danger" >删除</el-button>
              </el-table-column>
            </el-table>
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="pageNum"
                :page-sizes="[10, 20, 30, 40]"
                :page-size="pageSize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="total">
            </el-pagination>
            <el-dialog
                title="提示"
                :visible.sync="centerDialogVisible"
                width="30%"
                center>
                <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="账号">
                        <el-col :span="20">
                            <el-input v-model="form.no"></el-input>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="名字">
                        <el-col :span="20">
                            <el-input v-model="form.name"></el-input>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="密码">
                        <el-col :span="20">
                            <el-input v-model="form.password"></el-input>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="年龄">
                        <el-col :span="20">
                            <el-input v-model="form.age"></el-input>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="性别">
                        <el-radio-group v-model="form.sex">
                        <el-radio label="1">男</el-radio>
                        <el-radio label="0">女</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="电话">
                        <el-col :span="20">
                            <el-input v-model="form.phone"></el-input>
                        </el-col>
                    </el-form-item>
                </el-form>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="centerDialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="save">确 定</el-button>
                </span>
            </el-dialog>
    </div>
</template>

<script>
    export default {
        name:"mainPage",
        data() {
            return {
                tableData: [],
                pageSize:10,
                pageNum:1,
                total:0,
                name:'',
                sex:'',
                sexs:[
                        {
                        value: '1',
                        label: '男'
                        }, {
                        value: '0',
                        label: '女'
                        }
                 ],
                centerDialogVisible:false,
                form:{
                    no:'',
                    name:'',
                    password:'',
                    age:'',
                    phone:'',
                    sex:'0',
                    roleId:'1'
                }
            }
        },
        methods:{
            loadGet(){
                this.$axios.get(this.$httpUrl+'/user/list').then(res=>res.data).then(res=>{
                    console.log(res,"这里是get")
                })
            },
            loadPost(){
                this.$axios.post(this.$httpUrl+'/user/listPageC1',{
                    pageSize:this.pageSize,
                    pageNum:this.pageNum,
                    param:{
                        name:this.name,
                        sex:this.sex
                    }
                }).then(res=>res.data).then(res=>{
                    console.log(res)
                    if(res.code == 200){
                        this.tableData=res.data
                        this.total=res.total
                    }else{
                        alert("获取失败喽喽喽")
                    }
                })
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
                this.pageNum=1
                this.pageSize=val
                this.loadPost()
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
                this.pageNum=val
                this.loadPost()
            },
            resetParam(){
                this.name=''
                this.sex=''
            },
            add(){
                this.centerDialogVisible=true
                this.$nextTick(()=>{
                    this.resetForm()
                })
            },
            save(){
                this.$axios.post(this.$httpUrl+'/user/save',this.form).then(res=>res.data).then(res=>{
                    console.log(res)
                    if(res.code == 200){
                        this.$message({
                            message: '操作成功!',
                            type: 'success'
                            });
                        this.centerDialogVisible=false
                        this.loadPost()
                    }else{
                        this.$message({
                            message: '操作失败!',
                            type: 'error'
                            });
                    }
                })
            },
            resetForm() {
                this.$refs.form.resetFields();
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